import styled from "styled-components"

export const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.1);
`

export const StyledModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  max-width: 23rem;

  border-radius: 4px;
    
  background: white;
`