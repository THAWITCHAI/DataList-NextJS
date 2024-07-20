"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./auth/Login/page";
import { redirect } from "next/navigation";

type Props = {};

function HomePage({}: Props) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <Login/>
      </>
    );
  }else{
    return redirect('/welcome')
  }
}

export default HomePage;
