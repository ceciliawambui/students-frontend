import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function StudentList() {
   const [students, setStudents] = useState([])
   useEffect(() => {
       fetchStudents();
   }, []);

   const fetchStudents = async () => {
       const response = await fetch('https://students-backend-o3qk.onrender.com/api/students/');
       const data = await response.json();
       setStudents(data);
   };
//    useEffect(()=>{
//        fetch('http://127.0.0.1:8000/api/students/')
//        .then(response => response.json())
//        .then(data => setStudents(data));
//    }, [])

   const deleteStudent = async (id) => {
       try {
           await fetch(`https://students-backend-o3qk.onrender.com/api/students/${id}/`, {
               method: 'DELETE',
           });
           // Refresh the list of students after deleting
           fetchStudents();
       } catch (error) {
           console.error('Error deleting student:', error);
       }
   };
 return (
   <div>
       <h1>Students List</h1>
   <ul>
       {students.map(student =>(
           <li key={student.id}>
               {student.name} - {student.email} - {student.age} - {student.grade}
               <Link to={`/edit-student/${student.id}`} className="ml-4 text-blue-500">Edit</Link>
               <button onClick={() => deleteStudent(student.id)}>Delete</button>

           </li>
       ))}
   </ul>
   </div>

 )
}

export default StudentList
