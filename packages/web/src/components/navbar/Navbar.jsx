import React from "react";
import logo from "/public/assets/img/rebase.png"

const Navbar = ()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
      <div className="container position-relative">
        <a className="navbar-brand" href="/">
          <img height="40px" src={logo}/>
        </a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mt-2 mt-lg-0">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/geekdaily">Web3Daily</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Jobs</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://rebased.ventures/">Rebase D.Ventures</a>
            </li>

            <li className="nav-item ml-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-sm btn-primary hover-lift-light mt-1" href="/signin" target="_blank">
                Sign in
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
