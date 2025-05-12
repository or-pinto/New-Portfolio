import styles from './Projects.module.css'

import Page from '../../components/Page/Page.jsx';
import Project from '../../components/Project/Project.jsx';
import Sparkle from '../../components/Sparkle/Sparkle.jsx'
import Footer from '../../components/Footer/Footer.jsx';

export default function Projects({  }) {
    return (
        <>
          <Page children={
            <>
                <Sparkle radius="25" style={{translate: "-80px -40px"}} color="yellow"/>
                <Sparkle radius="30" style={{translate: "10px -20px"}} color="red"/>
                <Sparkle radius="20" style={{translate: "50px -90px"}} color="blue"/>
                <section>
                    <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>My Projects<span style={{color: "hsl(212, 52%, 37%)"}}>:</span></h1>
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
                    <Project
                        link="https://github.com/ExpDev-mul/GAN"
                        name="GAN"
                        period="February 2025"
                        usage={["Python", "TensorFlow", "Keras"]}
                        content="A Generative Adversarial Network project focused on generating realistic images from noise, exploring the capabilities of deep learning in image synthesis."
                    />
                    <Project
                        link="https://github.com/ExpDev-mul/keyframe-interpreter"
                        name="Keyframe"
                        period="July 2024 - Present"
                        usage={["C++"]}
                        content="Keyframe is a powerful, user-friendly programming language for which I am currently developing an interpreter using C++. This is a side hobby project."
                    />
                    <Project
                        link="https://youtu.be/fDXp1IKn8qE"
                        name="Riddler"
                        period="July 2024"
                        usage={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Visual Studio Code"]}
                        content="Riddler is a full-stack website I developed, allowing users to create accounts to solve and create customized riddles and track their statistics."
                    />
                    <Project
                        link="https://youtu.be/rkJ6Obc9WXQ"
                        name="Shortest Path Visualizer"
                        period="July 2024"
                        usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]}
                        content="A visualizer that includes maze generation, obstacle construction, and user modifications to explore how common pathfinding algorithms operate. Developed to help computer science students understand these algorithms and appreciate graph theory."
                    />
                    <Project
                        link="https://youtu.be/rxs8qNKcY0k"
                        name="Bezier Playground"
                        period="July 2024"
                        usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]}
                        content="Created a modifiable, optimized visualizer for Bezier curves using scalable vector graphics. This was a fun project."
                    />
                    <Project
                        link="https://youtu.be/R5UZ3qUPDvM"
                        name="React Responsive Design"
                        period="July 2024"
                        usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]}
                        content="An online interpreter with syntax highlighting and consistent output, allowing users to execute Lua code online."
                    />
                    <Project
                        link="https://youtu.be/oSvXZtM3tY4"
                        name="Lua Playground"
                        period="July 2024"
                        usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]}
                        content="An online interpreter with syntax highlighting and consistent output, allowing users to execute Lua code online."
                    />
                    <Project
                        link="https://youtu.be/AtOeGnTSc3Q"
                        name="Clash of Aircrafts"
                        period="May 2024"
                        usage={["Lua"]}
                        content="A well-designed and optimized game enabling players to deploy their own fighter aircrafts and fly them with realistic and smooth physics mechanisms. Players can fire at targets and earn in-game saved currency. This was a fun project."
                    />
                    <Project
                        link="none"
                        name="The Party"
                        period="August 2023 - January 2024"
                        usage={["Lua"]}
                        content="An incredibly complex 3D story-themed game, introducing concepts such as databases, vehicle mechanics, frequent client-server replication, writing exploit-proof code, programming complex responsive graphical user interfaces, and ensuring compatibility with low-end devices."
                    />
                    <Project
                        link="https://youtu.be/rwbG0GGZ-CE"
                        name="Dictionary Race"
                        period="July 2023"
                        usage={["Lua"]}
                        content="A well-designed, paced game where users in a lobby compete in rounds, tasked with typing dictionary-valid words containing explicit patterns. The game increases in difficulty over time. The project involved programming complex graphical user interfaces, ensuring seamless client-server communication, and maintaining server-side security against backdoors."
                    />
                    <Project
                        link="https://youtu.be/uecGusAzakE"
                        name="Create a Galaxy"
                        period="February 2023"
                        usage={["Lua", "Visual Studio Code"]}
                        content="Allows users to create and customize their own planets and construct complex connections of planetary motion."
                    />
                    <Project
                        link="https://youtu.be/fhnwX5UAKuw"
                        name="Quick Draw"
                        period="December 2021"
                        usage={["Lua"]}
                        content="Enables users to project their drawings into a multiplayer 3D space with replication, allowing other players to see their drawings live. Includes custom toolkits for drawing control."
                    />
                </section>

                <Sparkle radius="30" style={{translate: "-150px 95px"}} color="blue"/>
                <Sparkle radius="15" style={{translate: "150px 120px"}} color="yellow"/>
                <Sparkle radius="20" style={{translate: "0px 90px"}} color="red"/>
            </>
          } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
        
          <Footer/>
        </>
    );
}