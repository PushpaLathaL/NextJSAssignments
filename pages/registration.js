import React from "react";

const Registration = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="vh-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-xl-11">
                  <div className=" text-black">
                    <div className="">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>

                          <form className="mx-1 mx-md-12">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label">Your Name</label>
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label">Your Email</label>
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label">Password</label>
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label">
                                  Repeat your password
                                </label>
                                <input
                                  type="password"
                                  id="form3Example4cd"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label className="form-check-label">
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                className="btn btn-lg btn-secondary m-1"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;
