import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonOne } from '../Components/Buttons/Button.styles';
import chaticon from '../Photos/chaticon.svg';

const MessageContainer = styled.div`
display: grid;
    grid-template-columns: auto  20vw 20vw 20vw auto;
    grid-template-rows: 25vh 50px 50px 60px 60px 60px 60px 60px ;
    width: 100vw;
    height: 100vh;
    background-color: #2CA3FF;
    padding-top: 8vh;

`
const FeedbackHeader = styled.h1`
display: grid;
        grid-column-start: 3;
        grid-row-start: 2;
        margin: 0 auto;
        padding: 0;
        color: white;

`
    const FeedbackText = styled.h2`
     display: grid;
        grid-column-start: 2;
        grid-column-end: 5;
        width: 100%;
        justify-content: center;
        grid-row-start: 3;
        color: white;
    `

    const FeedbackInput = styled.input`
     display: grid;
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 7;
        margin-top: 2vh;
        width: 45vw;
        justify-self: center;
        border-radius: 20px;
        border: none;
        padding-left: 2vw;
        padding-bottom: 2vh;
    `

    const ButtonPositioning = styled.div`
    display: grid;
        align-items: center;
        justify-self: center;
        grid-row-start: 8;
        grid-column-start: 3;

    
    `
    const ChatIcon = styled.img`
    display: grid;
    grid-column-start: 2;
    grid-column-end: 4;
        grid-row-start: 2;
        justify-self: center;
    
    `
export default function MessageUs() {
    return (
     <MessageContainer>

         <FeedbackHeader>Get in touch with us</FeedbackHeader>

         <ChatIcon src={chaticon} />

         <FeedbackText>Please leave us any feedback on Giga, or just drop us a friendly message. We appreciate it.</FeedbackText>

         <FeedbackInput type="text" />

         <ButtonPositioning>
            <ButtonOne Backgroundcolor="rgba(0,0,0, 0.8)">Send Message</ButtonOne>


         </ButtonPositioning>


    </MessageContainer>
    )
}
