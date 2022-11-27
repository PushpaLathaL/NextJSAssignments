import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-6">
        <h2 className="mb-3 mt-3">SignIn/SignUp</h2>
        <form className="bg-light p-4 rounded mb-4 mt-4">
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <Link href="#!">Forgot password?</Link>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mx-auto d-block mb-4"
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link href="/registration">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
