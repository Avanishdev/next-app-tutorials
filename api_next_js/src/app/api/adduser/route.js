import {NextResponse} from 'next/server'
export async function POST(request,response){
    let payload=await request.json();
    if(!payload){
        return NextResponse.json({result:"required field not found",success:false},{status:400});
    }
    return NextResponse.json({result:"new user created",success:true},{status:201});
}