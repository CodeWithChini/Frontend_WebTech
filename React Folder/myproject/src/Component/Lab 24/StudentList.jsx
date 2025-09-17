import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function StudentList() {
    const [studentlist , setStudentList] = useState([])
    const apiURL = "https://6881dd4266a7eb81224c5c1e.mockapi.io/Student"
    const fetchstu = () => {
        fetch(apiURL)
            .then(res => res.json())
        .then((res)=>[setStudentList(res)])
    }
    useEffect{
        () => {
        fetchstu()
        }, []
    }

    const
  return (
      <div>

       </div>
  )
}

export default StudentList
