import React from "react";
import { Link } from "react-router-dom";

function Action() {
  return (
    <section className="mb-16">
      <div className="action--section--header">
        <h2 className="font-bold text-white xl:text-7xl lg:text-7xl md:text-6xl text-4xl uppercase">Take action</h2>
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
            <h2 className="uppercase font-bold text-black text-2xl mb-5">call or email</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              tempora fugiat explicabo voluptates similique magni corporis enim
              voluptatibus velit deserunt.
            </p>
            <a className="font-bold text-primary" href="tel:1234567677">+233 54 544 3000</a>
          </div>
          <div>
            <h2 className="uppercase font-bold text-black text-2xl mb-5">Share</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              tempora fugiat explicabo voluptates similique magni corporis enim
              voluptatibus velit deserunt.
            </p>
            Email us at: &nbsp;
            <a className="text-primary font-bold" href="mailto:companyname@gmail.com">companyname@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Action;
