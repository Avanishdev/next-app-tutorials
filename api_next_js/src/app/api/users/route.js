import {users} from "../../../utils/data"
import { NextResponse } from "next/server";
export async function GET(){
    const data=await users;
    return NextResponse.json(data);
}
