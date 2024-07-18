import Sidebar from "@/Sidebar/Sidebar";
import Link from "next/link";
import React from "react";

type Props = {};

export default function AllProducts({}: Props) {
  return (
    <div className="containe">
      <Sidebar />
      <div className="content">
        <h1 className="text-8xl flex justify-center items-center mx-auto h-full">Welcome to Web</h1>
      </div>
    </div>
  );
}
