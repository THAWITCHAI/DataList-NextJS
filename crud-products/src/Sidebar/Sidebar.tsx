'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const router = useRouter()
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="item-menu header text-white text-3xl">ADMIN</li>
        <Link href={"/components/AllProducts"} className="item-menu text-white">
          Products
        </Link>
        <Link href={"/components/add-product"} className="item-menu text-white">
          ADD
        </Link>
        <Link href={"/components/Users"} className="item-menu text-white">
          Users
        </Link>
        <Link href={"/components/Users/add"} className="item-menu text-white">
          Regiter
        </Link>
        <br />
        <br />
        <button
        onClick={(e)=>{
          e.preventDefault()
          return router.replace('/')
        }}
          className="item-menu logout text-white"
        >
          Log-out
        </button>
      </ul>
    </div>
  );
}
