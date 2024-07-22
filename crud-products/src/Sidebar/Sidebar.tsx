"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

export default function Sidebar({}: Props) {
  const {data:session} = useSession()
  const router = useRouter();
  return (
    <div className="sidebar">
      <ul className="menu">
        <li
          onClick={(e) => {
            e.preventDefault();
            return router.push("/welcome");
          }}
          className="item-menu header text-white text-xl uppercase"
        >
          {session?.user?.name}
        </li>
        <Link href={"/components/AllProducts"} className="item-menu text-white">
          ข้อมูลสินค้าทั้งหมด
        </Link>
        <Link href={"/components/add-product"} className="item-menu text-white">
          เพิ่มสินค้า
        </Link>
        <Link href={"/components/Users"} className="item-menu text-white">
          ข้อมูลพนังงานทั้งหมด
        </Link>
        <Link href={"/components/Users/add"} className="item-menu text-white">
          เพิ่มข้อมูลพนังงาน
        </Link>
        <br />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            return signOut();
          }}
          className="item-menu logout text-white"
        >
          ออกจากระบบ
        </button>
      </ul>
    </div>
  );
}
