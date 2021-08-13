
import styled from 'styled-components';
import { ButtonOne } from '../Components/Buttons/Button.styles';
import webphoto1 from '../Components/Web Photo Container/Web-photo1.png';
import { FlexContainer2, WebPhoto } from '../Components/Web Photo Container/webcontainer.styles';

export const BigTexthome = styled.h2`
font-size: 3rem;
padding-left: 1.4vw;
padding-bottom: 0;
color: #2ca3ff;
width: 20vw;
`
export const Paragraph =styled.p`
color: #7C7C7C;
font-size: 1rem;
padding-left: 1.6vw;
margin-top: -2vh;
font-weight: 600;
`

function HomePagetwo() {
    return (
  <FlexContainer2>
        <WebPhoto src={webphoto1} />
        <div>
        <BigTexthome>Let's skip the small talk.</BigTexthome>
        <Paragraph>
            Giga is a platform to discuss ideas. 
            Implementing an easy to follow structured approach. 
            Enabling faster, quicker, better understanding of points of view. 
            Leading to a community of members who respect individual opinion.
            </Paragraph>
        <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Get Started</ButtonOne>
        </div>
        </FlexContainer2>
      
    );
  }
  
  export default HomePagetwo;