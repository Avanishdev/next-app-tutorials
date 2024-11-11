import {users} from "../../../../utils/data"
import { NextResponse } from "next/server";
export async function GET(request,content){
    const data=await users.filter((user)=>user.id==content.params.id);
    return NextResponse.json(data.length==0?{result:"user not found!",success:false}:{data},{status:200});
}


export async function PUT(request,content){
    let payload=await request.json();
    payload.id=content.params.id;
    if(!payload.name||payload.website||payload.email){
        return NextResponse.json({result:"Please fill the details properly",success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200});
}

export async function DELETE(request,content){
    let id=content.params.id;
    if(id){
        return NextResponse.json({result:"user deleted successfully!",success:true},{status:200});
    }
    else{
        return NextResponse.json({result:"Internal server error",success:false},{status:400});
    }
}