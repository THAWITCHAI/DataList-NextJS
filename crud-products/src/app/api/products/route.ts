import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function GET(requst: any) {
  const promisePool = mysqlPool.promise();
  const [rows,fields] = await promisePool.query(
    'SELECT `id`, `barcode`, `name`, `weigth`, `mfg`, `exp`, `cost`, `sell`, SUM(qty) as qty  FROM `products` WHERE barcode = barcode GROUP BY exp'
  )

  return NextResponse.json(rows);
}
