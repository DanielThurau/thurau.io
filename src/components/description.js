import React from "react"
import * as styles from "./description.module.css"

export default function Description(props) {
    return (
        <p className={styles.description}>{props.description}</p>
    );
}
