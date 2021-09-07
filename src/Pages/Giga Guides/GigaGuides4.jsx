
import styled from 'styled-components';
import { ButtonOne } from '../../Components/Buttons/Button.styles';
import { TrendingNowContainer } from '../../Components/Trending Now Section/Trendingnow.styles';
import { FlexTextbutton, TextGetstarted } from '../../Components/Get Started/Getstarted.styles';
import {Link} from 'react-router-dom';
import categoryceltics from './Category-Celtics.png';
import celticsexample from './Celtics-Example.png';
import { GirlImage, MindsConnect } from '../../Components/Minds Connect Section/Mindsconnect.styles';
import whiteboard from './Whiteboard.jpg';
import { BigTexthome, Paragraph } from '../Homepage2';

import {GigaGuideone, RubricImage, WebImage} from './Gigaguides1';



function GigaGuidesfour() {
    return (
      <div>

          {/* Using Giga Guide One styling */}
       <GigaGuideone>


       {/* Reusing Minds Connect - Girl Photo on home page for first section on Category Section*/}

       <TrendingNowContainer>
                    <MindsConnect>
                    <FlexTextbutton>
                          <TextGetstarted Backgroundcolor="#2ca3ff">Create A Category</TextGetstarted>

                          <Paragraph>A subject, fits under a category. For example a subject can be Paul Pierce from the Category Boston Celtics. 
                              You can read about creating a subject below, or try creating one for yourself.    </Paragraph>
                                {/* Link to Learn More */}
                            <Link to="/learnmore">
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Create a Category</ButtonOne>
                            </Link>

                        </FlexTextbutton>
                        <div>
                    <GirlImage  src={whiteboard} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>
                  </GigaGuideone>


                  {/* Create Categories With Key Factors*/}

                  <GigaGuideone>
      
      <WebImage src={categoryceltics}/>

<div>
<BigTexthome>Create Categories with Key Factors</BigTexthome>
<Paragraph>Take a moment to understand the system which connects everything throughout Giga. 
    The Category in this example is Meteorology in Oregon, while the subjects are weather forecasts in Mt. Hood, Cannon Beach, and Portland. 
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create a Category</ButtonOne>
</div>



</GigaGuideone>

             {/* Assessment Section */}

             <GigaGuideone>
      
      <WebImage src={celticsexample}/>

<div>
<BigTexthome>Create Categories with Key Factors</BigTexthome>
<Paragraph>Take a moment to understand the system which connects everything throughout Giga. 
    The Category in this example is Meteorology in Oregon, while the subjects are weather forecasts in Mt. Hood, Cannon Beach, and Portland. 
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Create a Category</ButtonOne>
</div>



</GigaGuideone>
 
</div>    
      
    );
  }
  
  export default GigaGuidesfour;