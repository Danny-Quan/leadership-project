import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="mb-10">
      <div className="container grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 text-center">
        <div>
          <h2 className="font-bold text-primary text-2xl uppercase mb-5">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis blanditiis, fugit fuga expedita unde saepe atque
            deleniti repellat aut! Maxime.
          </p>
          <button className="text-primary mt-5"><Link to={'/about'}>Learn more &rarr; </Link></button>
        </div>
        <div>
          <h2 className="font-bold text-primary uppercase text-2xl mb-5">what we do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            recusandae alias ipsam neque quos sed exercitationem dolorum
            voluptatum, ea voluptatibus.
          </p>
          <button className="text-primary mt-5"><Link to={'/services'}>Learn more &rarr; </Link></button>
        </div>
      </div>
    </section>
  );
}

export default About;
