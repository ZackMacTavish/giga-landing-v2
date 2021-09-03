import React from 'react'
import {Link} from 'react-router-dom';
import moonlight from '../Photos/Moonlight.svg';
import styled from 'styled-components';
import { ButtonOne } from '../Components/Buttons/Button.styles';

const AboutContainer = styled.div`
display: grid;
    grid-template-columns: auto  15vw 1vw 15vw auto;
    grid-template-rows: 15vh 50px 50px 60px 60px 60px 60px 60px 8vh ;
    padding-top: 10vh;
    width: 100vw;
    height: 100vh;
    background-color: #2ca3ff;

`

const AboutHeader = styled.h2`
  display: grid;
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        align-self: center;
        align-items: center;
       margin: 0 auto;
       color: white;

`

const AboutText = styled.h6`
display: grid;
        grid-column-start: 3;
        grid-row-start: 7;
        width: 55vw;
        justify-self: center;
        color: white;
        font-size: 1.3rem;
        line-height: 3.5vh;
      
`
    
  const Moonlight = styled.img`
  display: grid;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-self: center;
  `

  const PositionButtonone =styled.div`
  display: grid;
        grid-column-start: 2;
        grid-row-start: 10;
      
`      

const PositionButtontwo =styled.div`
display: grid;
      grid-column-start: 4;
      grid-row-start: 10;

`




export default function About() {
    return (
        <AboutContainer>
    
        
       <AboutHeader>About Us</AboutHeader>
    
        <Moonlight src={moonlight} alt="logo" />
    
        <AboutText>Giga was founded to help people understand and be understood with privacy. 
        We are constantly iterating, solving problems, and working together to connect people and share information around the world.
        If you would like to get in touch with Giga, send us a message here.</AboutText>
    
        <PositionButtonone>
        <Link style={{textDecoration: 'none', color: 'white'}}to="/">
        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">

      
        <h3 style={{padding: '0', margin: '0'}}>Go Home</h3>
            
               
            
        
        </ButtonOne >
        </Link>
              
        </PositionButtonone>
    
    <PositionButtontwo>
       
        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/messageus">
        <h3 style={{padding: '0', margin: '0'}}>Message Us</h3>
           
                 
                </Link>
        
        </ButtonOne>
        </PositionButtontwo>
    
    
        </AboutContainer>
    )
}
