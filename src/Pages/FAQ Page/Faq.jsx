import React from 'react'
import styled from 'styled-components';

const FullFaq = styled.div`
display: flex;
width: 100vw;
height: auto;
`

const SideNav = styled.div`

width: 20vw;
height: 100vh;
background-color: #F4F4F4 ;
`
const Listitems = styled.ul`
text-decoration: none;
color: #707070;
list-style-type: none;
font-weight: 800;
width:200vw;
padding-left: 4vw;
padding-top: 6vw;
`

const IndividualItem = styled.li`
padding: 1vw;
&:hover{
opacity: 0.8;
cursor: pointer;
}
`

class Faq extends React.Component {

    
    render() {
      return (
        <FullFaq>

        <SideNav>
            <Listitems>
                <IndividualItem>Getting Started</IndividualItem>
                <IndividualItem>Create a Category</IndividualItem>
                <IndividualItem>Create a Subject</IndividualItem>
                <IndividualItem>Create an Assessment</IndividualItem>
                <IndividualItem>Filter Points of View</IndividualItem>
                <IndividualItem>Assessment Topics</IndividualItem>


                </Listitems>


        </SideNav>
       

       </FullFaq>
        
      );
    }
  }
  export default Faq;

