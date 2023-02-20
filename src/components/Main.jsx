import React from "react";

function Main() {
  return (
    <main className="mt-20 mb-20">
      <div className="container">
        <p className="text-center text-xl mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          voluptas harum, doloribus amet voluptatem ducimus eaque magnam animi,
          dolore facilis molestias odio 
        </p>
        <p className="text-center uppercase font-bold text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aliquam cum in quidem sunt reprehenderit, distinctio nisi laboriosam
          deleniti nihil.
        </p>

        <div className="main--image grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
            <div>
            <img src="./img/image3.jpg" alt="ceo_Image" />
            <p className="mt-3">Boakye Agyemang Joseph, Founder and Chief Executive Officer</p>
            </div>
            <div>
            <img src="./img/image4.jpg" alt="ceo_Image" />
            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
