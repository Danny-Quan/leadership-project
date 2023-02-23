import React from "react";

function Main() {
  return (
    <main className="mt-20 mb-20">
      <div className="container">
        <p className="text-center text-xl mb-10">
          We believe trust, authenticity, giving back, and kindness make great
          leaders and great Organizations. We believe that connection and
          empowerment are paramount to the development of oneself for success.
        </p>
        <p className="text-center uppercase font-bold text-sm">
        we specialize in authentic, adaptive leadership models built around
          emotional intelligence competencies
        </p>

        <div className="main--image grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
          <div>
            <img src="./img/VRIH8117.JPG" alt="leadership talk" />
            <p className="mt-3">
              YEC Leadership Talk
            </p>
          </div>
          <div>
            <img src="./img/JPEB3860.JPG" alt="leadership training" />
            <p className="mt-3">
              Speaking Engagements, Training, Coaching, Consulting
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
