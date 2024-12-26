import React from 'react'

function Button({stdName = "Guest",stdAge = 0, isStudent = false }) {
  return (
     <div className="StdDiv">
        <h1>Student Name:{stdName}</h1>
        <h1>Student Age: {stdAge}</h1>
        <h1>Student status: {isStudent ? "true" : "false"}</h1>
     </div>
  )
}

export default Button