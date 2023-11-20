import React from 'react';
import Seo from "../../components/seo";
import Layout from "../../components/shared/layout";

const Page = () => {
  return (
    <Layout>
      <h1>It is a page template!</h1>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default Page;