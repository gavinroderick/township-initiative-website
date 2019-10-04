import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Donate to the initiative</h4>
                <hr className="my-4" />
                <a href={config.justgiving}>
                  <button type="submit" className="btn btn-primary mx-auto">
                    Donate on JustGiving
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Get in touch!</h4>
                <hr className="my-4" />
                <a href="contact">
                  <button type="submit" className="btn btn-primary mx-auto">
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
