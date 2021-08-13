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

import { GigaGuides, GuideBoxes } from './Components/Giga Guides/Gigaguides.styles';

import guide1 from './Components/Giga Guides/guide1.png';
import guide2 from './Components/Giga Guides/guide2.png';
import guide3 from './Components/Giga Guides/guide3.png';
import guide4 from './Components/Giga Guides/guide4.png';

import rcnt1 from './Components/Giga Guides/Railroads.png';
import rcnt2 from './Components/Giga Guides/flowerfields.png';
import rcnt3 from './Components/Giga Guides/Hawaii.png';
import rcnt4 from './Components/Giga Guides/Outdoors.png';
import { GirlImage, MindsConnect } from './Components/Minds Connect Section/Mindsconnect.styles';
import girl from './Components/Minds Connect Section/imagegirl.png';


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
     {/* Nav */}
      <Nav>
     <Logoimage src={logo}/>
     <div>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Sign Up</ButtonOne>
      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.4)">Sign In</ButtonOne>
      </div>
      </Nav>


          {/* Photo/landing section */}
        <div>

        <TitleContainer>
          <TitleOne Titlecolor="white">Why Join Giga?</TitleOne>
            <TitleTwo>Giga is a place where all humans can understand and be understood in privacy.</TitleTwo>
            <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">What is Giga</ButtonOne>
          </TitleContainer>
        
        
        <Photocontainer>
         
          </Photocontainer>
         
          </div>

           {/* Trending Now section */}
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

                 {/* Get Started */}
                      <Getstarted>

                          <FlexTextbutton>
                          <TextGetstarted Backgroundcolor="white">Learn about something new and share with your friend group.</TextGetstarted>
                        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Get Started</ButtonOne>
                        </FlexTextbutton>
                          <ThreeDguy src={threedphoto} />

                      </Getstarted>

                </FlexContainer>

                {/* Giga Guides */}

                <GigaGuides>
                <TrendingNowtitle Titlecolor="#2ca3ff">Giga Guides</TrendingNowtitle>

                <TrendingPhotosflex>
                        <div>
                            <GuideBoxes src={guide1} />
                            <TrendingNowtopics>Create Assessments</TrendingNowtopics>
                        </div>

                        <div>
                            <GuideBoxes src={guide2} />
                            <TrendingNowtopics>Becoming a Pro User</TrendingNowtopics>
                         </div>

                        <div>
                            <GuideBoxes src={guide3} />
                            <TrendingNowtopics>Understanding Subjects</TrendingNowtopics>
                        </div>

                        <div>
                            <GuideBoxes src={guide4} />
                            <TrendingNowtopics>Create a Category</TrendingNowtopics>
                        </div>

                        </TrendingPhotosflex>

                </GigaGuides>

                       {/* Recently Made */}

                <GigaGuides>
                <TrendingNowtitle Titlecolor="#2ca3ff">Recently Made</TrendingNowtitle>

                <TrendingPhotosflex>
                        <div>
                            <GuideBoxes src={rcnt1} />
                            <TrendingNowtopics>Railroads</TrendingNowtopics>
                        </div>

                        <div>
                            <GuideBoxes src={rcnt2} />
                            <TrendingNowtopics>Sunflowers</TrendingNowtopics>
                         </div>

                        <div>
                            <GuideBoxes src={rcnt3} />
                            <TrendingNowtopics>Traveling Hawaii</TrendingNowtopics>
                        </div>

                        <div>
                            <GuideBoxes src={rcnt4} />
                            <TrendingNowtopics>The Outdoors</TrendingNowtopics>
                        </div>

                        </TrendingPhotosflex>

                </GigaGuides>

                  {/* Recently Made */}

                  <TrendingNowContainer>
                    <MindsConnect>
                    <FlexTextbutton>
                          <TextGetstarted Backgroundcolor="#2ca3ff">A place where all minds connect.</TextGetstarted>
                        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Get Started</ButtonOne>
                        </FlexTextbutton>
                        <div>
                    <GirlImage  src={girl} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>
     
     </Everythingcontainer>
    
  );
}

export default HomePage1;
