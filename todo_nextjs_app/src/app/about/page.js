"use client"
import { useRouter } from "next/navigation";
const About=()=>{
    const router=useRouter();
    const handleClick=(path)=>{
        router.push(path);
    }
    return (
        <>
            <h1>About Page</h1>
            <br />
            <button onClick={()=>handleClick("/")}>Go to Home Page</button>
        </>
    )
}
export default About;