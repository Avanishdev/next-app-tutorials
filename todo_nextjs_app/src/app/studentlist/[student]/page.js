import Link from "next/link";

const Student=({params})=>{
    console.log(params);
    return (
        <>
            <h2>Student Details</h2>
            <p>Name:{params.student}</p>
            <Link href="/studentlist">Go to Student List Page</Link>
        </>
    )
}
export default Student;
