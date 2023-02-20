import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

function Events() {
  return (
    <section className="mb-16">
        <h2 className="text-center font-bold text-2xl capitalize mb-10">latest events</h2>
      <div className="cards container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-5">
        {data.map(event=>(
        <div key={event.id} className="card shadow-xl">
        <img src={`${event.image_url}`} alt="card1" />
        <div className="px-3">
          <div className="title--and--date flex justify-between mt-5 mb-5 items-center">
          <h3 className="font-bold text-blackk text-lg capitalize">
            {event.title}
          </h3>
          <p className="font-bold text-sm px-5 py-2 rounded-full bg-primaryTransparent">{event.date}</p>
          </div>
          <p>
            {event.description}
          </p>
          <button className="text-primary mt-5 mb-5">
            <Link to={"/single-event"}>read more &rarr; </Link>
          </button>
        </div>
      </div>
        ))}
      </div>
      <div className="text-center mt-10">
      <button className="text-white bg-primary px-5 py-2 rounded-full">
        <Link to={'/events'}>
        learn more
        </Link>
      </button>
      </div>
    </section>
  );
}

export default Events;
