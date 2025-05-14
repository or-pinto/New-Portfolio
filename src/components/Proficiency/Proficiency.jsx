import styles from './Proficiency.module.css'

import logos from '../../Logos.module.jsx'

export default function Proficiency({ name }) {
    // Return
    return (
        <div className={`${styles.container} animated_appearance`}>
            <img className={styles.image} src={logos[name]}/>
            <p className={styles.name}>{name}</p>
        </div>
    );
};
