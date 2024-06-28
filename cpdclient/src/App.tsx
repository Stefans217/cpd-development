import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Display from './pages/Display/Display';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import RegistrationForm from './components/Registration/Registration';
import LoginForm from './components/Login/Login';
import './styles/App.css';

function App() {

  //states
  const [count, setCount] = useState(0)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openRegistrationModal = () => setShowRegistrationModal(true);
  const closeRegistrationModal = () => setShowRegistrationModal(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <>
      {showRegistrationModal && <RegistrationForm closeRegistrationModal={closeRegistrationModal}/>}
      {showRegistrationModal && <div className="backdrop" onClick={closeRegistrationModal}></div>}

      {showLoginModal && <LoginForm closeLoginModal={closeLoginModal}/>}
      {showLoginModal && <div className='backdrop' onClick={closeLoginModal}></div>}


      <Router>
        <div>
          <Navbar openRegistrationModal={openRegistrationModal} openLoginModal={openLoginModal}/>
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
