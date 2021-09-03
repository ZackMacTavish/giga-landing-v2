import styled from 'styled-components'



import HomePageone, { Everythingcontainer } from './Pages/HomePage1/homepage1';
import HomePagetwo from './Pages/Homepage2';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Nav } from './Components/Nav';
import { ButtonOne } from './Components/Buttons/Button.styles';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from './Components/Logo/giga-logo.png';
import { Footer, FooterFlextext, FooterText } from './Components/Footer/Footer.styles';
import GigaGuidesone from './Pages/Giga Guides/Gigaguides1';
import About from './Pages/About';



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
      <Route path="/giga-guides1" component={GigaGuidesone}/>
      <Route path="/about" component={About}/>
      </Switch>




            {/* Footer */}       
     <Footer>
     <Link to="/">
     <Logoimage src={logo}/>
     </Link>
      <FooterFlextext>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/about'>
        <FooterText>
          About
          </FooterText>
          </Link>
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
{/* test */}