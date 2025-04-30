import { useRef } from 'react'
import { Link } from 'react-router-dom';

import styles from './Home.module.css'

import Page from '../../components/Page/Page.jsx';
import CommandPrompt from '../../components/CommandPrompt/CommandPrompt.jsx';
import Circle from '../../components/Circle/Circle.jsx';
import Project from '../../components/Project/Project.jsx';
import Proficiency from '../../components/Proficiency/Proficiency.jsx';
import Sparkle from '../../components/Sparkle/Sparkle.jsx'
import Clipboard from '../../components/Clipboard/Clipboard.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function Home(){
  // References
  const backgroundGrid = useRef(null)

  // Return
  return (
    <>
      <Page children={
        <>
          <div className={styles.left}>
              <Circle x="100" y="200" color="rgba(194, 75, 71, 0.2)" radius="550"/>
              <Circle x="250" y="100" color="rgba(255, 124, 194, 0.1)" radius="600"/>
              <h1 className={styles.name}>Or Pinto</h1>
              <h2 className={styles.role}>Full Stack Developer</h2>
              <h3 className={styles.bio}>Together we can make this world a better place.</h3>
          </div>

          <div className={styles.right}>
              <CommandPrompt/>
          </div>
        </>
      } style={{}}/>

      <Page children={
        <>
          <Sparkle radius="25" style={{translate: "-50px -40px"}} color="blue"/>
          <Sparkle radius="30" style={{translate: "10px -20px"}} color="yellow"/>
          <Sparkle radius="20" style={{translate: "50px -90px"}} color="red"/>
          <section>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "",  fontSize: "3.4rem"}}>Who am I<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
              <h3 className={styles.bio} style={{textAlign: "center", paddingLeft: "200px", paddingRight: "200px", fontWeight: "400"}}>
              I'm a 17-year-old programmer with experience gained through self-learning, university courses, and high school education. With a strong background in Full Stack Development, I am now focused on mastering the fundamentals of AI to create impactful solutions.
              </h3>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>My Projects<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          </section>

          <section className={styles.projectsContainer}>
          <Project
              link="https://github.com/ExpDev-mul/Assembler"
              name="Assembler"
              period="April 2025"
              usage={["C", "Linux"]}
              content="An assembler that translates a custom assembly language into 24-bit machine code in hexadecimal form. Supports variable declarations, labels, macros, and a comprehensive instruction set."
          />
          <Project
              link="https://github.com/ExpDev-mul/Alzheimer-CNN"
              name="Alzheimer CNN"
              period="March 2025"
              usage={["Python", "TensorFlow", "Keras"]}
              content="A convolutional neural network model designed for classifying multiclass stages of Alzheimer’s disease using medical imaging data through deep learning with TensorFlow."
          />
            <div className={styles.projectsContainerBottom}>
              <Link to="/projects" style={{textDecoration: "none"}}>
                <p className={styles.seeMore}>View All</p>
              </Link>
            </div>
          </section>

          <Sparkle radius="30" style={{translate: "-150px 95px"}} color="blue"/>
          <Sparkle radius="15" style={{translate: "150px 120px"}} color="yellow"/>
          <Sparkle radius="20" style={{translate: "0px 90px"}} color="red"/>
          <h1 className={styles.name} style={{textAlign: "center", marginTop: "200px", fontSize: "3.4rem"}}>My Technologies<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          <section className={styles.usesContainer}>
            <Proficiency name="C"/>
            <Proficiency name="Linux"/>
            <Proficiency name="C++"/>
            <Proficiency name="Python"/>
            <Proficiency name="TensorFlow"/>
            <Proficiency name="Keras"/>
            <Proficiency name="Java"/>
            <Proficiency name="React"/>
            <Proficiency name="Next"/>
            <Proficiency name="JavaScript"/>
            <Proficiency name="Node.js"/>
            <Proficiency name="Express"/>
            <Proficiency name="MongoDB"/>
            <Proficiency name="MySQL"/>
            <Proficiency name="HTML"/>
            <Proficiency name="CSS"/>
            <Proficiency name="Tailwind CSS"/>
            <Proficiency name="Git"/>
            <Proficiency name="GitHub"/>
            <Proficiency name="Visual Studio Code"/>
          </section>
        </>
      } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
    
      <Footer/>
    </>
  )
};
