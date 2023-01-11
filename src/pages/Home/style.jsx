import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: initial;
  }

`
export const DivContainer = styled.div`
  width: 67%;
  display: flex; 
  flex-direction: column;

  @media(max-width: 600px) {
  width: 100%;
  }

`
export const DivLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;

    @media(max-width: 2500px) { 
      left: 65rem;
    }
    @media(max-width: 1600px) { 
      left: 65rem;
    }
    @media(max-width: 1300px) { 
      left: 46rem;
    }
    @media(max-width: 1200px) { 
    top: 31rem;
    left: 54rem;
    }
   @media(max-width: 820px) { 
    top: 31rem;
    left: 37rem;
   }

  @media(max-width: 600px) { 
    left: 11rem;
    top: 59rem;
  }

  @media(max-width: 414px) { 
      left: 2rem;
      top: 58rem;

  }

`


export const DivInputs = styled.div`
  width: 65rem;
  height: 5.5rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-left: 2rem;
  margin-bottom: 7rem;
  margin-top: 3rem;
  
  @media (max-width: 1030px) {
    
    width: 80%;
  
}

    
`


export const ButtonLimpar = styled.button`
    width: 20rem;
    height: 3.5rem;
    border-radius: 10px;
    margin-left: 1.7rem;
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    cursor: pointer;
    margin-block: 1rem;
    font-weight: bold;

    :hover{
      background-color: #dcd2d2;
    }
    
    :focus{
      :focus{
            outline: 0.4rem solid #70CC40;
        }
  }
  
    @media (max-width: 1030px) {
      display: none;
  }

    
`


export const DivInput = styled.div`
  width: 39rem;
  border-bottom: 1px solid #E1E1E1;
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;

  
  input[type="text"]
   {
    
    width: 29rem;
    height: 2.8rem;
    border: none;
    outline: 0;
    
    :focus{
    border-bottom: 0.4rem solid #70CC40;  
  }

  }
  @media (max-width: 1030px) {
    
   
      width: 80%;
  
  
}
    
`

export const TextPrincipal = styled.h1`
 
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #337103;
  margin: 0 auto;
  margin-top: 1.8rem;
  margin-bottom: 1rem;

  :focus{
    outline: 0.4rem solid black;
  }
  @media(max-width: 750px) { 
    font-size: 1.6rem;
  }
  @media(max-width: 510px) { 
    font-size: 1.2rem;
  }
  @media(max-width: 420px) { 
    font-size: 1rem;
  }
`
export const DivContext = styled.div`

  padding-inline: 2rem;
 


  a {
    font-weight: 700;
    font-size: 1.6rem;
    color: #337103;
    
    :focus{
            outline: 0.4rem solid #70CC40;
        }

  }
`

export const Post = styled.div`

  margin-bottom: 2.6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #80808040;

  @media(max-width: 650px) {
    a {
      font-size: 1.3rem;
    }
      
    }

`

export const TextData = styled.h2`
  width: 100%;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #337103;
  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
    cursor: pointer;
  }
`




export const DivEditar = styled.div`

`



export const PostTitle = styled.h2`

  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  margin-top: 0.6rem;

  @media(max-width: 530px) {
      font-size: 1.7rem;
    }
    @media(max-width: 450px) {
      font-size: 1.3rem;
    }

`

export const DivContentPost = styled.div`

  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  margin-top: 0.6rem;
  display: flex;  
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;


  img {
    margin: 0;
    max-height: 40.7rem;
    max-width: 61rem;
    object-fit: contain;
    //box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    
  }

`

export const TextDescricao = styled.p`

  width: 100%;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.7rem;
  color: #000000;
  margin-block: 2rem;
  flex-wrap: wrap;
  
  display: flex;

`













