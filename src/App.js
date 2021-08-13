import styled from 'styled-components'



import HomePageone from './Pages/HomePage1/homepage1';
import HomePagetwo from './Pages/Homepage2';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Nav } from './Components/Nav';
import { ButtonOne } from './Components/Buttons/Button.styles';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from './Components/Logo/giga-logo.png';




function App() {
  return (
    <Router>
    <div>
        {/* Nav */}
        <Nav>
     <Logoimage src={logo}/>
     <div>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Sign Up</ButtonOne>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.4)">Sign In</ButtonOne>
      </div>
      </Nav>

      <Switch>

      <Route path="/" exact component={HomePageone}/>
      <Route path="/learnmore" component={HomePagetwo}/>
      </Switch>
   
   </div>
   </Router>



   
  );
}

export default App;
