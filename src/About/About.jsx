import React from 'react';

import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <img src="/images/information/about.jpg" className={styles.image} alt="home"/>
        </div>
    )
};

export default About;