import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Get in contact with Daniel Thurau" />
      <div style={{ backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19' }}>
        <div style={{ margin: '20px', padding: '20px' }}>
          <h1 headerText="Contact">Contact ✉️</h1>

          <p>

            You can always contact me via any of the social platform at the
            bottom of the page. Nevertheless, if you prefer email communication
            you can reach out to me via my email.

          </p>
          <p>

            Just drop me a message of whatever you feel like, a cool project idea,
            need of a developer, technical questions or maybe you just want to get
            in contact with me, and I will answer ASAP 🙏
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="mailto: daniel.n.thurau@gmail.com">
              <Button>Reach out</Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
