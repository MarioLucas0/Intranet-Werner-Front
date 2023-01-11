import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    min-height: calc(100vh);
    display: flex;
    justify-content: space-between;
    padding-top: 10rem;

    @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    aside {
        display: none;
    }
    }
`

export const DivContainer = styled.div`
    width: 70%;
    margin-top: 4rem;

    
    @media(max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    }
`
export const TextPrincipal = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    font-family: 'Archivo Black';
`


export const TextSecundario = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 2rem;
    line-height: 2.7rem;
    text-align: center;
    color: #000000;
    font-weight: 700;

    p{
        width: 15rem;
    }
    
    .buttonArrows{
      border: none;
      background-color: transparent;
      padding-bottom: 1rem;

      :focus{
           /*  outline: 0.4rem solid #70CC40; */

        }
    }
    .setasStyle{
      font-size: 2rem;
      
      :hover{
        color: #4a4a4a;
        cursor: pointer;
    }
    &:focus{
        border: 100px solid #70CC40; 
        
    }

    }

  

`;

export const DivAniversariantes = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    gap: 0.5rem;
    align-items: center;

    @media(max-width: 1000px) {
    width: 100%;
    }
`;

export const Table = styled.table`
margin-top: 3rem;
font-size: 1.6rem;
width: 87%;
text-align: center;
font-weight: 700;
thead{
    background-color: #70CC40;
    text-align: center;
    height: 2.6rem;

    :focus{
        outline: 0.3rem solid black;
    }
 
}



.append{
    /* background-color: #D9D9D9; */
    align-items: center;
    justify-content: center;
    align-content: center;
    :focus{
        outline: 0.4rem solid #000000;
    }


    .bordaStyle{
        border-inline: 0.2rem solid #000000 ;

}

    .checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.4rem;
    }

    .checkboxImg{
        width: 2rem;
        height: 1.5rem;

        :hover{
            color: #c7c2c2;
        }
    }
}

button{
    width: 1.9rem;
    height: 1.6rem;
    border: 1.6px solid black;

    :hover{
        cursor: pointer;
        background-color: white;
    }

    :focus{
        outline: 0.3rem solid black;
    }
  
    .bx-check{
        text-align: center;
}

}

@media(max-width: 450px) {
    width: 100%;

    th {
        font-size: 1.4rem;
    }

    td {
        font-size: 1.3rem;
    }
}

`;