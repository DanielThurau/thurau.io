import React from 'react';
import Button from '../components/button';
import Experience from '../components/experience';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Writing from '../components/writing';
import WritingEntry from '../components/writingEntry';
import Az from '../images/az.jpeg';
import Caesar from '../images/caesar.jpeg';

export default function Home() {
  return (
    <Layout>
      <SEO title="Homepage" description="Homepage of Daniel Thurau's personal website" />
      <section style={{ marginTop: '50px' }}>
        <div style={{ marginBottom: '4rem' }}>
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
        <div style={{ marginBottom: '4rem' }}>
          <h1>Experience 💻</h1>

          <Experience
            title="Amazon F3 - Backend Engineer"
            companyTime="Amazon : Aug '20 - Mar '21"
            description="Daniel built services for post-order fulfillment orchestration to support grocery delivery products available on Amazon.com."
          />

          <Experience
            title="Alexa Mobile Personalization - Backend Engineer"
            companyTime="Amazon : Jan '20 - Aug '20"
            description="Daniel created Ranking as a Service (RaaS) web services that deployed machine learning for channel owners across the Alexa Mobile Org."
          />

          <Experience
            title="Alexa Mobile Home Channel - Backend Engineer"
            companyTime="Amazon : Nov '18 - Jan '20"
            description="Daniel built and deployed microservices in AWS to support content creation for the Home Channel of the Alexa Mobile App. "
          />

          <Experience
            title="Learning & Experimental Economics Projects Lab - Developer"
            companyTime="UCSC : Apr '17 - Aug '18"
            description="Daniel was the lead programmer developing the high frequency trading project platform."
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="resume.pdf">
              <Button>Download Full Resume</Button>
            </a>
          </div>

        </div>
        <div>
          <h1>Latest Writing ✍️</h1>
        </div>
        <Writing>
          <WritingEntry
            link="https://danielthurau.substack.com/p/cross-country-road-trip"
            imageObject={Az}
            imageAlt="Photo from the road trip"
            entryTitle="Cross Country Road Trip"
            entryDescription="I had just started a sabbatical from my job at Amazon when I got a
              message that my buddy Matthew had finished a job in Arizona and needed to drive his
              car back to the East Coast. He proposed a road trip through the U.S. hitting a few
              national parks along the way. We decided to do as little planning as possible and
              to “Do It Live”, so I booked a flight, packed my bags and jumped on a plane to Phoenix."
          />
          <WritingEntry
            imageObject={Caesar}
            imageAlt="Lorem Ipsum"
            entryTitle="Lorem Ipsum"
            entryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              mattis ex. Etiam elit urna, semper vitae molestie eget, dignissim
              euismod ante. Nam efficitur sed augue sit amet consequat. Nulla
              ultricies vulputate mi, nec porttitor felis laoreet non. Duis suscipit."
          />
        </Writing>
      </section>
    </Layout>
  );
}
