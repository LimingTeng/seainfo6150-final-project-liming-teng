import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';


const NotFound = () => {
    return (
        <div className={styles.style}>
            <h1>404 Error Page</h1>
            <h4>Sorry we are not able to connect.Reload the page to try again</h4>
            <div className={styles.errorbutton}>
                <Link to='/' className={styles.link}>
                    Go to Home Page
                </Link>
            </div>
        </div>
    )
};

export default NotFound;
