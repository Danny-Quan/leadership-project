import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

function EventsPage() {
  return (
    <section className="mb-16 mt-10">
      <div className="container">
        <h2 className="text-center text-black font-bold text-2xl uppercase mt-5 mb-10">
          our latest events
        </h2>
        <div className="cards container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-5">
        {data.map(event=>(
        <div key={event.id} className="card shadow-xl">
        <img className="rounded-t-lg" src={`${event.image_url}`} alt="card1" />
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
            <Link to={`/single-event/${event.id}/${event.title.split(" ").join('-')}`}>read more &rarr; </Link>
          </button>
        </div>
      </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default EventsPage;
