import React from "react";

import { Link } from "react-router-dom";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/category3",
    imageSrc: card1,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "/category2",
    imageSrc: card2,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "/category1",
    imageSrc: card3,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "/category4",
    imageSrc: card3,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
];

export default function Category() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-semi tracking-tight text-gray-900 text-center">
          Агуулга
        </h2>
        <br />
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer hover:scale-110 duration-200"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none ">
                <Link to={product.href}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
