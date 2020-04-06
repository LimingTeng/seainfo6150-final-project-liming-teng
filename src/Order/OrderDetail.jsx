import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './OrderDetail.module.css';

class OrderDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedSuccessfully: false
    };
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const { selectedProductId, categories } = this.props;
    let selectedProductCategoryId = null;
    const selectedProduct = this.props.products[selectedProductId];

    let opt;
    if (selectedProduct) {
      selectedProductCategoryId = selectedProduct.categoryId;
      const category = categories[selectedProductCategoryId];
      opt = (
        <div className={styles.container + ' ' + styles.responsive}>
          <div className={styles['bottom-panel']}>
            <img
              className={styles.image}
              alt='CarImage'
              src={category.img.lg}
            />
          </div>
        </div>
      );
    }
    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/2' />
    ) : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {opt}
        <fieldset className={styles.button}>
          <input className={styles.submit} type='submit' value='Confirm' />
        </fieldset>
      </form>
    );
  }
}

OrderDetail.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string,
  selectedOptions: PropTypes.object.isRequired
};

export default OrderDetail;
