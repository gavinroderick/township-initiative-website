import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/Header';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <PageHeader />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase text-light">Thank you for your donation!</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">Click below to return and see how your donation is used</h2>

          <Link to="/" className="btn btn-green">
            Homepage
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
