"use client"
import { useState } from 'react';
import '../style.css';
const URL="http://localhost:3000/api/adduser";
export default function Page(){
    const [user,setUser]=useState({
        name:"",
        email:"",
        website:"",
    });
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(user)
            });
            if(response.ok){
                const res_data=await response.json();
                // console.log(res_data)
                setUser({
                    name:"",
                    email:"",
                    website:"",
                })
                alert("new user added!")
            }
            // alert("new user added!")
        }catch(error){
            console.log("adduser",error);
        }
    }
    return <>
        <h1 className='main-heading'>Adding new user</h1>
        <form className="add-form" onSubmit={handleSubmit}>
            <input type="text" name="name" id="name"
            onChange={handleChange} value={user.name} placeholder="name"/>
            <input type="email" name="email" id="email"
            onChange={handleChange} value={user.email} placeholder="email"/>
            <input type="website" name="website" id="website"
            onChange={handleChange} value={user.website} placeholder="website"/>
            <button className="btn" type="submit">Add new user</button>
        </form>
    </>
}
