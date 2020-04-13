import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './App.module.css';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import CategoryProducts from './CategoryProducts/CategoryProducts';
import Error from './Error/Error';
import ProductDetail from './ProductDetail/ProductDetail';
import OrderDetail from './Order/OrderDetail';
import OrderConfirm from './Order/OrderConfirm';
import Summary from './Order/Summary';
import ThankYou from './Order/ThankYou';
import NotFound from './NotFound/NotFound';
import {
  selectProductId,
  setUserInfo,
  viewProduct
} from './actions/actions';

function App(props) {
  return (
      <Router>
        <div className={styles.container}>

          <div className={styles.logoContainer}>
            <Link to='/' className={styles.logo}>
              Luxury Car<br/>Dealer
            </Link>
          </div>

          <div className={styles.headerContainer}>
            <Link to='/' className={styles.header}>
              HOME
            </Link>
            <Link to='/Products' className={styles.header}>
              PRODUCTS
            </Link>
            <Link to='/About' className={styles.header}>
              ABOUT
            </Link>
            <Link to='/Contact' className={styles.header}>
              CONTACT
            </Link>
          </div>

          <div className={styles.informationContainer}>
             <img src="/images/information/information.png" className={styles.image} alt="information"/>
          </div>

          <Categories categories={Object.values(props.categories)} />

          <main className={styles.mainContainer}>
            {props.error && <Error error={props.error} />}

            <Switch>
              <Route exact path='/' render={() => <Home {...props} />} />
              <Route
                  exact
                  path='/products'
                  render={() => {
                    const sortedProducts = Object.values(props.products).sort(
                        (a, b) => b.year - a.year
                    );
                    return (
                        <AllProducts
                            categories={props.categories}
                            products={sortedProducts}
                        />
                    );
                  }}
              />
              <Route
                  exact
                  path='/products/:category'
                  render={routerProps => {
                    const categoryId = routerProps.match.params.category;
                    const category = props.categories[categoryId];

                    const products = Object.values(props.products).filter(
                        product => product.categoryId === categoryId
                    );
                    const sortedProducts = Object.values(products).sort(
                        (a, b) => b.year - a.year
                    );

                    return (
                        <CategoryProducts
                            categories={props.categories}
                            category={category}
                            products={sortedProducts}
                        />
                    );
                  }}
              />
              <Route
                  path='/products/:category/:id'
                  render={routerProps => {
                    const id = routerProps.match.params.id;
                    const product = props.products[id];

                    return <ProductDetail {...props} product={product} />;
                  }}
              />
              <Route
                  exact
                  path='/order/1'
                  render={() => <OrderDetail {...props} />}
              />
              <Route
                  exact
                  path='/order/2'
                  render={() => <OrderConfirm {...props} />}
              />
              <Route
                  exact
                  path='/order/summary'
                  render={() => <Summary {...props} />}
              />
              <Route exact path='/order/thank-you' render={() => <ThankYou />} />
              <Route exact path='/about' render={() => <About {...props} />} />
              <Route exact path='/contact' render={() => <Contact {...props} />} />
              <Route render={() => <NotFound {...props} />} />
            </Switch>
          </main>
        </div>
      </Router>
  );
}

App = connect(
    state => state,
    dispatch => {
      return {
        selectProductId: (productId, e) =>
            dispatch(selectProductId({ id: productId })),
        setUserInfo: (infoId, e) => {
          dispatch(setUserInfo({ id: infoId, e }));
        },
        viewProduct: productId => dispatch(viewProduct({ id: productId }))
      };
    }
)(App);

export default App;
