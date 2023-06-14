import React from "react";

const Footer = ()=>{
  return(
    <>
    <footer className="footer footer-dark bg-dark">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md">
            <h6 className="footer-header mb-4 pb-2">
              Products
            </h6>
            <a href="https://web3camp.us/" target="_blank" className="footer-link font-size-normal">
              Web3Camp
            </a>
            <a href="https://github.com/accountjs/account.js" target="_blank" className="footer-link font-size-normal mt-2">
              Account.js
            </a>
          </div>

          <div className="col-12 col-md mt-5 mt-md-0">
            <h6 className="footer-header mb-4 pb-2">
              Resources
            </h6>

            <span className="footer-link font-size-normal">
              Media Kits
            </span>

            <span className="footer-link font-size-normal">
              Mascot
            </span>
          </div>

          <div className="col-12 col-md mt-5 mt-md-0">
            <h6 className="footer-header mb-4 pb-2">
              Information
            </h6>
            <a href="#" className="footer-link font-size-normal">
              +1 555 555 555
            </a>
            <a href="#" className="footer-link font-size-normal mt-2">
              info@themes.com
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-6">
          <a href="https://github.com/rebase-network" target="_blank" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </a>
          <a href="https://twitter.com/RebaseCommunity" target="_blank" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-twitter fa-lg"></i>
            </span>
          </a>
          <a href="https://t.me/RebaseCommunity" target="_blank" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-telegram fa-lg"></i>
            </span>
          </a>
          <a href="#" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-weixin fa-lg"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
