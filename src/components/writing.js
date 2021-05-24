import React from "react"
import * as styles from "./writing.module.css"

export default function Writing({ children }) {
    return (
        <div className={styles.description}>
            { children }
        </div>
    );
}