import React from "react"
import Layout from "../components/layout"
import User from "../components/user"

export default function About() {
    return (
        <Layout>
            <h1>About</h1>
            <User
                username="Daniel Thurau"
                avatar="https://avatars.githubusercontent.com/u/15882011"
                excerpt="Daniel is dope as hell, he's making this website using Gatsby because what Software Developer worth their salt doesn't have their own website."
            />
        </Layout>
    );
}