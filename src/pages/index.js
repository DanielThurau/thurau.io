import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Writing from "../components/writing"
import Description from "../components/description"
import Button from "../components/button"
import Az from "../images/az.jpeg"
import Caesar from "../images/caesar.jpeg"

export default function Home() {
  return (
    <Layout>
      <SEO title="Homepage" description="Homepage"/>
      <section style={{ marginTop:`50px`}}>
        <div style={{marginBottom:`4rem`}}>
          <h1>About Me 👋</h1>
            <p>
                Daniel Thurau is an engineer currently living in San Francisco. 
                He graduated from Univeristy of California: Santa Cruz in 2018 with a 
                BS in Computer Science. He went on to work at Amazon for two years 
                before striking out on his own. 
            </p>
            <p>
                Currently he is reading, writing, traveling, cooking, and reflecting on 
                what he wants to do next. Daniel has several projects in the works that 
                will slowly be released via this website, so keep an eye out!
            </p>          
        </div>
        <div style={{marginBottom:`4rem`}}>
          <h1>Experience 💻</h1>
          <p>
            <b>Amazon F3 - Backend Engineer</b>
            <br/>
            <em>Amazon : Aug '20 - Mar '20</em>
            <br/>
            Daniel built services for post-order fulfillment orchestration to support grocery 
            delivery products available on Amazon.com.
          </p>

          <p>
            <b>Alexa Mobile Personalization - Backend Engineer</b>
            <br/>
            <em>Amazon : Jan '20 - Aug '20</em>
            <br/>
            Daniel created Ranking as a Service (RaaS) web services that deployed machine learning 
            for channel owners across the Alexa Mobile Org.
          </p>

          <p>
            <b>Alexa Mobile Home Channel - Backend Engineer</b>
            <br/>
            <em>Amazon : Nov '18 - Jan '20</em>
            <br/>
            Daniel built and deployed microservices in AWS to support content creation for the
            Home Channel of the Alexa Mobile App. 
          </p>

          <p>
            <b>Learning & Experimental Economics Projects Lab - Developer</b>
            <br/>
            <em>UCSC : Apr '17 - Aug '18</em>
            <br/>
            Daniel was the lead programmer developing the high frequency trading project platform. 
          </p>
          
          <div style={{ display:`flex`, justifyContent:`center` }}>
            <a href="resume.pdf">
              <Button>Download Full Resume</Button>
            </a>
          </div>
          
        </div>
        <div >
          <h1>Latest Writing ✍️</h1>
        </div>
        <Writing>
          <div style={{height:`400px`, width:"100%", overflow:"hidden", display:`block`, position:"relative"}}>
            <a href="https://danielthurau.substack.com/p/cross-country-road-trip" style={{textDecoration:"none", color:"inherit"}}>
              <img src={Az} style={{height:`70%`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}/>
              <h2>Cross Country Road Trip</h2>
              <Description 
                description="My friend Matthew had been in at a job in Arizona. 
                I had just started a sabbatical from my job at Amazon 
                when I got a message that he needed to drive his car 
                back to the East Coast. He proposed a road trip 
                through the U.S. hitting a few national parks along 
                the way. We decided to do as little planning as possible 
                and to “Do It Live”, so I booked a flight, packed my bags 
                and jumped on a plane to Phoenix. "/>
              </a>
            </div>
            <div style={{height:`400px`, width:"100%", overflow:"hidden", display:`block`, position:"relative"}}>
              <img src={Caesar} style={{height:`70%`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}/>
              <h2>Lorem Ipsum</h2>
              <Description 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed 
                mattis ex. Etiam elit urna, semper vitae molestie eget, dignissim 
                euismod ante. Nam efficitur sed augue sit amet consequat. Nulla 
                ultricies vulputate mi, nec porttitor felis laoreet non. Duis suscipit."/>            
            </div>
        </Writing>
      </section>
    </Layout>
  );
}