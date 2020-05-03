import React from 'react';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <PageHeader />
    <header className="masthead-projects" id="scholarship">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-8 card">
              <h1 className=" text-left text-light">Our Scholarship scheme</h1>
              <p className="text-white text-left mx-auto mt-2 mb-5">
                We provide scholarships for disadvantaged children to attend Wellington Preparatory School. Wellington is
                a unique private co-educational school in the Western Cape with an holistic approach and outstanding
                results.
                <br/><br/><strong>
                    - The transformative and nurturing school environment of Wellington Preparatory School gives children an
                    unprecedented head start in life and the opportunity to truly excel and thrive academically
                    <br /><br />
                    - The school has a a playgroup and aftercare to help parents
                    <br /><br />
                    - The Township Initiative partnered with Wellington Prep as it “offers each child quality, individual
                    attention with small classes in a peaceful and nurturing environment.”
                    <br /><br />
                    - Costs x per pupil per year
                  </strong>
              </p>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
