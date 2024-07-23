import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function DELETE(req: any) {
  const { id } = await req.json();
  const promisePool = await mysqlPool.promise();
  await promisePool.query("DELETE FROM products WHERE id = ?", [id]);

  return NextResponse.json({ massage: "Delete successfully" }, { status: 200 });
}
