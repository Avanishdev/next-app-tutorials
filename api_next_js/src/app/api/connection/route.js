import {NextResponse} from "next/server"
const mongoose=require("mongoose")

export async function GET(){
    await mongoose.connect(connectDB)
    return NextResponse.json({ressult:true})
}