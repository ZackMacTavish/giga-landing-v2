import styled from 'styled-components'

import{ ButtonOne } from './Components/Buttons/Button.styles';
import { Nav } from './Components/Nav';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from '../src/Components/Logo/giga-logo.png';
import { Photocontainer, Photodivision } from './Components/Photos container/photocontainer';




const TitleOne = styled.h1`
bottom: 20vh;
  color: white;
  font-size: 2.4rem;
  padding-left: 1vw;
  padding-bottom: 1vh;
  margin: 0;
  
`

const TitleTwo = styled.h2`
  padding-left: 1vw;
  margin: 0;
bottom: 5vh;
  color: white;
  font-size: 3.4rem;
  padding-bottom: 1vh;
  
  
`

const GradientContainer = styled.div`
height: 100vh;
width: 100vh;
background-color: rgba(0,0,0,8);
`

const TitleContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 80vw;
left: 8vw;
padding-left: 2vw;
bottom: 8vh;
`

function HomePage1() {
  return (
    <div>
      <Nav>
     <Logoimage src={logo}/>
     <div>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Sign Up</ButtonOne>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.4)">Sign In</ButtonOne>
      </div>
      </Nav>

        <div>

        <TitleContainer>
          <TitleOne>Why Join Giga?</TitleOne>
            <TitleTwo>Giga is a place where all humans can understand and be understood in privacy.</TitleTwo>
            <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">What is Giga</ButtonOne>
          </TitleContainer>
        
        
        <Photocontainer>
         
          </Photocontainer>
         
          </div>
      </div>
     
      
    
  );
}

export default HomePage1;
