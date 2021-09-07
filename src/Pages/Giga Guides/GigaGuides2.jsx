
import styled from 'styled-components';
import { ButtonOne } from '../../Components/Buttons/Button.styles';
import { TrendingNowContainer } from '../../Components/Trending Now Section/Trendingnow.styles';
import { FlexTextbutton, TextGetstarted } from '../../Components/Get Started/Getstarted.styles';
import {Link} from 'react-router-dom';
import interests from './Interests.png';
import { GirlImage, MindsConnect } from '../../Components/Minds Connect Section/Mindsconnect.styles';
import settone from './SetTone.png';
import prouser from './ProUser.png';
import showme from './ShowMe.png';
import { BigTexthome, Paragraph } from '../Homepage2';
import { GigaGuideone, WebImage } from './Gigaguides1';


function GigaGuidestwo() {
    return (
      <div>

          {/* Using Giga Guide One styling */}
       <GigaGuideone>


       {/* Reusing Minds Connect - Girl Photo on home page for first section on Pro user*/}

       <TrendingNowContainer>
                    <MindsConnect>
                    <FlexTextbutton>
                          <TextGetstarted Backgroundcolor="#2ca3ff">Become A Pro User</TextGetstarted>

                          <Paragraph>Once you upgrade to a pro user you gain the capabilities to create categories, key factors, and subjects.</Paragraph>
                                {/* Link to Learn More */}
                            <Link to="/learnmore">
                                    <ButtonOne Backgroundcolor="rgba(0,0,0, 0.3)">Become Pro</ButtonOne>
                            </Link>

                        </FlexTextbutton>
                        <div>
                    <GirlImage  src={prouser} />
                        </div>

                    </MindsConnect>


                  </TrendingNowContainer>
                  </GigaGuideone>


                  {/* Become A pro — Connect your interests */}

                  <GigaGuideone>
      
      <WebImage src={interests }/>

<div>
<BigTexthome>Connect with your interests</BigTexthome>
<Paragraph>The assessment part of Giga allows you to write your perspective on a Subject or 
  Key Factor. Through Giga's rubric we give you a guided way to write an analysis.
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Become Pro</ButtonOne>
</div>



</GigaGuideone>

             {/* Become A pro — Set the Tone*/}

             <GigaGuideone>
      
      <WebImage src={settone}/>

<div>
<BigTexthome>You Set The Tone</BigTexthome>
<Paragraph>Once you become a pro user, you are able to create categories, and the accompanying key factors. 
    In this example we have created the category of Art, and set the key factors to Concept, Materials, and Aesthetics.
</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Become Pro</ButtonOne>
</div>



</GigaGuideone>


             {/* Become A pro — */}

             <GigaGuideone>
      
      <WebImage src={showme}/>

<div>
<BigTexthome>Show Me</BigTexthome>
<Paragraph>
Here is an example where others in the Giga community created 
subjects under the Category of Art, like Salvador Dali, Roberto Matta, and Paul Klee. 

</Paragraph>
<ButtonOne Backgroundcolor="rgba(0,0,0, 0.5)">Become Pro</ButtonOne>
</div>



</GigaGuideone>

</div>    
      
    );
  }
  
  export default GigaGuidestwo;