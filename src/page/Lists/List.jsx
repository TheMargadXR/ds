import React from "react";
import { Link } from "react-router-dom";
import testData from "../../Data/testData.json";

export default function Example() {
  return (
    <div>
      <div role="list" className="divide-y bg-gray-100 p-5 md:p-10 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold py-2 md:py-3 text-gray-800 mb-4">
          POWER POINT PRESENTATION
        </h2>
        {testData.map((data) => (
          <div
            key={data.about}
            className="flex flex-col md:flex-row justify-between gap-2 md:gap-x-6 p-3 mb-5 md:mb-6 shadow-md rounded-3xl bg-indigo-50"
          >
            <p className="rounded-2xl bg-indigo-600 p-2 md:p-3 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {data.class}-р Анги
            </p>
            <div className="flex-1 md:min-w-0 md:flex-auto md:gap-x-4 ">
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-semibold leading-6 text-gray-900">
                  {data.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {data.about}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 md:flex-shrink-0 sm:flex sm:flex-col sm:items-end">
              <button className="rounded-2xl bg-indigo-600 py-2 px-10  md:p-3 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a href={data.courseUrl}>Үзэх</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
