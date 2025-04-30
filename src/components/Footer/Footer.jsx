import {  } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

export default function Footer({  }) {

    return (
        <footer className={styles.footer}>
            <p className={`${styles.bio}`}>Together we can make this world a better place.</p>
            <p className={`${styles.signature}`}>&copy; 2025 Or Pinto</p>
        </footer>
    );
};
