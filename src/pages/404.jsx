import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404" description="404 page not found" />
      <h1>Page Not Found</h1>
      <p>Oops, we couldn&apos;t find this page!</p>
    </Layout>
  );
}
