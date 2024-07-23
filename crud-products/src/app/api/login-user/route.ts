import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req:any){
    const {username,password} = await req.json()
    const promisePool = await mysqlPool.promise();
    console.log('Password',password)
    const [row] = await promisePool.query('SELECT name,password FROM employees  WHERE name = ? and password = ?',[username,password])
    return NextResponse.json(row[0],{status:200})
}