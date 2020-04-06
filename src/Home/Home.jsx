import React from 'react';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <img src="/images/information/home.jpg" className={styles.image} alt="home"/>
        </div>
    )
};

export default Home;
