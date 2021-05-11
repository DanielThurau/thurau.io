import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/home/">Home</Link>
            <Header headerText="Contact"/>
            <a href="mailto: daniel.n.thurau@gmail.com">Email me!</a>
        </div>
    );
}
