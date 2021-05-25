import React from "react"
import * as styles from "./button.module.css"

export default function Button({children}){
    return (
        <button className={styles.container}>
            {children}
        </button>
    );
}