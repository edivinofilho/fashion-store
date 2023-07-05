import styled from "styled-components"

export const StyledTopSectionContainer =styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  
  button {
    width: 17rem;
    height: 3.75rem;

    margin-top: 10px;
  }

  @media(max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`