import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  console.log(data)
  const form = {
    barcode:data['barcode'],
    name:data['name'],
    weigth:data['weight'],
    mfg:data['mfg'],
    exp:data['exp'],
    cost:data['cost'],
    sell:data['sell'],
    qty:data['qty']/2,
  }
  console.log(form)
  const exp = data['id']
  const mysql = await mysqlPool.promise();
  await mysql.query("UPDATE products SET ? WHERE exp = ?", [
    form,
    exp,
  ]);
  return NextResponse.json(
    { message: "Add Data Successfully" },
    { status: 200 }
  );
}
