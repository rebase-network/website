import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
      <section className="bg-light pt-6 pt-md-7">
        <div className="container text-center">
          <div className="fx-fade-up animation-delay-1" style={{height: "450px"}}>
            <h1 className="display-4 text-darkblue">Rebase Blockchain Tech Community</h1>
            <p className="w-lg-80 lead text-secondary mx-auto mt-4 mb-5">
              Rebase is a non-profit developer community founded by a group of Chinese Web3 developers.
            </p>
            <a href="/geekdaily" className="btn btn-success btn-lg w-lg-250 text-uppercase-bold-sm shadow-sm hover-lift-light">
              Web3 Geek Daily
            </a>
            <p className="text-muted text-uppercase-xs mt-3 mb-0">
              More than 1500 developers and 9000 crypto enthusiasts have joined our community.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 mt-md-5">
        <div className="container"></div>
      </section>
    </>
  );
};

export default Home;
