import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Assignments from './components/Assignments';
import Assign_upload from './components/Assign_upload';
import Home from './components/Home';
import Lectures from './components/Lectures';
import Lecture_upload from './components/Lecture_upload';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/lectures' element={<Lectures />} /> 
        <Route path='/assignments' element={<Assignments />} /> 
        <Route path='/admin' element={<Admin />} /> 
        <Route path='/login' element={<Login />} />   
        <Route path='/assignment_upload' element={<Assign_upload />} /> 
        <Route path='/lecture_upload' element={<Lecture_upload />} />  
        
      </Routes>
    </div>
  );
}

export default App;
