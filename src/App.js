import styled from 'styled-components'

import{ ButtonOne } from './Components/Buttons/Button.styles';
import { Nav } from './Components/Nav';
import { Logoimage } from './Components/Logo/logo.styles';
import logo from '../src/Components/Logo/giga-logo.png';
import { Photocontainer } from './Components/Photos container/photocontainer';

import { TrendingNowContainer, TrendingNowtitle, TrendingPhotos, TrendingPhotosflex, TrendingNowtopics } from './Components/Trending Now Section/Trendingnow.styles';
import trnd1 from '../src/Components/Trending Now Section/trending1.png';
import trnd2 from '../src/Components/Trending Now Section/trnd2.png';
import trnd3 from '../src/Components/Trending Now Section/trnd3.png';
import trnd4 from '../src/Components/Trending Now Section/trnd4.png';
import { FlexContainer, FlexTextbutton, Getstarted, TextGetstarted, ThreeDguy } from './Components/Get Started/Getstarted.styles';
import threedphoto from './Components/Get Started/3dguy.png';


const Everythingcontainer = styled.div`
margin: 0;
padding: 0;
overflow: hidden;
`


const TitleOne = styled.h1`
bottom: 20vh;
  color: ${(props) => props.Titlecolor};
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
   <Everythingcontainer>
      <Nav>
     <Logoimage src={logo}/>
     <div>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Sign Up</ButtonOne>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.4)">Sign In</ButtonOne>
      </div>
      </Nav>

        <div>

        <TitleContainer>
          <TitleOne Titlecolor="white">Why Join Giga?</TitleOne>
            <TitleTwo>Giga is a place where all humans can understand and be understood in privacy.</TitleTwo>
            <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">What is Giga</ButtonOne>
          </TitleContainer>
        
        
        <Photocontainer>
         
          </Photocontainer>
         
          </div>


          <TrendingNowContainer>
              <TrendingNowtitle Titlecolor="#2ca3ff">Trending Now</TrendingNowtitle>
              <TrendingPhotosflex>
                        <div>
                              
                              <TrendingPhotos src={trnd1} />
                              <TrendingNowtopics>Stargazing</TrendingNowtopics>
                        </div>
                        <div>
                            <TrendingPhotos src={trnd2} />
                            <TrendingNowtopics>Nascar</TrendingNowtopics>
                        </div>
                        <div>
                            <TrendingPhotos src={trnd3} />
                            <TrendingNowtopics>College Basketball</TrendingNowtopics>
                        </div>
                        <div>
                            <TrendingPhotos src={trnd4} />
                            <TrendingNowtopics>Hawaii</TrendingNowtopics>
                        </div>
              </TrendingPhotosflex>
          </TrendingNowContainer>
              <FlexContainer>
                      <Getstarted>

                          <FlexTextbutton>
                          <TextGetstarted>Learn about something new and share with your friend group.</TextGetstarted>
                        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Get Started</ButtonOne>
                        </FlexTextbutton>
                          <ThreeDguy src={threedphoto} />

                      </Getstarted>

                </FlexContainer>
     
     </Everythingcontainer>
    
  );
}

export default HomePage1;
