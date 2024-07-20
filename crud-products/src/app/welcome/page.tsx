"use client";
import Sidebar from "@/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default async function AllProducts({}: Props) {
  const { data: session } = await useSession();
  if (!session) {
    return redirect("/");
  } else {
    return (
      <div className="containe">
        <Sidebar />
        <div className="content">
          <h1 className="text-8xl flex justify-center items-center mx-auto h-full">
            Welcome to Web
          </h1>
        </div>
      </div>
    );
  }
}
