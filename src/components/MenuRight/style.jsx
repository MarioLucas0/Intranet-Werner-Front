import styled from 'styled-components';

export const MenuRightContainer = styled.aside`
  width: 25rem;
  margin-block: 5rem;
  display: flex;
  justify-content: center;
  border-left: 1px solid #7B9B46;
  @media(max-width: 1200px) {
    display: none;
  }

 
`

export const Ul = styled.ul`
  width: 18.9rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  

  li {  
      width: 18.9rem;
     text-align: center;
      list-style: none;
      cursor: pointer;
      
      a{
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-align: center;
        color: #337103;
       
      }
    

    }
`

export const Option = styled.li`

  .tabNavigation{
    :focus{
      outline: 0.4rem solid #70CC40;
    }
  }
  
`;