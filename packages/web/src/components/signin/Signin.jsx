import React from "react";
import logo from "/public/assets/img/rebase.png"

const Signin = ()=>{
  return(
  <>
  <section className="container text-center py-5 py-md-6 py-xl-8">
    <a href="/">
      <img style={{width: "130px"}} className="fx-fade-up" alt="" src={logo}/>
    </a>

    <h4 className="font-weight-normal text-dark mt-5 fx-fade-up">
      Log in to your account
    </h4>

    <div className="row justify-content-center mt-4 pt-3 fx-fade-up animation-delay-2">
      <div className="col-md-6 col-lg-4">
        <form>
          <div className="mb-3">
            <input type="email" name="email" placeholder="Email" className="form-control form-control-lg bg-pastel-darkblue"/>
          </div>

          <div className="mb-3">
            <input type="password" name="password" placeholder="Password" className="form-control form-control-lg bg-pastel-darkblue"/>
          </div>

          <input type="submit" className="btn btn-primary btn-block btn-lg shadow-lg text-uppercase-bold-sm hover-lift mt-4" value="Sign in"/>

          <a href="recover-password.html" className="d-block font-size-sm mt-5">
            Forgot your password?
          </a>

          <div className="text-secondary font-size-sm mt-5">
            Don't have an account ?
            <a href="sign-up.html">&nbsp;Sign up</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default Signin
