import React from "react";
// import { Link } from "react-router-dom";
import manSmile from "../assets/man-smile.png";

function HeroCard() {
  return (
    <article
      className={`relative flex justify-center bg-slate-200 w-full min-h-100 rounded-2xl p-2`}
    >
      <section className="w-full h-full">
        <article
          className="w-full h-full"
          style={{
            backgroundImage: `url(${manSmile})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <section className="h-full">
            <article>
              <h1 className="">Mohamed Jalloh</h1>
            </article>
          </section>
          <section className="">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              explicabo, delectus consequatur laudantium mollitia est,
              repudiandae consequuntur expedita esse, reprehenderit illo
              sapiente error et voluptate optio sint? Ipsum, alias ducimus.
            </p>
          </section>
        </article>
      </section>
    </article>
  );
}

export default HeroCard;
