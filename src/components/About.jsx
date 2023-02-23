import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="mb-10">
      <div className="container grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 text-center">
        <div>
          <h2 className="font-bold text-primary text-2xl uppercase mb-5">About</h2>
          <p>
          YEC Leadership Talk is a Youth Develpment and Leadership oriented
              program committed to empowering young people, harnessing and
              developing young tallents and leadership, ...
          </p>
          <button className="text-primary mt-5"><Link to={'/about'}>Learn more &rarr; </Link></button>
        </div>
        <div>
          <h2 className="font-bold text-primary uppercase text-2xl mb-5">what we do</h2>
          <p>
          We offer a strength-focused approach to coaching, grounded in the
          Co-Active Coaching Model. All of our coaches are either certified or
          have extensive experience with their specific area of coaching ...
          </p>
          <button className="text-primary mt-5"><Link to={'/services'}>Learn more &rarr; </Link></button>
        </div>
      </div>
    </section>
  );
}

export default About;
