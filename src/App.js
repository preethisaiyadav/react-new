import React from "react"
import "./assets/Css/boot.css"
import "./index.css"
import Home from "./Components/Home"
import Service from "./Components/Service"
import About from "./Components/About"
import Navbar from "./Navbar"
import{BrowserRouter as Router ,Route ,Routes} from "react-router-dom"

function App(){
    return(
        <div className="App"> 
            <Router>
            <Navbar/>
                <Routes>
                    <Route path='/'element={<Home/>}/>
                    <Route exact path='/service'element={<Service/>}/>
                    <Route exact path='/About'element={<About/>}/>
                       
                </Routes>
                
            </Router>
        </div>
    )
}
export default App;