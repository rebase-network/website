import React from "react";

const GeekDaily = ()=>{
  return(
    <>
    <section className="sticky-top bg-white shadow-light-sm py-4">
      <div className="container d-flex flex-column flex-lg-row">

        <div className="d-none d-md-flex align-items-center flex-wrap text-uppercase font-size-xs">
          <span className="font-size-sm font-weight-bold mr-4">
            Categories:
          </span>
          <a href="#" className="text-secondary mr-4">
            Articles
          </a>
          <a href="#" className="text-secondary mr-4">
            Product strategy
          </a>
          <a href="#" className="text-secondary mr-4">
            Success stories
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
            <input type="text" className="form-control form-control-sm pl-4 border-0" placeholder="Search on the blog"/>
          </div>
        </form>
      </div>
    </section>

    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 pr-lg-6">

            <div className="mb-6">
              <a href="#!" className="d-block bg-cover h-200 h-md-300 rounded hover-lift-light" style={{"background-image":"url('assets/img/unsplash/44.jpeg')"}}></a>

              <a href="#!" className="h3 text-dark d-block text-decoration-none mt-4">
                A brief history of climate science
              </a>

              <div className="position-relative">
                <div className="avatar d-none d-lg-block position-absolute top-0 left-0 mt-n3 ml-n6">
                  <img src="assets/img/uifaces/9.jpg" className="avatar-image rounded-circle" alt=""/>
                </div>
                <span className="text-secondary text-uppercase-xs">
                  By Jessica Smith
                </span>
              </div>

              <p className="text-muted w-lg-90 mt-3">
                Most human beings complain about the meanness of nature, because we are born for a brief span of life, and because this spell of time that has been given to us rushes by so swiftly and rapidly that with very few exceptions life ceases for the rest of us just when we are getting ready for it.
              </p>

              <a href="#!" className="font-size-sm">
                Continue reading
              </a>
            </div>

            <div className="mb-6">
              <a href="#!" className="d-block bg-cover h-200 h-md-300 rounded hover-lift-light" style={{"background-image":"url('assets/img/unsplash/47.jpeg')"}}></a>

              <a href="#!" className="h3 text-dark d-block text-decoration-none mt-4">
                Top 10 blog posts for digital marketing
              </a>

              <div className="position-relative">
                <div className="avatar d-none d-lg-block position-absolute top-0 left-0 mt-n3 ml-n6">
                  <img src="assets/img/uifaces/13.jpg" className="avatar-image rounded-circle" alt=""/>
                </div>
                <span className="text-secondary text-uppercase-xs">
                  By Drew Williams
                </span>
              </div>

              <p className="text-muted w-lg-90 mt-3">
                The things in our control are by nature free, unrestrained, unhindered; but those not in our control are weak, slavish, restrained, belonging to others. Remember, then, that if you suppose that things which are slavish by nature are also free, and that what belongs to others is your own, then you will be hindered.
              </p>

              <a href="#!" className="font-size-sm">
                Continue reading
              </a>
            </div>

            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">Prev</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="card text-center shadow-light-sm">
              <div className="card-body">
                <p className="text-uppercase-bold-sm">
                  Subscribe
                </p>
                <p className="text-muted font-size-sm mt-3">
                  Sign up to receive a weekly summary in your inbox.
                </p>
                <a href="#" className="btn btn-pistachio hover-lift-light my-2">
                  Subscribe now
                  <i className="fas fa-chevron-right fa-xs ml-2"></i>
                </a>
              </div>
            </div>

            <div className="card text-center shadow-light-sm mt-4">
              <div className="card-body">
                <p className="text-uppercase-bold-sm">
                  Best hits
                </p>
                <a href="#" className="d-block font-size-sm text-purple mb-2">How to start a business</a>
                <a href="#" className="d-block font-size-sm text-purple mb-2">How to sell online</a>
                <a href="#" className="d-block font-size-sm text-purple mb-2">Climate change when needed</a>
                <a href="#" className="d-block font-size-sm text-purple mb-2">Web development upstart</a>
                <a href="#" className="d-block font-size-sm text-purple mb-2">Learn Rails in 30 days</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default GeekDaily
