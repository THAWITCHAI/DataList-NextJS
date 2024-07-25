"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = any;

export default function AddProduct({ params }: Props) {
  const router = useRouter();
  const { id } = params;
  const [data,setData] = useState([])

  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState("");
  const [weight, setWeigth] = useState("");
  const [mfg, setMfg] = useState("");
  const [exp, setExp] = useState("");
  const [cost, setCost] = useState("");
  const [sell, setSell] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mt-10">PRODUCT: {id}</h1>
        <br />
        {data.map((item, index) => {
          if (String(item["id"]) === String(id)) {
            return (
              <form
                key={index}
                onSubmit={async (e) => {
                  e.preventDefault();
                  await fetch("http://localhost:3000/api/EDITpro", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: item["exp"],
                      barcode: barcode == "" ? item["barcode"] : barcode,
                      name: name == "" ? item["name"] : name,
                      weight: weight == "" ? item["weigth"] : weight,
                      mfg: mfg == "" ? item["mfg"] : mfg,
                      exp:
                        exp == "" ? item["exp"] : exp,
                      cost: cost == "" ? item["cost"] : cost,
                      sell: sell == "" ? item["sell"] : sell,
                      qty: qty == "" ? item["qty"] : qty,
                    }),
                  });
                }}
              >
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Barcode
                    </label>
                    <input
                    onChange={(e)=>setBarcode(e.target.value)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["id"]}
                      disabled
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product Name
                    </label>
                    <input
                    onChange={(e)=>setName(e.target.value)}
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["name"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Weight(kg.)
                    </label>
                    <input
                    onChange={(e)=>setWeigth(e.target.value)}
                      type="text"
                      id="company"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["weigth"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      MFG.
                    </label>
                    <input
                    onChange={(e)=>setMfg(e.target.value)}
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["mfg"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      EXP.
                    </label>
                    <input
                    onChange={(e)=>setExp(e.target.value)}
                      type="text"
                      id="website"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["exp"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Cost Price.(฿)
                    </label>
                    <input
                    onChange={(e)=>setCost(e.target.value)}
                      type="number"
                      id="visitors"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["cost"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Sell Price.(฿)
                    </label>
                    <input
                    onChange={(e)=>setSell(e.target.value)}
                      type="number"
                      id="visitors"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["sell"]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      QTY.
                    </label>
                    <input
                    onChange={(e)=>setQty(e.target.value)}
                      type="number"
                      id="visitors"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={item["qty"]}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    const id = item["id"];
                    fetch("http://localhost:3000/api/DELETEpro", {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ id: id }),
                    });
                    return router.replace("/components/AllProducts");
                  }}
                  type="button"
                  className="mx-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </form>
            );
          }
        })}
        <br />
        <Link
          href={"/components/AllProducts"}
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
