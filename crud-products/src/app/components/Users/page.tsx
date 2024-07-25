"use client";
import Sidebar from "@/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function User({}: Props) {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  if (session) {

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
                    รหัสพนักงาน
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ชื่อ
                  </th>
                  <th scope="col" className="px-6 py-3">
                    อีเมลล์
                  </th>
                  <th scope="col" className="px-6 py-3">
                    รหัสผ่าน
                  </th>
                  <th scope="col" className="px-6 py-3">
                    วันเกิด
                  </th>
                  <th scope="col" className="px-6 py-3">
                    เบอร์โทรศัพท์
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ตำแหน่ง
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
                        {item["id"]}
                      </th>
                      <td className="px-6 py-4">{item["name"]}</td>
                      <td className="px-6 py-4">{item["email"]}</td>
                      <td className="px-6 py-4">{item["password"]}</td>
                      <td className="px-6 py-4">{item["born"]}</td>
                      <td className="px-6 py-4">{item["phoneNumber"]}</td>
                      <td className="px-6 py-4">{item["position"]}</td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          href={"/components/Users/" + item["id"]}
                          type="button"
                          className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Detail
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
