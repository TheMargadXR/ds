import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-24 flex items-center min-h-screen justify-center bg-gradient-to-r from-emerald-400 to-cyan-400">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-white">
            www.angarag.vercel.app
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
            Англи хэлний цахим сургалтын сан{" "}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-white">
            Амгалан цогцолбор сургууль гадаад хэлний кабинет{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
