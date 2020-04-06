import React from 'react';

import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.information}>Email: LuxuryCars@dealer.com
                <br/>Phone: 800-820-8820
                <br/>Address: Bellevue Square, Bellevue, WA 98004
            </div>
            <form className={styles.form}>
                <fieldset className={styles.leftField}>
                    <legend>Info</legend>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type='text'
                        id='lastName'
                        className={styles.textInput}
                    />
                    <label htmlFor="firstName">First name</label>
                    <input
                        type='text'
                        id='firstName'
                        className={styles.textInput}
                    />
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input
                        type='text'
                        id='phoneNumber'
                        className={styles.textInput}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type='text'
                        id='email'
                        className={styles.textInput}
                    />
                    <input type='submit' value='SUBMIT' />
                </fieldset>
                <fieldset className={styles.rightField}>
                    <legend>Message</legend>
                    <label htmlFor="message"></label>
                    <textarea
                        id='message'
                        className={styles.message}
                    />
                </fieldset>
            </form>
        </div>
    )
};

export default Contact;