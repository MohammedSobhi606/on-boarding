import React from "react";

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto  relative ">
      {" "}
      <img
        src="../../../public/hero.jpg"
        className="rounded-2xl mt-4 aspect-[16/7] "
        alt="img"
      />
      <section className="absolute inset-0 md:px-20 md:py-26 p-8  h-full flex flex-col justify-end">
        <div className=" flex items-center justify-between p-2 max-md:flex-col  ">
          {/* left */}
          <h1 className="text-amber-50 text-4xl tracking-wide capitalize ">
            bringing simplicity in the furnishing market
          </h1>
          {/* right */}
          <div className="flex flex-col gap-4 md:basis-xl">
            <p className=" text-base leading-6 text-justify text-amber-50 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              soluta accusantium atque culpa veritatis rerum odit iure excepturi
              dignissimos! Saepe, facere!
            </p>
            <a
              className="rounded-lg px-6 py-2 text-amber-900  bg-white hover:bg-amber-900 transition-colors hover:text-white self-start"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              start your furnishing jouarny
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
