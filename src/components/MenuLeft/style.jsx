import styled from 'styled-components'

export const MenuLeftContainer = styled.aside`
  width: 25rem;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin-block: 5rem;
  border-right: 1px solid #7B9B46;

  .imgFelizAniversario{
      :focus{
        outline: 0.4rem solid #70CC40;
  }
    }

  @media(max-width: 600px) {
    
    margin-bottom: 0;
    width: 100%;
    margin-block: 1rem;
    overflow-y: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
                display: none;
            }

  }

  
`

export const DivFIxed = styled.div`

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -6rem;

  a {
    color: #337103;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-bottom: 1.9rem;
  
  :hover{
    color: #7a9b466f;
  }

  :focus{
    outline: 0.4rem solid #70CC40;
  }
  }

  .aniversario {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 600px) {
    width: 100rem;
    height: 100%;
    margin-bottom: 0;
    position: relative;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #70CC40;;

    .aniversario {
      display: flex;
      flex-direction: column;
      margin-left: 19rem;

      a {
        padding-top: 1rem;
        padding-left: 4rem;
      }
    }
  }
  @media(max-width: 520px) {
    .aniversario {
      margin-left: 27rem;
    }
  }
/*   @media(max-width: 450px) {
      width: 33%;


      a {
        font-size: 1rem;
      }
    } */

  
`



export const Divbirthday = styled.div`
  text-align: center;
  img {
    margin: 0 auto;

    
  }

  @media(max-width: 800px) {
    img {
      width: 70%;
    }

  }
`

export const DivMenuDaily = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardapioLink{
    :hover{
      color: blue;
    }

  }
  @media(max-width: 600px) { 
    display: block;
    padding: 0;
  }
`

export const TextData = styled.h2`
  margin-top: 5rem;

  :focus{
    outline: 0.4rem solid #70CC40;
  }
  @media(max-width: 550px) {
    font-size: 1.3rem;

  }
  @media(max-width: 450px) {
    font-size: 1rem;

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
    font-size: 1.5rem; 
  }

`

export const DivPrediction = styled.div`

  color: #337103;
  margin-bottom: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);

    img{
      :focus{
        outline: 0.4rem solid #70CC40;
  }
    }

    @media(max-width: 650px) {
      box-shadow: none;
      display: flex;
      align-items: center;
      margin-top: 5rem;
      border-inline: 1px solid #70CC40;

      img {
        max-width: 100%;
        margin-inline: 3rem;
      }
    }
    

`

export const DivMenu = styled.div`

  color: #337103;
  text-align: center;


  a{
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #337103;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    display: flex;
    align-items: baseline;
    text-align: none;
    text-align: inherit;
  }
`
export const TextPrincipal = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  margin-bottom: 3.3rem;

  :focus{
    outline: 0.4rem solid #70CC40;
  }
  
  img {
    margin-left: 0.5rem;

  
  }

  @media(max-width: 650px) {
    font-size: 1.6rem;
    justify-content: center;
    img {
      display: none;
    }
  }
  @media(max-width: 450px) {
    font-size: 1.3rem;
    justify-content: center;
  }


`

export const TextBuffetMenuDaily = styled.h2`
  display: flex;
  margin: 0 auto;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #000000;
  margin-bottom: 1.3rem;

  @media(max-width: 650px) {
    font-size: 1.4rem;
  }

  @media(max-width: 450px) {
    margin-right: 3rem;
  }

`
export const TextMainCourseTitle = styled.h2`
  display: flex;
  margin: 0 auto;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #000000;
  @media(max-width: 650px) {
    font-size: 1.4rem;
  }
  @media(max-width: 450px) {
    margin-right: 4rem;
  }

`
export const TextMainCourse = styled.li`

  font-weight: 700;
  font-size: 1.2rem;
  color: #000000;
  width: 14.8rem;
  margin-bottom: 0.5rem;
  
  
`
export const TextOption = styled.li`

  font-weight: 700;
  font-size: 1.2rem;
  color: #000000;
  width: 14.8rem;
  margin-bottom: 0.7rem;

  
`

export const TextOptionTitle = styled.h2`
  display: flex;
  margin: 0 auto;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #000000;
  @media(max-width: 650px) {
    font-size: 1.4rem;
  }

  @media(max-width: 450px) {
    margin-right: 6rem;
  }

`

export const TextGarrisonTitle = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #000000;
  margin-bottom: 0;
  @media(max-width: 650px) {
    font-size: 1.4rem;
  }

`
export const TextGarrison = styled.li`

  font-weight: 700;
  font-size: 1.2rem;
  color: #000000;
  width: 8.8rem;
  margin-bottom: 0.7rem;
`



















