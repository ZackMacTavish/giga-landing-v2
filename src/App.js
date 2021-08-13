import styled from 'styled-components'



import HomePageone, { Everythingcontainer } from './Pages/HomePage1/homepage1';
import HomePagetwo from './Pages/Homepage2';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Nav } from './Components/Nav';
import { ButtonOne } from './Components/Buttons/Button.styles';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from './Components/Logo/giga-logo.png';
import { Footer, FooterFlextext, FooterText } from './Components/Footer/Footer.styles';



function App() {
  return (
    <Router>
  <Everythingcontainer>
        {/* Nav */}
        <Nav>
          <Link to="/">
     <Logoimage src={logo}/>
     </Link>
     <div>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Sign Up</ButtonOne>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.4)">Sign In</ButtonOne>
      </div>
      </Nav>

      {/* Switch to Homepage One + Homepage Two */}

      <Switch>

      <Route path="/" exact component={HomePageone}/>
      <Route path="/learnmore" component={HomePagetwo}/>
      </Switch>




            {/* Footer */}       
     <Footer>
     <Link to="/">
     <Logoimage src={logo}/>
     </Link>
      <FooterFlextext>
        <FooterText>
          About
          </FooterText>
          <FooterText>
          Support
          </FooterText>
          <FooterText>
          FAQ
          </FooterText>
          <FooterText>
          Community
          </FooterText>

          </FooterFlextext>
    
     </Footer>
   
     </Everythingcontainer>
   </Router>



   
  );
}

export default App;
