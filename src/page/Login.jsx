import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(res.data.message);
      let result = res.data.message;
      if (result === "passwordCorrected") {
        alert("Амжилттай нэвтрэлээ");
      } else if (result === "passwordiInCorrect") {
        alert("нууц үг тохирохгүй байна");
      } else {
        alert("Хэрэглэгч олдсонгүй");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#007f73]">
            Нэвтрэх
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  rounded-xl">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                И-майл хаяг
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007f73]sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Нууц үг
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007f73] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={submit}
                className="flex w-full justify-center rounded-md bg-[#007f73] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4CCD99] duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Нэвтрэх
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Бүртгэл байгаа эсэх ?{" "}
            <Link
              to={"/signup"}
              className="font-semibold leading-6 text-[#007f73] hover:text-[#4CCD99] duration-100"
            >
              Бүртгүүлэх
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
