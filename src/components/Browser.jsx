import React from "react"

import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
}   from 'react-router-dom'; 
import Home from "../pages/Home";
import Login from "../pages/Login";

const Browers = () =>{
    return(
        <>
        <Router>

          <Routes>
            <Route exact path="/" element={<Login/>} />
          </Routes>
      </Router>
        </>
    ) 
}
export default Browers