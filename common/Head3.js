import React from "react";
import { ImFacebook2, ImTumblr2, ImLinkedin, ImWhatsapp } from "react-icons/im";
import Link from "next/link";

const Head3 = () => {
  return (
    <div className="col-4">
      <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
       
        <li className="float-left d-inline-block m-1">
          <i className="fa fa-facebook-f text-white">
            <ImFacebook2 color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-1">
          <i className="fa fa-facebook-f text-white">
            <ImTumblr2 color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-1">
          <i className="fa fa-facebook-f text-white">
            <ImLinkedin color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-1">
          <i className="fa fa-facebook-f text-white">
            <ImWhatsapp color="#FFFFFF" size={24} />
          </i>
        </li>
        <Link
          className="btn btn-sm btn-outline-secondary m-1"
          href="/registration"
        >
          Registration
        </Link>
        <Link className="btn btn-sm btn-outline-secondary m-1" href="/login">
          Login
        </Link>
        <Link className="btn btn-sm btn-outline-secondary m-1" href="#">
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default Head3;
