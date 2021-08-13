import styled from 'styled-components';


export const TrendingNowContainer = styled.div`
display: flex;
flex-direction: column;
height: 70vh;
width: 100vw;
padding-left: 8vw;
padding-top: 2vh;
`

export const TrendingNowtitle = styled.h1`
color: ${(props) => props.Titlecolor};
font-size: 2.4rem;
padding-left: 3vw;
padding-bottom: 1vh;
padding-top: 1vh;
margin: 0;
`

export const TrendingPhotosflex= styled.div`
display: flex;
`

export const TrendingPhotos = styled.img`
    width: 17vw;
    padding: 2vw;
    -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }


`

export const TrendingNowtopics =styled.h3`
padding-left: 2vw;
color: #2ca3ff;
padding-top: 0;
margin: 0;
-webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

  &:hover {
      opacity: 0.8;
      cursor: pointer;
  }


`