import React from 'react';
import Seo from "../../components/seo";

const DefaultPage = () => {
  return (
    <div>
      <h1>Default template</h1>
    </div>
  );
};

export const Head = () => <Seo title="Home" />

export default DefaultPage;