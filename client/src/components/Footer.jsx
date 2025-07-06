import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
function Footer() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="p-5  flex ">
        <div className="flex flex-col min-w-3/5 gap-4 mb-5">
          <Link to="/" className="max-md:flex-1 max-w-[150px]">
            <img src={assets.logo} alt="Logo" className="w-36 h-auto" />
          </Link>
          <p className="text-gray-300 max-w-2/5 ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-2">
            <img
              className="cursor-pointer"
              src={assets.googlePlay}
              alt="Play store"
            />
            <img
              className="cursor-pointer"
              src={assets.appStore}
              alt="App store"
            />
          </div>
        </div>

        <div className="mx-auto p-2 w-full">
          <h2 className="text-lg font-bold mb-5">Company</h2>
          <ul className="leading-7">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="mx-auto p-2 w-full">
        <h2 className="text-lg font-bold mb-5">Get in touch</h2>
          <ul className="leading-7">
            <li>+1-234-567-890</li>
            <li>contact@example.com</li>
          </ul>
        </div>
      </div>
      <div className="mb-2">
        <hr />
        <p className="text-gray-300 text-center mt-2">
          Copyright {new Date().getFullYear()} &copy; Divyanshu. All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
