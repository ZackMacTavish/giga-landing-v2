
import styled from 'styled-components';
import { ButtonOne } from '../../Components/Buttons/Button.styles';
import web1 from '../Giga Guides/Web-Group.png';
import { BigTexthome, Paragraph } from '../Homepage2';

const GigaGuideone = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
`

const WebImage = styled.img`

height: 80vh;

padding-left: 3vw;



`


function GigaGuidesone() {
    return (
       <GigaGuideone>
      
      <WebImage src={web1 }/>


      

<div>
<BigTexthome>Create Assessment on a Subject or Key Factor in a Category </BigTexthome>
<Paragraph>The assessment part of Giga allows you to write your perspective on a Subject or 
  Key Factor. Through Giga's rubric we give you a guided way to write an analysis.
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create Assessment</ButtonOne>
</div>

</GigaGuideone>
      
      
    );
  }
  
  export default GigaGuidesone;