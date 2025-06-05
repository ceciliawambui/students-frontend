import React , {useState}from 'react'

function CreateStudent() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [age, setAge] = useState('');
   const [grade, setGrade] = useState('');

   const handleSubmit = ()=> {
       fetch('https://students-backend-o3qk.onrender.com/api/students/', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ name, email, age, grade })
       });
   };

   return (
       <div>
           <h1>Add Student</h1>
           <form onSubmit={handleSubmit}>
               <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
               <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
               <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />
               <input type='text' value={grade} onChange={(e) => setGrade(e.target.value)} placeholder='Grade' />

               <button type="submit">Add</button>

           </form>
       </div>
   )
}

export default CreateStudent
