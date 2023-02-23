import React from "react";
import { Link } from "react-router-dom";

function SingleEvent() {
  return (
    <section className="mt-10 mb-10">
      <div className="container">
        <div>
          <img src="./../../img/image3.jpg" alt="" />
          <h2 className="capitalize font-bold text-xl mt-5 mb-5">title here</h2>
          <h3 className="text-sm font-bold">20 Jan 2023</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            provident nihil fuga porro possimus dolor recusandae aliquid beatae!
            Minus, facere. Corporis nisi maiores laboriosam aperiam. Accusantium
            autem maxime tenetur explicabo.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            recusandae provident corporis porro qui, repudiandae rerum
            voluptatum illum? Corporis, eum nesciunt. Vitae neque natus amet
            molestias deleniti, id ex quis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            blanditiis impedit dolores veritatis maiores nobis vel tenetur atque
            quos. Sed, nemo exercitationem. In, ab nobis impedit tenetur quasi
            voluptatum blanditiis!
          </p>
        </div>
        <button className="text-white bg-primary shadow-lg px-5 py-2 rounded-full mt-5 capitalize"><Link to={'/events'}>all events</Link></button>
      </div>
    </section>
  );
}

export default SingleEvent;
