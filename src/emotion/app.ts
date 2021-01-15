import styled from '@emotion/styled'

export const AppContainer = styled.div`
  height: 100vh;

  /* width: 100; */
  overflow-y: hidden ;
  overflow-x: hidden ;
  background-color: rgba(200,200,200,0.25);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: upper;
  align-items: center;
  position: relative ;
  @media (max-width: 768px) {
    & > div {
      width: 330px;
      height: 330px;
    }
  }
`;
export const Header = styled.header`
/* position: absolute; */
/* top: 0 ; */
/* right: 0; */
/* left:0 ; */
position: relative;
width: 100% ;
height: 100px ;
padding: 20px 0 ;
background-color: rgb(98, 120, 180);
color: #f9f9f9 ;
display: flex;
align-items: center;
justify-content: center ;
box-shadow: 0 3px 3px 1px rgba(98,120,180,0.5);
`;

export const BigContainer =styled.div`
/* width:10px; */
width:100vw;
display: flex;
margin: 20px ;
justify-content: space-around ;
`

export const GlobalInfo = styled.div`
padding: 20px ;
display: flex ;
width: 100% ;
justify-content: space-evenly;
align-items: center;
`;
export const ChartContainer = styled.div`
width:50%;
height: 450px ;
display: flex;
flex-direction: column;
overflow-y: scroll;
padding: 10px ;
box-shadow: -3px 0 3px 1px rgba(200,200,200,0.5);
`

export const InfoContainer = styled.div`
width:40%;
height: 450px ;
display:grid;
justify-content: center; 
align-content: center ;
grid-template-columns:1fr 1fr;
grid-gap:10px;
grid-template-rows: repeat(2 , 200px);

`

export const Title = styled.h1`
  position: absolute;
  left: 10px ;
`;
export const Input = styled.input`
  font-family: "Assistant", sans-serif;
  text-align: center;
  border: 0;
  border-bottom: 1px solid #333333;
  font-size: 1.2em;
  background-color: #ffffff00;
  padding-bottom: 5px;
  transition: 0.1s border ease;
  &:focus {
    border-bottom: 2px solid #333333;
    outline: 0;
  }
  ::placeholder { 
  color: black;
  opacity: 1; 
}
`;