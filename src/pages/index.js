import React from "react"
import {Link}  from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Everyone! Welcome to Daniel's Website"/>
      <p><b>Some facts I know:</b></p>
      <ul>
        <li>Emilia is a bad bish</li>
        <li>The picture below changes every time you refresh</li>
      </ul>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
