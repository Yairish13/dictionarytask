import styled from '@emotion/styled'

export const WordsDiv = styled.div`
background-color: rgba(98, 120, 180,0.5);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding:10px;
border: 3px solid rgb(98, 120, 180);
;

& span:first-of-type{
    margin-bottom:15px;
    font-weight: bold;
    font-size:1.5rem;
}
`