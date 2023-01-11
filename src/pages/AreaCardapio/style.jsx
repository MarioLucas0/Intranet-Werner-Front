import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;


  
  @media(max-width: 900px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

export const DivContainerInfo = styled.div`

  height: 27rem;
  width: 83%;
  background: #D9D9D9;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
/*   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);  */
  margin: 0 auto;

    :hover{
            outline: 0.4rem solid #70CC40;
        }
        :focus{
            outline: 0.4rem solid #70CC40;
        }

   @media(max-width: 800px) { 
    width: 90%;
   }

`

export const DivImg = styled.div`
width: 14.9rem;
border: 1px solid #E1E1E1;
display: flex;
align-items: center;
justify-content: center;
img {
  width: 80%;
}
@media(max-width: 850px ) {
  width: 100%;
  border: none;
  border-bottom: 1px solid #E1E1E1;
  overflow: hidden;
  img{
    max-width: 14rem;
  }
}
`

export const Card = styled.div`
  width: 100% ;
  height: 27rem;
  display: flex;
  flex-direction: column;
  
  h1 {
    font-weight: 700;
    font-size: 1.6rem;
    color: #000000;
    margin-bottom: 1rem;
    padding-left: 4rem;
  }





`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 3rem;
  padding-left: 2rem;
  margin-block: 5rem;

@media(max-width: 1200px) { 
  grid-template-columns: repeat(2,1fr);
}
@media(max-width: 1050px) { 
  grid-template-columns: repeat(1,1fr);
  width: 65%;
}
  @media(max-width: 800px) {
    width: 100%;
  }
`







export const DivInfo = styled.div`
  width: 100%;
  padding: 1.4rem 1.9rem 3.2rem 2.1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
 
  h3 {
      color: black;
      font-weight: 700;
      font-size: 1.5rem;
    }
    span {
    color: gray;
    font-weight: 600;
  }
`




export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  a{
    width: 10rem;
      :hover{
            outline: 0.4rem solid #70CC40;
            border-radius: 10px;

        }
        :focus{
            outline: 0.4rem solid #70CC40;
            border-radius: 10px;
        }
  }
  

`

export const ButtonEditar = styled.button`
width: 10rem;
height: 3.8rem;
border: 1px solid #E1E1E1;
border-radius: 10px;
font-weight: 700;
background-color: rgba(242, 242, 242, 0.3);
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
cursor: pointer;

@media(max-width: 600px) {
    width: 100%;
}
`






