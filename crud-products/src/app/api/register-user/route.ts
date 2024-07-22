import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  console.log("data", data);
  const mysql = await mysqlPool.promise();
  const sql = "INSERT INTO employees set ?";
  mysql.query(sql, data);
  return NextResponse.json(
    { message: "Add Data Successfully" },
    { status: 200 }
  );
}
