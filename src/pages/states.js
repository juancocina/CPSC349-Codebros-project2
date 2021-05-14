import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const States = () => {
  return (
    <Layout pageName="states">
      <Helmet>
        <title>US</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>US</h1>
        <p>Welcome to states</p>
      </Container>
    </Layout>
  );
};

export default States;
