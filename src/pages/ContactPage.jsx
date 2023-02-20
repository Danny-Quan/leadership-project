import React from "react";

function ContactPage() {
  return (
    <section>
        <div className="contact--page--header">
            <h2 className="font-bold xl:text-7xl lg:text-7xl md:text-6xl text-4xl text-white uppercase">contact us</h2>
        </div>
        <div className="container flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between gap-10">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          incidunt quam obcaecati sapiente. Molestiae animi sed amet, corporis
          sunt pariatur.
        </p>
      </div>
      <form action="">
        <input type="text" placeholder="Enter name" required />
        <input type="tel" placeholder="Enter phone" required />
        <input type="email" placeholder="Enter email" />
        <input type="text" placeholder="Enter subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message here"
        ></textarea>
        <button className="text-white bg-primary px-10 py-2 rounded-full shadow-lg mb-10" type="submit">Submit</button>
      </form>
      </div>
    </section>
  );
}

export default ContactPage;
