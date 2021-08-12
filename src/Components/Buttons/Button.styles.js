
import styled from 'styled-components';
import img from '../Buttons/Button-blur.png'


export const ButtonOne = styled.button`
    width: 12vw;
    height: 5vh;
    backdrop-filter: blur(5px);
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    background-color: rgba(0,0,0, 0.8);
    box-shadow: 0px 4px 15px rgba(0,0,0, 0.2);
    margin: 1vw;
`