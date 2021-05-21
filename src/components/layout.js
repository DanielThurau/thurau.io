import React from "react"
import { Link } from "gatsby"

import Daniel from "../images/daniel.jpeg"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ImageLink = props => (
    <li style={{ display: "inline-block", marginRight:"1rem"}}>
        <a href={props.to}>{props.children}</a>
    </li>
)

export default function Layout({ children }) {
    return (
        <div style={{margin:"3rem auto", maxWidth: 900, padding: `0 1rem`,  minHeight: `80vh`, minHeight:"100%", marginBottom:"-100px"}}>
        {/* <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem`,  minHeight: `80vh`}}> */}
            <header style={{ marginBottom: `1.5rem`, display:`flex` }}>
                <div style={{ alignItems:`center`}}>
                    <div style={{height:`100px`}}>
                        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                            <img src={Daniel} style={{height:`100px`, borderRadius:`50%` }} />
                        </Link>
                    </div>
                    <div style={{ textAlign:`center` }}>
                        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                            <h4 style={{ display: `inline`}}>Daniel Thurau</h4>
                        </Link>
                    </div>
                </div>
                <div style={{ position:`absolute`, right: `3rem`, padding:`0 3rem`}}>
                    <ul style={{ listStyle: `none`, float: `right`, }}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/contact/">Contact</ListLink>
                    </ul>
                </div>
            </header>
            <div style={{}}>
                {children}
            </div>
            <div style={{content:"", display:"block", height:"100px"}}/> {/* t.ly/fRPN */}
            <hr/>
            <footer style={{marginTop:"10px", height:"100px"}}>
                <ul style={{ listStyle: `none`, textAlign:"center", padding:"25px"}}>
                    <ImageLink to="https://github.com/DanielThurau">Github</ImageLink>
                    <ImageLink to="https://twitter.com/DanielNThurau">Twitter</ImageLink>
                    <ImageLink to="https://danielthurau.substack.com/">Substack</ImageLink>
                    <ImageLink to="https://www.linkedin.com/in/danielthurau/">LinkedIn</ImageLink>
                </ul>
            </footer>
        </div>
    );
}