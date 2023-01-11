import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;

  @media(max-width: 800px) {
    aside {
      display: none;
    }
  }
`

export const DivContainer = styled.div`
  width: 67%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  @media(max-width: 800px) {
    width: 100%;
  }
`


export const DivPressShop = styled.div`

  display: flex;
  width: 100%;
  min-height: 10rem;
  

`


export const Text = styled.h2`

  margin-bottom: 1.8rem;

`


export const DivBoard = styled.div`

  display: flex;
  width: 100%;
  min-height: 3rem;
`

export const DivRamal = styled.div`
  width: 50rem;
  margin-top: 2rem;
  text-align: center;

  @media(max-width: 538px) { 
    display: flex;
    align-items: center;
    flex-direction: column;
    .ramal {
    width: 80%;
  }

  }

  @media(max-width: 428px) { 
    display: flex;
    align-items: center;
    flex-direction: column;
    .ramal {
    width: 70%;
  }

  }


 
`

export const DivName = styled.div`
  width: 50%;
  border-right: 1px solid black;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  gap: 1rem;

`

export const DivNumber = styled.div`
  width: 50%;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const TextPrincipal = styled.h2`

  width: 100%;
  height: 3.9rem;
  background: #337103;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

 


`
export const TextName = styled.h3`
display: flex;
align-items: center;


img {
    height: 2.5rem;
    padding-right: 5rem;
    cursor: pointer;
  }

  

`
export const TextNumber = styled.h3`


  

`



















