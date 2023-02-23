import React from "react";
import { Link } from "react-router-dom";

function Action() {
  return (
    <section className="mb-16">
      <div className="action--section--header">
        <h2 className="font-bold text-white xl:text-7xl lg:text-7xl md:text-6xl text-4xl uppercase">
          Take action
        </h2>
        <button className="text-white bg-primary px-5 py-2 rounded-full mt-5 hover:bg-white hover:text-primary transition-all duration-300">
          <Link to={"/contact"}>Contact Us</Link>
        </button>
      </div>
      <div className="container">
        <p className="text-2xl text-center mb-16">
          You can start the process for business growth by investing in
          employees <br /> Right Now
        </p>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-center gap-10">
          <div>
            <h2 className="uppercase font-bold text-black text-2xl mb-5">
              call or email
            </h2>
            <p className="mb-5">
              Call <span className="font-bold">YEC Leadership Talk</span> to discuss your leadership, talent
              development or organizational change needs. We will get back to
              you within 24 hours.
            </p>
            <a className="font-bold text-primary" href="tel:1234567677">
              +233 54 514 3000
            </a>
          </div>
          <div>
            <h2 className="uppercase font-bold text-black text-2xl mb-5">
              Share
            </h2>
            <p className="mb-5">
              Are you a leader or an employee in an organization and interested
              in sharing some information with <span className="font-bold">YEC Leadership Talk</span>? Let us know
              and we can help.
            </p>
            Email us at: &nbsp;
            <a
              className="text-primary font-bold"
              href="mailto:companyname@gmail.com"
            >
              companyname@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Action;
