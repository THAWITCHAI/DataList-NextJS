import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    { id: 1, email: "Thawitchia@gmail.com", pwd: 13495000 },
  ]);
};
