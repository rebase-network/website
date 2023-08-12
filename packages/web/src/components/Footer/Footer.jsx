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
              Contact
            </h6>
            <a href="#" className="footer-link font-size-normal mt-2">
              admin@rebase.community
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

          <a href="https://www.youtube.com/@rebasecommunity" target="_blank" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-youtube fa-lg"></i>
            </span>
          </a>

          <a href="https://space.bilibili.com/382886213" target="_blank" className="hover-lift-light text-decoration-none mx-2">
            <span className="icon-circle footer-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>
            </span>
          </a>
          <a href="#"  className="hover-lift-light text-decoration-none mx-2">
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
