"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = any;

export default function AddUser({ params }: Props) {
  const { data: session } = useSession();
  const [getData, setGetdata] = useState([]);
  const [data, setData] = useState({
    name: String,
    email: String,
    password: String,
    born: String,
    phoneNumber: String,
    position: String,
  });
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((res) => res.json())
      .then((res) => setGetdata(res));
  }, []);
  if (session) {


    const handleChang = (e: any) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      console.log(data);
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const res = await getData.find((item) => item["email"] === data["email"]);
      if (!res) {
        fetch("http://localhost:3000/api/register-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const form = e.target;
        form.reset();
        return;
      }
      if (res) {
        return alert("อีเมลล์ซ้ำ");
      }
    };
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mt-10">ADD USER</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="last_name"
                onChange={handleChang}
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Thawitchai Boonsong"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChang}
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="thawitchai@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChang}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*********"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </label>
              <input
                name="phoneNumber"
                type="tel"
                onChange={handleChang}
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="085-154-7461"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                id="website"
                onChange={handleChang}
                name="born"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12/06/2545"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Position
              </label>
              <input
                type="text"
                name="position"
                onChange={handleChang}
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="พนังงานขาย"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
        <br />
        <Link
          href={"/components/Users"}
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Back
        </Link>
      </div>
    );
  } else {
    return redirect("/");
  }
}
