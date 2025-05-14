import styles from './Project.module.css'

import logos from '../../Logos.module.jsx'

export default function Project({ name, period, usage, content, link}) {
    usage = usage || [] // If the usage is not defined then make it an empty array
    return (
        <div className={`${styles.container} animated_appearance`} onClick={() =>  { if (link !== 'none'){ window.open(link, '_blank') }}}>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.period}>{period}</h2>
            <h3 className={styles.content}>{content}</h3>
            <div className={styles.usage}>
                {
                    usage.map((use, index) => 
                        <div key={index} className={styles.use}>
                            <img className={styles.useImage} src={logos[use]} alt=""/>
                            <span className={styles.useName}>{use}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
