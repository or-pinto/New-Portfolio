import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Navbar.module.css'

import Settings from '../Settings/Settings.jsx';

export default function Navbar({ }){
    // Hooks
    const navigate = useNavigate()
    const location = useLocation()

    // States
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [current, setCurrent] = useState("")

    // Functions
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/or-pinto-815028319/", "_blank")
    }

    const handleSettingsClick = () => {
        setSettingsOpen(prev => !prev)
    }

    const handleContactClick = () => {
        if (location.pathname === "/" || location.pathname === "/home"){
            // We compute the scroll position of the target element
            const el = document.getElementById("contact_top")
            const rect = el.getBoundingClientRect()
            window.scrollTo({top: rect.top + (document.documentElement.scrollTop) - 90, left: 0, behavior: "smooth"})
        } else {
            navigate("/home")
        }
    }

    // Effects
    useEffect(() => {
        document.getElementById('settings_background').addEventListener("click", () => {
            console.log("yes")
            setSettingsOpen(false)
        })
    }, [])

    useEffect(() => {
        setCurrent(location.pathname)
    }, [location])

    // Return
    return (
        <>
            <Settings open={settingsOpen ? "Visible" : "Invisible"}/> {/* No other active states in use so we do not worry about re-renders */}
            <nav className={styles.container}>
                <div className={styles.container_section}>
                    <button className={`${styles.low_button} ${styles.left} ${(current === "/" || current === "/home") ? styles.current : ""}`} onClick={() => navigate("/home")}>Home</button>
                    <button className={`${styles.low_button} ${styles.left} ${current === "/projects" ? styles.current : ""}`} onClick={() => navigate("/projects")}>Projects</button>
                    <button className={`${styles.low_button} ${styles.left} ${current === "/feedbacks" ? styles.current : ""}`} onClick={() => navigate("/feedbacks")}>Feedbacks</button>
                </div>
                
                <div className={styles.container_section}>
                    <button className={`${styles.low_button} ${styles.right} ${styles.linkedin}`} onClick={handleLinkedInClick}>LinkedIn</button>
                    <button className={`${styles.high_button} ${styles.right}`} style={{paddingRight: "45px"}} onClick={handleContactClick}>Contact Me</button>
                    <button className={`${styles.settings_button} ${styles.right}`} style={{marginRight: "30px"}} onClick={handleSettingsClick}></button>
                </div>
            </nav>
        </>
    );
}