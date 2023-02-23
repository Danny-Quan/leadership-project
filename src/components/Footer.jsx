import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-accent pt-16 pb-28 text-white relative -z-10">
      <div className="container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-xl mb-5 capitalize">
            YEC Leadership Talk
          </h3>
          <p>
            YEC Leadership Talk is a Youth Develpment and Leadership oriented
            program committed to empowering young people, harnessing and
            developing young tallents and leadership, mentoring and grooming
            next generation of Global Leaders with the right mindset for Global
            impact
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-5  capitalize">contact</h3>
          <ul>
            <li>Techiman - Ghana</li>
            <li>
              <a href="tel:123456789">+233123456789</a>
            </li>
            <li>
              <a href="tel:123456789">+233123456789</a>
            </li>
            <li>
              <a className="text-primary" href="mailto:companyname@gmail.com">
                companyname@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-5 capitalize">let's connect</h3>
          <ul className="flex gap-5">
            <li className="text-3xl">
              <NavLink to={"/facebook"}>
                <FaFacebook />
              </NavLink>
            </li>
            <li className="text-3xl">
              <NavLink to={"/twitter"}>
                <FaTwitter />
              </NavLink>
            </li>
            <li className="text-3xl">
              <NavLink to={"/youtube"}>
                <FaYoutube />
              </NavLink>
            </li>
            <li className="text-3xl">
              <NavLink to={"/instagram"}>
                <FaInstagram />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer--after absolute bottom-0 left-0 right-0 text-center">
        <p className="pb-3">
          YEC leadership Talk &copy; 2023. All right reserved | by{" "}
          <NavLink to={"https://www.linkedin.com"} className={"text-primary"}>
            Danny Quan
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
