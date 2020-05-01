import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Breakdown from '../components/Breakdown';
import Header from '../components/Header';

import projImage1 from '../assets/images/writing.jpg';
import projImage2 from '../assets/images/reading.jpg';
import jamie from "../assets/images/jamie.jpg";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-white text-uppercase">{config.heading}</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="contact">
            <a href="contact" className="btn btn-green">
              Get involved
            </a>
          </Scroll>
        </div>
      </div>
    </header>


    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-0">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-white mb-4">Our Mission</h1>
            <p className="text-white mission-text">
              At the Township Initiative our approach is two-fold: to give children the chance to go to school, and to create conditions
              that keep them there.
            </p>
            <hr/>
            <p className="text-white mission-text">
              The Township Initiative works to create conditions that keep disadvantaged children in school. Just 1 in 3 of those who start
              school will finish. Without intervention, the majority of township children will continue to miss out on the critical life
              opportunities that completing their education will afford them. By facilitating this fundamental stage of development in a child’s
              life, we will improve social mobility and, eventually, break the cycle of poverty.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section id="projectos" className="projects-section bg-white">
      <div className="container" id="projects">
        <h2 className="text-white mb-4">Projects</h2>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={projImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-blue text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Our Scholarship Scheme</h4>
                  <p className="mb-0 text-white">
                  We provide scholarships for disadvantaged children to attend Wellington Preparatory School. Wellington
                  is a unique private co-educational school in the Western Cape with an holistic approach and outstanding
                  results.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={projImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-red text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Keep Kids In School Scheme</h4>
                  <p className="mb-0 text-white">
                    Together with Education Without Borders, we provide crucial English lessons to
                    Xhosa speaking school children that radically reduce dropout rates
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="about-us" className="projects-section bg-blue">
      <div className="container">
        <h2 className="text-white mb-4 text-right">About Us</h2>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-4">
            <img className="img-fluid" src={jamie} alt="" />
          </div>
          <div className="col-lg-8">
            <div className="bg-green text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white">
                    The Township Initiative is run by its founder and a team of experienced trustees.
                    <br/><br/>
                    I’m Jamie, a student at Imperial College Business School from London. Both sides of my family are from Cape Town, 
                    and so I spent a lot of time in the city growing up. I found myself fascinated by the creativity, warmth and raw 
                    potential of the young South African’s that I met. However, I was equally saddened by how many brilliant young people 
                    found themselves having to drop out of school.
                    <br/><br/>
                    Taking inspiration from the brilliant work done by so many NGO’s in the city, I set up The Township Initiative 
                    in 2017 to join the effort to improve social mobility in the townships. 
                  </p>


                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <Breakdown />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
