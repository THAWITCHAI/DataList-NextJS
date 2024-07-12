import React from "react";
import AddProducts from "./AddProducts";
import Sidebar from "@/Sidebar/Sidebar";

type Props = {};

export default function AddProductsPage({}: Props) {
  return (
    <div className="container-admin">
        <Sidebar />
        <AddProducts />
    </div>
  );
}
