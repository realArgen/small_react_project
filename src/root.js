import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Navibar from "./components/navibar/Navibar";
import Footer from './components/footer/Footer'

const Root = ()=>{
    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column"}}>
            <Router>
            <Navibar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/users' component={Users}/>
                    <Route exact path='/about' component={About}/>
                </Switch>

            </Router>
            <div style={{width:"100%",marginTop:"auto"}}>
            <Footer/>
            </div>
        </div>
    )
}

export default Root;