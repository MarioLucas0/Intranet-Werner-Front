import styled from 'styled-components'



export const MenuRightContainer = styled.aside`
  width: 25%;
  margin-block: 5rem;
  display: flex;
  justify-content: center;
  border-right: 1px solid #7B9B46;

  @media(max-width: 1000px) {
    width: 100%;
    display: flex;

    h2 {
      display: none;
    }
  }

`

export const Ul = styled.ul`
  width: 27.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: fixed;
  margin-top: 3rem;
  

  li {  
      width: 20.9rem;
     text-align: center;
      list-style: none;
      cursor: pointer;
      
      a{
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-align: center;
        color: #337103;

        :focus{
            outline: 0.4rem solid #70CC40;
        }

      }
    }

    @media(max-width: 1000px) {
      display: contents;
    }
    @media(max-width: 1000px) {
      li {  
        a{
          font-size: 1.5rem;
        }
      }
    }
`    


export const TextData = styled.h2`
  margin-bottom: 1rem;

  :focus{
    outline: 0.4rem solid #70CC40;

  }

`
export const Option = styled.li`


`






