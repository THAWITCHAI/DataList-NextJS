import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";
import { NextApiRequest } from "next";

export async function GET(requst: any) {
  const promisePool = mysqlPool.promise();
  const [rows, fields] = await promisePool.query("SELECT * FROM employees");

  return NextResponse.json(rows);
}