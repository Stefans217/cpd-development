import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Display from './pages/Display';
import Home from './pages/Home';
import Upload from './pages/Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />}/>
            <Route path="/display" element={<Display />}/>
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
