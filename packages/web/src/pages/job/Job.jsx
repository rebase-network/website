import React from 'react';
import { useData } from '/src/utils/utils.js';
import { API, API_DOMAIN } from '/src/constant';

export default function Job() {

  const joburl = API + '/jobs';

  const jobsresult = useData(joburl);
  const items = jobsresult.data;

  return (
    <>
      <section className="mt-8 mt-lg-2 bg-light">
        <div className="container">

          <div className="d-flex flex-column flex-md-row align-items-center mb-5">
            <div className="text-center text-md-left">
              <h4>
                Featured recent Jobs
              </h4>
              <p className="text-muted">
                These jobs might be of your interest.
              </p>
            </div>
            <a href="https://github.com/rebase-network/who-is-hiring/issues/" target="_blank" className="ml-md-auto" >
              See all jobs
              <i className="fa fa-arrow-right fa-xs ml-2"></i>
            </a>
          </div>

          {!!items &&
            items.data.map((item) => (
              <div className="row align-items-center bg-white mb-4 py-5 px-4">
                <div className="col-lg-2">
                  <div style={{ width: "130px" }}>
                    <img width="100px" src={item.user.avatar_url} />
                  </div>
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0">
                  <a href={item.html_url} target="_blank" className="h5 text-darkblue d-block">
                    {item.title}
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    {item.body.slice(0, 100)}
                  </p>
                </div>
                <div className="col-lg-3 text-lg-center mt-4 mt-lg-0">
                  <a href={item.html_url} target="_blank" className="btn btn-sm btn-pastel-purple text-uppercase-bold-sm hover-lift-light">
                    Read more
                  </a>
                  {/* <div className="font-size-sm text-muted mt-3">
                    Full time
                    <span className="mx-2">·</span>
                    Anywhere
                  </div> */}
                </div>
              </div>
            ))}


        </div>
      </section >
    </>
  );
}
