import styled from "styled-components"

export const StyledTopSectionContainer =styled.div`
  width: 100%;
  height: auto;
  max-width: 1440px;
  margin-left: 1.8rem;
  margin-bottom: 1rem;
 
  display: flex;
  align-items: center;

  button {
    width: 17rem;
    height: 3.75rem;
    
    margin-top: .7rem;
    margin-right: 3.1rem;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;

    img {
      width: 20px;
    }
  }

  @media(max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`