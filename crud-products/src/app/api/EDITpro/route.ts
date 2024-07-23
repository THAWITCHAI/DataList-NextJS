import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();

  const id = await Number(data["id"]);

  const mysql = await mysqlPool.promise();
  await mysql.query("UPDATE products SET ? WHERE id=? and exp=?",[ data, id,data['exp']]);
  return NextResponse.json(
    { message: "Add Data Successfully" },
    { status: 200 }
  );
}
