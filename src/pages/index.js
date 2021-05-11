import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Homepage" description="Homepage"/>
      <Header headerText="Hello Everyone! Welcome to Daniel's Website"/>
      <p><b>Some facts I know:</b></p>
      <ul>
        <li>Emilia is a bad bish</li>
        <li>The picture below changes every time you refresh</li>
      </ul>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  );
}
