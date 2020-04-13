import React from 'react';

import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <p>
                Finding the right car, taking time to see the car, tough negotiating , trade in values, etc.
                Who has time for all that? Luxury Car Dealer makes it easy and efficient for enthusiasts to list and sell their vehicles using our powerful internet platform.
            </p>
            <p>
                You can find different kinds of luxury car in left side, such as :
            </p>
            <p>Porsche, Ferrari, Lamborghini, Mercedes</p>
            <img src="/images/information/about.jpg" className={styles.image} alt="home"/>
        </div>
    )
};

export default About;