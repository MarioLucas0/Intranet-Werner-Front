import styled from 'styled-components';

export const DivLogo = styled.div`
  img{
    height: 9rem;
    :focus{
      outline: solid 0.3rem black;
    }
  }
`

export const Ul = styled.ul`


    width: 100%;
    height: 100%;
    gap: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 27rem;


li {  
    width: 100%;
    text-align: center;
    list-style: none;
    cursor: pointer;
    
    a{
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
      color: white;
      font-family: 'Archivo Black', sans-serif;
     
    }
  

  }

  @media(max-height: 750px) {
    margin-top: 12rem;
  }
  @media(max-width: 330px) {
    margin-top: 17rem;
    gap: 6rem;

    li {   
        a{
        font-size: 1.5rem;
        }
      }
  }
`

export const MainContainer = styled.div`
  height: calc(119vh - 12rem);
  width: 100%;
  background-color: #7B9B46;
  align-items: center;
    justify-content: center;
    display: flex;

`
export const Option = styled.li`

.stringLink{
  :focus{

    outline: 0.4rem solid #70CC40;
  }
  a {

  }

}

`
export const DivContainerMenuAccount = styled.div`
/* 
 display: ${props => props.authenticated === true ?  "block" : "none"}  */

`
export const DivMenuTrigger  = styled.div`

 

 img {
  position: absolute;
  top: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
 }

 @media(max-width: 1210px)
 {
  img {
    margin-right: 4rem;
    height: 38px;
  }
 }
 
`
export const DivDropDown  = styled.div`

  position: absolute;
  top: 100px;
  right: 20px;
  padding: 10px 20px;
  width: 25rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);
  border-radius: 10px;

  opacity: ${props => props.show === true ?  1 : 0};
  visibility: ${props => props.show === true ?  "visible" : "hidden"} ;
  transform: ${props => props.show === true ?  "translateY(0)" : "translateY(-20px)"}  ;
  transition: var(--speed) ease;

  h3{
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-weight: 500;
  font-size: 18px;
  color: black;
  line-height: 2rem;
}

 span{
  font-size: 14px;
  color: gray;
  font-weight: 400;
}

  &::before{
  content: '';
  position: absolute;
  top: -5px;
  right: 20px;
  height: 20px;
  width: 20px;
  background: var(--secondary-bg);
  transform: rotate(45deg);
}

 li {
  padding: 10px  0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  &:hover {
    color: green;
    cursor: pointer;
  }

 }


 .dropdownItem{
  display: flex;
  margin: 10px auto;
}

.dropdownItem img{
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: var(--speed);
}

.dropdownItem a{
  margin-left: 10px;
  transition: var(--speed);
  font-size: 1.3rem;
  color: black;
  font-weight: 500;
 
}

@media(max-width: 330px) {
  height: 78vh;
  overflow: auto;
}




`
export const DropdownItem  = styled.li`
  display: flex;
  margin: 10px auto;

  img {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
  }
  :hover {
    background-color: #928d8d11;
    svg {
        fill:#70CC40;
      }
      a {
        color: #70CC40;
      }
    }
  a {
    margin-left: 10px;
  transition: var(--speed);
  font-size: 1.3rem;
  color: black;
  font-weight: 500;

  :focus{
            outline: 0.4rem solid #70CC40;
        }
  }


`






