import styles from './LinkedList.module.css'
export default function LinkedList({name, role, content}){
    
    return (
        <div className={`${styles.container} animated_appearance`}>
            <h1 className={styles.title}>{name}</h1>
            <h3 className={styles.role}>{role}</h3>
            <h2 className={styles.content}>{content}</h2>
            <div className={styles.side_line}>
                <div className={styles.circle}>
                    <img src='../../assets/smile.svg' alt='' className={styles.smile}/>
                </div>
            </div>
        </div>
    );
};
