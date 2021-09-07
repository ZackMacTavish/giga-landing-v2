
import styled from 'styled-components';
import { ButtonOne } from '../../Components/Buttons/Button.styles';
import web1 from '../Giga Guides/1.png';
import web2 from '../Giga Guides/Assessment-Section.png';
import web3 from '../Giga Guides/Toggle-Topics.png';
import { BigTexthome, Paragraph } from '../Homepage2';
import { TrendingNowContainer } from '../../Components/Trending Now Section/Trendingnow.styles';
import { FlexTextbutton, TextGetstarted } from '../../Components/Get Started/Getstarted.styles';
import {Link} from 'react-router-dom';
import rubric from '../Giga Guides/Rubric-Photo.png';
import { MindsConnect } from '../../Components/Minds Connect Section/Mindsconnect.styles';

export const GigaGuideone = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
`

export const WebImage = styled.img`
height: 80vh;
padding-left: 3vw;
`

export const WebImagetwo = styled.img`
height: 60vh;
padding-left: 7vw;
padding-right: 11vw;
`
export const RubricImage = styled.img`
margin-left: 4vw;
height: 50vh;


`


function GigaGuidesone() {
    return (
      <div>

          {/* Web Photo Section */}
       <GigaGuideone>
      
      <WebImage src={web1 }/>

<div>
<BigTexthome Stylewidth="30vw;">Create Assessment on a Subject or Key Factor in a Category </BigTexthome>
<Paragraph>The assessment part of Giga allows you to write your perspective on a Subject or 
  Key Factor. Through Giga's rubric we give you a guided way to write an analysis.
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create Assessment</ButtonOne>
</div>

</GigaGuideone>

 {/* Assessment Section */}
  <GigaGuideone>
    <WebImagetwo src={web2 }/>
    <div>
    <BigTexthome>The Assessment</BigTexthome>
    <Paragraph>The assessment of each topic consists of a rating, narrative, images, and attached files.
      This is an example of filling out one of the assessment topics. Allowing you to write a robust reponse.
    </Paragraph>
    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create Assessment</ButtonOne>
    </div>
</GigaGuideone>

 {/* Assessment Section */}
 <TrendingNowContainer>
                    <MindsConnect>
                    <FlexTextbutton>
                          <BigTexthome Backgroundcolor="#2ca3ff">Our Rubric.</BigTexthome>
                          <Paragraph>The Giga system’s rubric to analyze a subject includes the Future, Context, Importance, Wisdom, Knowledge, Perspective, Current, and Outcome. 
                            See our FAQ below to see specific examples!   </Paragraph>
                                {/* Link to Learn More */}
                            <Link to="/learnmore">
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Create Assessment</ButtonOne>
                            </Link>

                        </FlexTextbutton>
                        <div>
                    <RubricImage  src={rubric} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>

 {/* Toggle Topics */}
 <GigaGuideone>
    <WebImagetwo src={web3 }/>
    <div>
    <BigTexthome>The Assessment Topics</BigTexthome>
    <Paragraph>When analyzing a subject, the Giga system is flexible to toggle rubric topics.
      Start your basic membership now, and share your viewpoints with the world.
    </Paragraph>
    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create Assessment</ButtonOne>
    </div>
</GigaGuideone>

</div>    
      
    );
  }
  
  export default GigaGuidesone;