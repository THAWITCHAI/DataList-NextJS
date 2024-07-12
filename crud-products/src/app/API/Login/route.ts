import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([{ email: "Thawitchia@gmail.com", pwd: 13495000 }]);
};
