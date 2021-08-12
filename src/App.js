import styled from 'styled-components'

import{ ButtonOne } from './Components/Buttons/Button.styles';
import { Nav } from './Components/Nav';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from '../src/Components/Logo/giga-logo.png';

function HomePage1() {
  return (
    
      <Nav>
     <Logoimage src={logo}/>
      <ButtonOne>Sign Up</ButtonOne>
        
      </Nav>
      
    
  );
}

export default HomePage1;
