import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const Countries = () => {
  return (
    <Layout pageName="countries">
      <Helmet>
        <title>Countries</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Countries</h1>
        <p>Welcome to countries</p>
      </Container>
    </Layout>
  );
};

export default Countries;
