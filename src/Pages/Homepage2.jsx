
import styled from 'styled-components';
import { ButtonOne } from '../Components/Buttons/Button.styles';
import { FlexContainer, FlexTextbutton, Getstarted, TextGetstarted, ThreeDguy } from '../Components/Get Started/Getstarted.styles';
import webphoto1 from '../Components/Web Photo Container/Web-photo1.png';
import { FlexContainer2, WebPhoto } from '../Components/Web Photo Container/webcontainer.styles';
import threedphoto from '../Components/Get Started/3dguy.png';
import { TrendingNowContainer } from '../Components/Trending Now Section/Trendingnow.styles';
import { GirlImage, MindsConnect } from '../Components/Minds Connect Section/Mindsconnect.styles';
import photo2 from '../Photos/Photo2.png';
import photo3 from '../Photos/photo3.png';
import photo4 from '../Photos/Photo4.png';

export const FlexContainerthree = styled.div`
display: flex;
justify-content: center;
flex-direction: ${(props) => props.Flexdirection};
position: absolute;
left: 7vw;
`

export const FlexContainerfour = styled.div`
display: flex;
justify-content: space-between;
flex-direction: ${(props) => props.Flexdirection};
position: absolute;
left: 14.5vw;
`

export const BigTexthome = styled.h2`
font-size: 3rem;
padding-left: 1.4vw;
padding-bottom: 0;
color: #2ca3ff;
width: ${(props) => props.Stylewidth};
`
export const Paragraph =styled.p`
color: #7C7C7C;
font-size: 1rem;
padding-left: 1.6vw;
margin-top: -2vh;
font-weight: 600;
width: 25vw;
`

function HomePagetwo() {
    return (
       <div>
  <FlexContainer2>
      {/* Web Photo Section */}
        <WebPhoto src={webphoto1} />
        <div>
        <BigTexthome Stylewidth="20vw" >Let's skip the small talk.</BigTexthome>
        <Paragraph>
            Giga is a platform to discuss ideas. 
            Implementing an easy to follow structured approach. 
            Enabling faster, quicker, better understanding of points of view. 
            Leading to a community of members who respect individual opinion.
            </Paragraph>
        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Get Started</ButtonOne>
        </div>
        </FlexContainer2>

 {/* 3d guy section */}
        <FlexContainer>
                  
                 <Getstarted>

                       <FlexTextbutton>
                        <TextGetstarted Backgroundcolor="white">
                        Giga is a system to analyze, and learn information  in a new way.

                        </TextGetstarted>
                      <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Get Started</ButtonOne>
                      </FlexTextbutton>
                        <ThreeDguy src={threedphoto} />

                    </Getstarted>

              </FlexContainer>


              <FlexContainer2/>



                  {/* Minds Connect - Girl Photo */}

                  <TrendingNowContainer>
                  <FlexContainerthree Flexdirection="row-reverse">

                    <div>
                    <GirlImage  src={photo3} />
                        </div>
        
                    <FlexTextbutton>
                          <BigTexthome  Stylewidth="30vw" >A place where privacy comes first.</BigTexthome>
                          <Paragraph>
                          You are human. You don’t want to be controlled and tracked like a robot. 
                          Control and privacy are paramount to you. With Giga, you are building trusted relationships in privacy. 
                          Understanding and being understood, enjoying, and possibly profiting. 
            </Paragraph>
                                {/* Where Privacy comes first */}
                            
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Sign Up</ButtonOne>
                        

                        </FlexTextbutton>

                        </FlexContainerthree>
                  </TrendingNowContainer>


                  {/* Make Your Opinion Clear */}

                  <TrendingNowContainer>
                    <MindsConnect>

                    <div>
                    <GirlImage  src={photo2} />
                        </div>

                    <FlexTextbutton>
                          <BigTexthome Stylewidth="30vw" >Make your opinion as clear as possible.</BigTexthome>
                                
                                {/* Link to Sign Up*/}
                            
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Sign Up</ButtonOne>
                        

                        </FlexTextbutton>
                    
                    </MindsConnect>


                  </TrendingNowContainer>


                    <FlexContainer2 />

                     {/* Stargazing Section */}

                     <TrendingNowContainer>
                  <FlexContainerfour>

                    <div>
                    <GirlImage  src={photo4} />
                        </div>
        
                    <FlexTextbutton>
                          <BigTexthome  Stylewidth="25vw" >A place where all minds connect.</BigTexthome>
                          <Paragraph>
                          Giga uniquely features “shared intelligence” assessments, contributed by people like you. 
                          Presented separate and together, 
                          “shared intelligence” assessments are your quickest, easiest path to understanding 
                          or being understood on any subject.
            </Paragraph>
                                {/* Where Privacy comes first */}
                            
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Sign Up</ButtonOne>
                        

                        </FlexTextbutton>

                        </FlexContainerfour>
                  </TrendingNowContainer>




              </div>
      
      
    );
  }
  
  export default HomePagetwo;