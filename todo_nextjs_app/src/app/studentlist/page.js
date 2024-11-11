import Link from "next/link";
const StudentList=()=>{
    const names=["avanish","yuvraj","vijendra","adarsh"];
    return (
        <>
            <h2>Student List</h2>
            <ul>
                {names.map((name,index)=>{
                    return (<>
                        <li key={index}>
                            <Link href={`/studentlist/${name}`}>{name} with index of {index}</Link>
                        </li>
                    </>
                )})}
            </ul>
        </>
    )
}
export default StudentList;