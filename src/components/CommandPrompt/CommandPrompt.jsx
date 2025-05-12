import { useState, useEffect, useRef } from 'react'

import styles from './CommandPrompt.module.css'

function clamp(a, x, y){
    // Clamps a between x and y
    if (a < x){
        return x
    }

    return Math.min(a, y)
}

const paddingSpacing = 70 // Padding space for mouse enter

export default function CommandPrompt({}) {
    // States
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const [isHovered, setIsHovered] = useState(false) // Whether the mouse is hovered on the interface
    const [typeAppears, setTypeAppears] = useState(false) // The type symbol that reappears

    // References
    const container = useRef(null)

    // Effects
    useEffect(() => {
        const mouseMove = (e) => {
            const rectMetadata =  container.current.getBoundingClientRect();
            const width = 550
            const height = 350

            const relativeX = (e.clientX - (rectMetadata.left + width / 2)) / (width / 2);
            const relativeY = (e.clientY - (rectMetadata.top + height / 2)) / (height / 2);

            setMousePosition({
                x: relativeX,
                y: relativeY
            })

            setIsHovered(
                e.clientX >= rectMetadata.left - paddingSpacing &&
                e.clientX <= rectMetadata.right + paddingSpacing &&
                e.clientY >= rectMetadata.top - paddingSpacing &&
                e.clientY <= rectMetadata.bottom + paddingSpacing
            );
        }

        document.addEventListener("mousemove", mouseMove)

        return () => {
            document.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    useEffect(() => {
        console.log(mousePosition)
    }, [mousePosition])

    useEffect(() => {
        // This effect handles the '|' symbol that appears at the end of the line
        const interval = setInterval(() => {
            setTypeAppears((prev) => !prev)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [typeAppears])

    // Return
    return (
        <div className={styles.container} ref={container} style={
            {
                transform: !isHovered ? 
                            `translateX(-50%) rotateX(0deg) rotateY(0deg)` : 
                            `translateX(-50%) translateY(${-mousePosition.y * 10}px)`,
                background: !isHovered ? "rgb(23, 24, 22)" : `linear-gradient(${Math.atan2(mousePosition.y, mousePosition.x)*180/Math.PI + 90}deg, rgb(23, 24, 22) ${
                    Math.min(Math.sqrt(Math.pow(mousePosition.x, 2) + Math.pow(mousePosition.y, 2))/3, 60)
                }%, rgb(45, 45, 45))`
            }
        }>
            <p className={styles.code}><span className={styles.directory}>{"or@linux:~$"}</span> ls</p>
            <p className={styles.code}>contacts.md</p>
            <p className={styles.code}><span className={styles.directory}>{"or@linux:~$"}</span> cat contacts.md</p>
            <p className={styles.code}>
                My GitHub:  https://github.com/or-pinto<br/>
            </p>
            <p className={styles.code}><span className={styles.directory}>{"or@linux:~$"}</span>{typeAppears ? <span style={{ fontWeight: 900, color: "white" }}>|</span> : ''}</p>
        </div>
    );
};
