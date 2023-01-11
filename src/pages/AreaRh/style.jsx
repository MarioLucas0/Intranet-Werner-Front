import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;

  
  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`
export const MenuRight = styled.div`
  padding-left: 3rem;
`
export const DivContainer = styled.div`
  width: 100%;
  padding-inline: 10rem;

   @media(max-width: 1600px) {
    padding-inline: 7rem;
  }
  @media(max-width: 900px) {

    padding-inline: 1rem;

    }
    @media(max-width: 414px) {

    padding-inline: 0;

    }

`
export const TextPrincipal = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #337103;
  margin-bottom: 3rem;

`
export const DivMenuRight = styled.div`
    width: 100%;
  li {
    list-style: none;
  }

`

export const HeaderInputs = styled.div`

  width: 100%;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 19px;
  color: #000000;
  height: 32px;
  background: #70CC40;
  justify-content: flex-start !important;
  display: flex !important;

 p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
 }
 .textAutor {
  padding-left: 11rem;
 }

 @media(max-width: 1600px) {
    .textAutor {
      padding-right: 12rem;
    }
 }
 @media(max-width: 1500px) {
    .textAutor {
      padding-right: 10rem;
    }
 }
 @media(max-width: 1400px) {
    .textAutor {
      padding-right: 8rem;
    }
 }
 @media(max-width: 1300px) {
    .textAutor {
      padding-right: 6rem;
    }

  }
  @media(max-width: 500px) {
      width: 100%;
      display: flex;

      h2 {
        width: auto;
        padding: 0;
      }
      .textAutor {
  padding-right: 2rem;
 }
  }
  

`

export const DivInputCheck = styled.div`
    width: 12%;

    @media(max-width: 600px) {
      width: auto;
  }

`
export const TextData = styled.p`


  height: 100%;
  width: 30.3%;
  justify-content: center;

  @media(max-width: 600px) {
  padding: 0;
  margin: 0;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
/*   padding-left: 3.4rem; */
}
`
export const TextTitle = styled.p`
  height: 100%;
  padding-inline: 17rem;
  justify-content: center;
  padding-right: 23rem;

  @media(max-width: 900px) {
    padding-right: 24rem;

  }
  @media(max-width: 800px) {
    padding-right: 19rem;

  }  
  @media(max-width: 700px) {
    padding-right: 12rem;

  }
  @media(max-width: 600px) {
  padding: 0;
  margin: 0;
  padding-inline: 7rem;

  }
  @media(max-width: 500px) {
   padding: 0;
   margin: 0;
   padding-inline: 7rem;

}


  

    
`

export const TextCheck = styled.p`
  padding-right: 0.8rem;
  height: 100%;
  width: 12%;
  justify-content: center;
  padding-left: 1rem;
  
  @media(max-width: 600px) {
   margin: 0;
   width: auto;
   padding-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}


`
export const Li = styled.li`

   width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 19px;
  color: #000000;
  height: 32px;
  border: 1px solid gray;
  background-color: ${props => props.index % 2 === 0 ?  "white" : "#70CC40"};
  


`
export const Ul = styled.ul`

  padding: 0;
`
export const DivInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  
  input {
    margin-inline: 5.7rem;
  }
  @media(max-width: 600px) {
    input {
    margin-inline: 2.7rem;
    }
  }

`
export const LabelData = styled.label`
  height: 100%;
  border-inline: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30.3%;

  @media(max-width: 414px) {
    width: 48%;
    font-size: 1rem;
  
}

`
export const LabelTitle  = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 3px solid black;
  padding-inline: 3rem;
  width: 39.3rem;
  justify-content: center;
  @media(max-width: 900px) {

    padding: 0;
  
  }
  @media(max-width: 600px) {

    width: 52%;
}

`
export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

`
export const LabelAutor = styled.label`
  width: 23%;
  display: flex;
  justify-content: center;

  @media(max-width: 600px) {
    width: 25%;
  }

 
`
export const ButtonEnviar = styled.button`
 width: 7.7rem;
        height: 2.4rem;
        text-align: center;
        background-color: #FF2A2A;
        border-radius: 10rem;
        font-weight: 700;
        margin-bottom: 3rem;

        &:hover{
            cursor: pointer;
            background-color: #fd7070;
        }

        
      &:focus{
            outline: 0.4rem solid #000000;
      }
`












