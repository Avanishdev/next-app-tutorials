"use client"
import { useRouter } from "next/navigation"

const Login=()=>{
    const router=useRouter();
    const handleClick=(path)=>{
        router.push(path)
    }
    return (
        <>
            <h1>Login Page</h1>
            <br />
            <button onClick={()=>{handleClick("/")}}>Go to Home Page</button>
            <br />
            <button onClick={()=>handleClick("/login/studentlogin")}>Student Login</button>
            <button onClick={()=>handleClick("/login/teacherlogin")}>Teacher Login</button>
        </>
    )
}
export default Login;