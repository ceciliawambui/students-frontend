import './App.css';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
 return (
   <div className="App">
       <div className='container mx-auto p-4'>
         <nav className='mb-4'>
           <Link to ="/" className='mr-4'>Students</Link>
           <Link to="/create-student" className='mr-4'>Add a Student</Link>
         </nav>
         <Routes>
           <Route path='/' element={<StudentList/>} />
           <Route path='/create-student' element={<CreateStudent/>} />
           <Route path='/edit-student/:id' element={<EditStudent/>} />

         </Routes>
       </div>
    
    
   </div>
 );
}

export default App;
