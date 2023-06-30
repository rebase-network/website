import React, { Component } from 'react';

export default class GeekDaily extends Component {
  constructor() {
    super();
    console.log('constructor')
  }

  render() {

    return (
      <>
        <section className="sticky-top bg-white shadow-light-sm py-4">
          <div className="container d-flex flex-column flex-lg-row">
            <div className="d-none d-md-flex align-items-center flex-wrap text-uppercase font-size-xs">
              <span className="font-size-sm font-weight-bold mr-4">Categories:</span>
              <a href="#" className="text-secondary mr-4">
                Web3Daily
              </a>
              <a href="#" className="text-secondary mr-4">
                Tech
              </a>
              <a href="#" className="text-secondary mr-4">
                Design
              </a>
              <a href="#" className="text-secondary">
                Engineering
              </a>
            </div>

            <form className="w-200 mt-md-3 mt-lg-0 ml-lg-auto">
              <div className="position-relative">
                <i className="fas fa-search fa-sm text-muted position-absolute left-0 top-0 mt-2"></i>
                <input
                  type="text"
                  className="form-control form-control-sm pl-4 border-0"
                  placeholder="Search on the blog"
                />
              </div>
            </form>
          </div>
        </section>

        <section className="fx-fade-up">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div className="col mt-5">
                <div className="card h-100 shadow-light hover-lift-light">
                  <a
                    href="#!"
                    className="bg-cover h-250 rounded-top"
                    style={{ backgroundImage: "url('assets/img/unsplash/46.jpeg')" }}
                  ></a>

                  <div className="card-body">
                    <a href="#!" className="h5 font-weight-normal text-dark text-decoration-none">
                      How to remain calm when life gets hard
                    </a>

                    <p className="text-secondary font-size-sm mt-3">
                      You have power over your mind, not outside events.
                    </p>
                  </div>

                  <div className="card-bottom-info">
                    <div className="avatar avatar-sm">
                      <img src="assets/img/uifaces/5.jpg" className="avatar-image rounded-circle" alt="" />
                    </div>
                    <span className="text-uppercase-xs text-muted ml-2">David Gilmour</span>
                    <div className="text-uppercase-xs text-muted ml-auto">
                      <i className="far fa-calendar fa-xs relative-top--1"></i>
                      <span style={{ marginLeft: '5px' }}>2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mt-5">
                <div className="card h-100 shadow-light hover-lift-light">
                  <a
                    href="#!"
                    className="bg-cover h-250 rounded-top"
                    style={{ backgroundImage: "url('assets/img/unsplash/48.jpeg')" }}
                  ></a>

                  <div className="card-body">
                    <a href="#!" className="h5 font-weight-normal text-dark text-decoration-none">
                      Inertia theme is now live in UK & Ireland
                    </a>

                    <p className="text-secondary font-size-sm mt-3">
                      Not what we have but what we enjoy, constitutes our abundance.
                    </p>
                  </div>

                  <div className="card-bottom-info">
                    <div className="avatar avatar-sm">
                      <img src="assets/img/uifaces/6.jpg" className="avatar-image rounded-circle" alt="" />
                    </div>
                    <span className="text-uppercase-xs text-muted ml-2">Matt Damon</span>
                    <div className="text-uppercase-xs text-muted ml-auto">
                      <i className="far fa-calendar fa-xs relative-top--1"></i>
                      <span style={{ marginLeft: '5px' }}>2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mt-5">
                <div className="card h-100 shadow-light hover-lift-light">
                  <a
                    href="#!"
                    className="bg-cover h-250 rounded-top"
                    style={{ backgroundImage: "url('assets/img/unsplash/49.jpeg')" }}
                  ></a>

                  <div className="card-body">
                    <a href="#!" className="h5 font-weight-normal text-dark text-decoration-none">
                      Learn how to take the best photos with a Leica
                    </a>

                    <p className="text-secondary font-size-sm mt-3">
                      The happiness of your life depends upon the quality of your thoughts.
                    </p>
                  </div>

                  <div className="card-bottom-info">
                    <div className="avatar avatar-sm">
                      <img src="assets/img/uifaces/8.jpg" className="avatar-image rounded-circle" alt="" />
                    </div>
                    <span className="text-uppercase-xs text-muted ml-2">Ana Smith</span>
                    <div className="text-uppercase-xs text-muted ml-auto">
                      <i className="far fa-calendar fa-xs relative-top--1"></i>
                      <span style={{ marginLeft: '5px' }}>2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
