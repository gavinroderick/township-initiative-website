import React from 'react';

export default function Subscribe() {
  return (
    <section id="donation-breakdown" className="breakdown-section bg-light">
      <div className="container">
        <h2 className="text-white mb-4 text-left">Donation Breakdown</h2>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-8">
            <div className="bg-green text-center h-100 project">
              <div className="d-flex">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <p className="mb-0 text-white">
                  Nobody at The Township Initiative takes a salary, and we do our best to get all of our expenses separately sponsored.
                  100% (or as close as possible) of your donations go directly to making our projects possible.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 donation-table">
            <table className="table text-center table-light table-border">
              <tbody>
                <tr>
                  <td>£££xxx provides yyy</td>
                </tr>
                <tr>
                  <td>£££xxx provides yyy</td>
                </tr>
                <tr>
                  <td>£££xxx provides yyy</td>
                </tr>
                <tr>
                  <td>£££xxx provides yyy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



      </div>
    </section>

  );
}
