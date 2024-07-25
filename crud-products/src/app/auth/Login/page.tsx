"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

type Props = {};

function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          เข้าสู่ระบบ
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ชื่อ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                type="text"
                required
                autoComplete="email"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                รหัสผ่าน
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn("credentials", {
                  username: email,
                  password: password,
                  redirect: true,
                  callbackUrl: "/welcome",
                });
              }}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
