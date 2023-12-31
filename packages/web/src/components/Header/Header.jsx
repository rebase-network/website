import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collapse } from 'bootstrap';

import { useAuthContext } from '/src/context/AuthContext';

import logo from '/public/assets/img/rebase.png';

export default function Header() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false)
  const collapseRef = useRef();

  useEffect(() => {
    const myCollapse = collapseRef.current;
    const bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
      <div className="container position-relative">
        <a className="navbar-brand" href="/">
          <img height="40px" src={logo} />
        </a>

        <button className="navbar-toggler" onClick={() => setToggle(toggle => !toggle)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div ref={collapseRef} className="collapse navbar-collapse justify-content-end mt-2 mt-lg-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/geekdaily">
                Web3Daily
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/job">
                Jobs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/event">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://rebased.ventures/">
                Rebase D.Ventures
              </a>
            </li>

            <li className="nav-item ml-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-sm btn-primary hover-lift-light mt-1" href="http://old.rebase.network/" target="_blank">
                Original Rebase Website
              </a>
            </li>

            {user ? (
              <>
                <li className="nav-item ml-lg-3 mt-3 mt-lg-0">
                  <a className="btn btn-sm btn-primary mt-1" href="/profile" target="_blank">
                    {user.username}
                  </a>
                </li>

                <li className="nav-item ml-lg-3 mt-3 mt-lg-0">
                  <a href="#" className="btn btn-sm btn-success hover-lift-light mt-1">
                    Sign out
                  </a>
                </li>
              </>
            ) : (
              <></>
              // <li className="nav-item ml-lg-3 mt-3 mt-lg-0">
              //   <a className="btn btn-sm btn-primary hover-lift-light mt-1" href="/signin" target="_blank">
              //     Sign in
              //   </a>
              // </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
