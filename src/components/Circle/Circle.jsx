import { useState } from 'react'

import styles from "./Circle.module.css"

export default function Circle({x, y, color, radius}){
    // Localized style for circle
    const style = {
        position: "absolute",
        left: "0px",
        top: "0px",
        marginLeft: (x - radius/2) + "px",
        marginTop: (y - radius/2) + "px",
        width: radius + "px",
        height: radius + "px",
        background: `radial-gradient(circle at center, ${color}, transparent 50%)`,
        pointerEvents: "none",
        animation: `${styles.fade} 2s ease-in-out infinite`,
    }

    return (
        <div style={style} className={`special_effect ${5}`}></div>
    );
}
