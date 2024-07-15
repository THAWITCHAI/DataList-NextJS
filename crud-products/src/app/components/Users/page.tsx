import Sidebar from "@/Sidebar/Sidebar";
import Link from "next/link";
import React from "react";

type Props = {};

export default function User({}: Props) {
  return (
    <div className="containe">
      <Sidebar />
      <div className="content">
        <h1 className="text-3xl">Users</h1>
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
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  8853124695125
                </th>
                <td className="px-6 py-4">WY</td>
                <td className="px-6 py-4">0.25</td>
                <td className="px-6 py-4">12/06/2564</td>
                <td className="px-6 py-4">12/06/2565</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">ยา</td>
                <td className="px-6 py-4 text-center">
                  <Link
                  href={'/components/Users/1'}
                    type="button"
                    className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
