import Link from "next/link";
async function getUsers(){
    let data=await fetch("http://localhost:3000/api/users");
    data=await data.json();
    return data;
}
export default async function Page(){
    const users=await getUsers();
    return <>
        <h1>Users</h1>
        {
            users.map((user)=>(
                <>
                    {/* <h3>{user.name}</h3> */}
                    <Link href={`/users/${user.id}`} key={user.id}>Name:{user.name}</Link>
                    <Link href={`/users/${user.id}/update`} key={user.id}>Edit</Link>
                    <Link href={`/users/${user.id}/delete`} key={user.id}>Delete</Link>
                </>
            ))
        }
    </>
}