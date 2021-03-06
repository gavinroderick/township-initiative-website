import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-white text-uppercase">Error 404</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">Page not found - have you got the right address?</h2>

          <Link to="/" className="btn btn-red">
            Homepage
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
