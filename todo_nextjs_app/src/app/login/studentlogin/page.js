import Link from 'next/link'
import React from 'react'

const StudentLogin = () => {
  return (
    <div>
        <h1>Student Login</h1>
        <Link href="/login">Go to Login Page</Link>
        <Link href="/studentlist">Go to Student List Page</Link>
    </div>

  )
}

export default StudentLogin