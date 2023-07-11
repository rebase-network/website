import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '/src/context/AuthContext';
import { API } from '/src/constant';
import { setToken } from '/src/utils/helper';

import logo from '/public/assets/img/rebase.png';

export default function Signin() {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO check email and password
    if (!email || !password) {
      return;
    }
    setIsLoading(true);

    try {
      const value = {
        identifier: email,
        password,
      };

      const resp = await fetch(`${API}/auth/local`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      const data = await resp.json();

      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        navigate('/profile', { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="container text-center py-5 py-md-6 py-xl-8">
        <a href="/">
          <img style={{ width: '130px' }} className="fx-fade-up" alt="" src={logo} />
        </a>

        <h4 className="font-weight-normal text-dark mt-5 fx-fade-up">Log in to your account</h4>

        <div className="row justify-content-center mt-4 pt-3 fx-fade-up animation-delay-2">
          <div className="col-md-6 col-lg-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="form-control form-control-lg bg-pastel-darkblue"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="form-control form-control-lg bg-pastel-darkblue"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary btn-block btn-lg shadow-lg text-uppercase-bold-sm hover-lift mt-4"
                value="Sign in"
              />

              {/* <a href="#!" className="d-block font-size-sm mt-5">
            Forgot your password?
          </a> */}

              {/* <div className="text-secondary font-size-sm mt-5">
            Don't have an account ?
            <a href="#!">&nbsp;Sign up</a>
          </div> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
