import React from 'react';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <PageHeader />
    <header className="masthead-projects" id="kkis">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-8 card">
              <h1 className="text-light">Keep Kids In School scheme</h1>
              <p className="text-white text-left mx-auto mt-2 mb-5">
                Together with Education Without Borders, we provide crucial English lessons to Xhosa speaking school
                children that radically reduce dropout rates
                <br /><br />
                  Children in South Africa receive their education in their home language, often Zulu or Xhosa, from Grades
                  1-3. In Grade 4, the language of instruction changes to English. This places the child at an enormous disadvantage
                  - resulting in a decrease in academic performance.
                  Drop out rates are high amongst those who don’t speak English as their first language.
                  We bridge this gap by funding after school lessons for kids in English.
              </p>
              <p>Trialled in 2017, 90% of those taught demonstrate significant improvement</p>

            </div>
          <div className="col-lg-3 donation-table">
            <table className=" mx-auto table text-center table-light table-border">
                <thead>
                <th>
                  <td>£80 per child for a full year will provide: </td>
                </th>
                </thead>
              <tbody>
                <tr>
                  <td>35 lessons a year with qualified tutors</td>
                </tr>
                <tr>
                  <td>Duration of each lesson is 80 minutes</td>
                </tr>
                <tr>
                  <td>Lessons take place after school</td>
                </tr>
                <tr>
                  <td>50 children taught in small groups</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
