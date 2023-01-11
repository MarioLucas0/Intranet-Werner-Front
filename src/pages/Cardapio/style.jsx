import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;

  @media(max-width: 1000px) {
    aside {
      display: none;
    }
  }
`

export const DivContainer = styled.div`
  width: 67%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    height: 6.1rem;
    width: 20.6rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  h1 {
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #337103;
    margin-top: 3rem;
  }

  @media(max-width: 1000px) {
   width: 1000%;
  }
`
export const DivCardapio= styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
 
`
export const InfoCardapio = styled.div`

  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 3rem;

  span {
    color: gray;
    font-weight: 500;
  }
  h3 {
    color: black;
    font-weight: 700;
    font-size: 1.5rem;
  }

`
export const TextBuffet = styled.h2`

  color: black;
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 0.2rem;


`

export const TextData = styled.h2`

  font-weight: 700;
  font-size: 1.7rem;
  color: #337103;

  :focus{
        outline: 0.3rem solid #7B9B46;

  }

`
export const Warning = styled.p`
  width: 90%;
  font-weight: 700;
  font-size: 1.7rem;
  color: #ff00008d;
  margin: 0 auto;
  margin-bottom: 3rem;

  span {
    font-weight: 700;
    color: red;
  }

`
























