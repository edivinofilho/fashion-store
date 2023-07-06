import styled from "styled-components"

export const StyledAddNewProductForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 10px;
 
  button {
    width: 17rem;
    height: 3.75rem;

    position: absolute;
    right: 20px;
    bottom: 30px;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;

    img {
      width: 20px;
    }
  }
`