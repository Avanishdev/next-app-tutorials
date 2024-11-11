import Link from "next/link";

export default function Error(){
    return (
        <>
            <h1>404 Page</h1>
            <h2>This page is not available.
                <Link href="/">Go to Home Page</Link>
            </h2>
        </>
    )
}