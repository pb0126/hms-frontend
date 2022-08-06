import React from "react";
import './App.css';
import Rooms from './Components/Features/Bnb/Rooms';
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Navbar />

        <Router>
          <div className='container'>
            
            <Routes>       
              <Route exact path="/rooms" element={<Rooms />} /> 
            </Routes>
            
          </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
