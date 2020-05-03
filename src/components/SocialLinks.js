import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section className="contact bg-red" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-blue">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase text-white m-0">Donate with JustGiving</h4>
                <hr className="my-4" />
                <a href={config.justgiving}>
                  <button type="submit" className="btn btn-gold mx-auto">
                    Donate
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-green">
              <div className="card-body text-center text-white">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase text-white m-0">Get in touch!</h4>
                <hr className="my-4" />
                <a href="contact">
                  <button type="submit" className="btn btn-gold mx-auto">
                    Contact us
                  </button>
                </a>
              </div>
            </div>
          </div>


        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
