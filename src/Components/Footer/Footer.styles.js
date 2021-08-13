import styled from 'styled-components';

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    height: 7vh;
    width: 100vw;
    background: linear-gradient(#fff 0%, #f4f4f4 100%);
filter: drop-shadow(-15px -15px 15px rgba(0, 0, 0, 0.05));

`

export const FooterFlextext = styled.div`
display: flex;
padding-right: 2vw;

`

export const FooterText = styled.h5`
    padding: 0 2vw;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }

`