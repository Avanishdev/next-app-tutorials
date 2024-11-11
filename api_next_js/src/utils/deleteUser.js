"use client"
export default function deleteUser(props){
    const id=props.id;
    const deleteUser=async()=>{
        let result=await fetch("http://localhost:3000/api/users"+id,{
            method:"DELETE"
        });
        result=await result.json();
        if(result.success){
            alert("user deleted successfully!")
        }
    }
    return <button onClick={deleteUser}>Delete user</button>
}