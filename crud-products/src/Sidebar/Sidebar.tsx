import Link from "next/link";
import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="item-menu header text-white text-3xl">ADMIN</li>
        <Link href={"/components/AllProducts"} className="item-menu text-white">
          Products
        </Link>
        <Link href={"/components/Add"} className="item-menu text-white">
          ADD
        </Link>
        <Link href={"/components/Move"} className="item-menu text-white">
          Move
        </Link>
        <Link href={"/components/Users"} className="item-menu text-white">
          Users
        </Link>
        <Link href={"/components/Users"} className="item-menu text-white">
          Regiter
        </Link>
        <br />
        <br />
        <Link
          href={"/components/AllProducts"}
          className="item-menu logout text-white"
        >
          Log-out
        </Link>
      </ul>
    </div>
  );
}
