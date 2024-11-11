"use client"

import { useParams } from "next/navigation";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
async function getUser(id){
    let data= await fetch(`http://localhost:3000/api/users/${id}`);
    data= await data.json();
    console.log(data.data[0])
    return data.data[0];
}
// export default function Page(){
//     const {id}=useParams();
//     console.log("id:",id);
//     const [user,setUser]=useState([]);
//     useEffect(()=>{
//         if(id){
//             const fetchUser=async()=>{
//                 const user=await getUsers(id);
//                 //?
//                 setUser(user);
//             }
//             fetchUser();
//         }
//     },[id])
//     console.log("user:",user)
//     return <>
//         <h1>Users</h1>
//         {
//             user&&<Link href={`/users/${user.id}`} key={user.id}>Name:{user.name}</Link>
//         }
//     </>
// }

export default function Page(params){
    // console.log(params)
    const {id}=useParams();
    const user=getUser(id);
    return <>
        <h2>User Details</h2>
        <h4>Id:{user.id}</h4>
        <h4>Name:{user.name}</h4>
        <h4>Email:{user.email}</h4>
        <h4>Website:{user.website}</h4>
    </>
}