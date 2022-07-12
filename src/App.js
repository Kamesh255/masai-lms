import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Assignments from './components/Assignments';
import Home from './components/Home';
import Lectures from './components/Lectures';
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
      </Routes>
    </div>
  );
}

export default App;
