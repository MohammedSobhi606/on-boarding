import React from "react";

export default function Who() {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 max-md:flex-col p-4 mt-10">
      {/* left */}
      <div className=" flex  flex-col gap-12 bg-yellow-900/70 rounded-lg px-4 py-1">
        <div className="flex gap-4 items-center">
          <h2 className="text-white text-xs font-thin">
            hello document from eg.
          </h2>{" "}
          <h2 className="bg-white size-10 rounded-full"></h2>{" "}
        </div>
        <div className="flex  items-center gap-6">
          <h1 className="text-2xl text-white flex flex-col ">
            150+
            <span className="text-xs font-light">furniture of the year</span>
          </h1>{" "}
          <h1 className="text-xl text-white flex flex-col  ">
            15+
            <span className="text-xs font-light ">furniture of the year</span>
          </h1>
        </div>
      </div>
      {/* right */}
      <div className="relative overflow-clip flex items-center justify-between bg-yellow-900/10 rounded-2xl p-4 ">
        <div className="basis-2/4 max-md:basis-full space-y-2 text-xs font-light text-justify">
          <h1 className="text-xl capitalize">
            who <span className="text-amber-800">we</span> are?
          </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            et deleniti laboriosam voluptas quo aut autem iusto labore,
            explicabo
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            et deleniti laboriosam voluptas quo aut autem iusto labore,
            explicabo et deleniti laboriosam voluptas quo aut autem iusto
            labore, explicabo
          </p>
        </div>

        <img
          src="../../../public/hero.jpg"
          alt=""
          className="absolute -right-20 max-md:hidden lg:size-80 border-8 border-amber-50  rounded-full "
        />
      </div>
    </div>
  );
}
