import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StudentLogin from './components/Header';
import Ragistration from './pages/Ragistration';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Header/>
    <Routes>
        <Route path="/" element={<Ragistration />} />
        { <Route path='/studentLogin' element={<StudentLogin/>}/> }
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App