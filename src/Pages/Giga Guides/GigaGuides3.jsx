
import styled from 'styled-components';
import { ButtonOne } from '../../Components/Buttons/Button.styles';
import { TrendingNowContainer } from '../../Components/Trending Now Section/Trendingnow.styles';
import { FlexTextbutton, TextGetstarted } from '../../Components/Get Started/Getstarted.styles';
import {Link} from 'react-router-dom';
import subjectweb from './1.png';
import { GirlImage, MindsConnect } from '../../Components/Minds Connect Section/Mindsconnect.styles';
import create from './Create.png';
import rubric from './Rubric-Photo.png';
import { BigTexthome, Paragraph } from '../Homepage2';

import {GigaGuideone, RubricImage, WebImage} from './Gigaguides1';



function GigaGuidesthree() {
    return (
      <div>

          {/* Using Giga Guide One styling */}
       <GigaGuideone>


       {/* Reusing Minds Connect - Girl Photo on home page for first section on Pro user*/}

       <TrendingNowContainer>
                    <MindsConnect>
                    <FlexTextbutton>
                          <TextGetstarted Backgroundcolor="#2ca3ff">Create A Subject</TextGetstarted>

                          <Paragraph>A subject, fits under a category. For example a subject can be Paul Pierce from the Category Boston Celtics. 
                              You can read about creating a subject below, or try creating one for yourself.    </Paragraph>
                                {/* Link to Learn More */}
                            <Link to="/learnmore">
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Create a Subject</ButtonOne>
                            </Link>

                        </FlexTextbutton>
                        <div>
                    <GirlImage  src={create} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>
                  </GigaGuideone>


                  {/* Become A pro — Connect your interests */}

                  <GigaGuideone>
      
      <WebImage src={subjectweb}/>

<div>
<BigTexthome>Create Subjects under any Category</BigTexthome>
<Paragraph>Take a moment to understand the system which connects everything throughout Giga. 
    The Category in this example is Meteorology in Oregon, while the subjects are weather forecasts in Mt. Hood, Cannon Beach, and Portland. 
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create a Subject</ButtonOne>
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
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Create Subject</ButtonOne>
                            </Link>

                        </FlexTextbutton>
                        <div>
                    <RubricImage  src={rubric} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>

</div>    
      
    );
  }
  
  export default GigaGuidesthree;