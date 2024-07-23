"use client";
import Sidebar from "@/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AllProducts({}: Props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="containe">
        <Sidebar />
        <div className="content">
          <h1 className="text-3xl">Products</h1>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Barcode
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight (Kg)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MFG
                  </th>
                  <th scope="col" className="px-6 py-3">
                    EXP
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cost Price (฿)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Selling Price (฿)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    QTY.
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["barcode"]}
                      </th>
                      <td className="px-6 py-4">{item["name"]}</td>
                      <td className="px-6 py-4">{item["weigth"]}</td>
                      <td className="px-6 py-4">{item["mfg"]}</td>
                      <td className="px-6 py-4">{item["exp"]}</td>
                      <td className="px-6 py-4">{item["cost"]}</td>
                      <td className="px-6 py-4">{item["sell"]}</td>
                      <td className="px-6 py-4">{item["qty"]}</td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          href={"/components/AllProducts/" + item["id"]}
                          type="button"
                          className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return redirect("/");
  }
}
