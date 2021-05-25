import React from "react"
import { Link } from "gatsby"
import Button from "./button"
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
                            <img alt="Picture of Daniel" src={Daniel} style={{height:`100px`, borderRadius:`50%` }} />
                        </Link>
                    </div>
                    <div style={{ textAlign:`center` }}>
                        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
                            <Button>Daniel Thurau</Button>
                        </Link>
                    </div>
                </div>
                <div style={{ position:`absolute`, right: `3rem`, padding:`0 3rem`}}>
                    <ul style={{ listStyle: `none`, float: `right`, }}>
                        <ListLink to="/">
                            <Button>Home</Button>
                        </ListLink>
                        <ListLink to="/contact/">
                            <Button>Contact</Button>
                        </ListLink>
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
                    <ImageLink to="https://github.com/DanielThurau">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="icon icon-tabler icon-tabler-brand-github" 
                            width="44" 
                            height="44" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="#3a3a3a" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </ImageLink>
                    <ImageLink to="https://twitter.com/DanielNThurau">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="icon icon-tabler icon-tabler-brand-twitter" 
                            width="44" 
                            height="44" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="#3a3a3a" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </ImageLink>
                    <ImageLink to="https://danielthurau.substack.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="icon icon-tabler icon-tabler-stack" 
                            width="44" 
                            height="44" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="#3a3a3a" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="12 4 4 8 12 12 20 8 12 4" />
                            <polyline points="4 12 12 16 20 12" />
                            <polyline points="4 16 12 20 20 16" />
                        </svg>
                    </ImageLink>
                    <ImageLink to="https://www.linkedin.com/in/danielthurau/">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="icon icon-tabler icon-tabler-brand-linkedin" 
                            width="44" 
                            height="44" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="#3a3a3a" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </ImageLink>
                </ul>
            </footer>
        </div>
    );
}