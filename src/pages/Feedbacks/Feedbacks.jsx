import styles from './Feedbacks.module.css'

import Page from '../../components/Page/Page.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import LinkedList from '../../components/LinkedList/LinkedList.jsx';
import Circle from '../../components/Circle/Circle.jsx';
import Sparkle from '../../components/Sparkle/Sparkle.jsx';
import { Link } from 'react-router-dom';

export default function Posts({  }) {
    return (
        <>
          <Page children={
            <>

                <section>
                <Sparkle radius="25" style={{translate: "-90px -90px"}} color="red"/>
                <Sparkle radius="30" style={{translate: "-30px -60px"}} color="yellow"/>
                <Sparkle radius="20" style={{translate: "50px -90px"}} color="blue"/>
                    <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>
                        Feedbacks<span style={{color: "hsl(212, 52%, 37%)"}}>:</span>
                    </h1>
                </section>

                <section className={styles.projectsContainer}>
                    <LinkedList name="FrootLoopsPoptart" role="Famous developer with 200M+ visits" content="...I want to mention the quality of the code and how fast you did it. One of the best coders I've ever hired!"/>
                    <LinkedList name="TM951" role="Famous developer, owner of a group with 140k+ members" content="...was very dedicated to the job, made all the revisions we wanted and better, 100% recommend"/>
                </section>
            </>
          } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
        
          <Footer/>
        </>
    );
}