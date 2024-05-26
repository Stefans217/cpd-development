import './App.css';
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import Data from './pages/Data';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        
        <Routes>

          <Route path="/" element={<Data />}/>
          {/* <Route path="*" >
            <Navigate to="/"/>
          </Route> */}

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
