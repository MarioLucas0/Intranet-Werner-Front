import styled from 'styled-components'


export const Divbirthday = styled.div`
  text-align: center;
  img {
    margin: 0 auto;
  }



  @media(max-width: 600px) {
    width: 90%;

    img {
    margin: 0 auto;
    padding-left: 2rem;
    width: 80%;
  }
  }
`

export const TextData = styled.h2`
  margin-top: 5rem;
  font-size: 2rem;

  :focus{
    outline: 0.4rem solid #70CC40;
  }
  @media(max-width: 550px) {
    font-size: 1.3rem;

  }
  @media(max-width: 450px) {
    font-size: 1.5rem;
    width: 24rem;
 

  }

`

export const TextNameEmployee = styled.p`
  width: 14.3rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;
  color: #000000;
  margin: 1.5rem auto;

  :focus{
    outline: 0.4rem solid #70CC40;
  }

  @media(max-width: 650px) {
    margin: 0;
    margin-block: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: end;
  }

`

export const TextBirthday = styled.p`

  color: #337103;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-bottom: 1.9rem;

  :focus{
    outline: 0.4rem solid #70CC40;
  }
  @media(max-width: 450px) {
    font-size: 1rem;
    }


`