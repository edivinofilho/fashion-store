import styled, { css } from "styled-components"
import { letterTitle3 } from "../../styles/globalStyle"

interface IStyledModalBox {
  stylemodal: "shoppingCart" | "adminModal"
}


export const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);
`

export const StyledModalBox = styled.div<IStyledModalBox>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  
  header {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px 20px 0px 20px;
            font: ${letterTitle3};

            > button {
              width: 3rem;
              height: 3rem;
              font-size: 35px;
              cursor: pointer;
              background-color: transparent;
            }
          }

  ${({ stylemodal }) => {
    switch (stylemodal) {
      case "shoppingCart":
        return css`
          /* Estilização para o shoppingCart */
        `;

      case "adminModal":
        return css`
          margin: 0 auto;
          height: 42.5rem;
          max-width: 37rem;
          border-radius: 4px;

          @media(max-width: 600px){
            width: 95%;
          }

          @media(max-width:420px){
            height: 50rem;;
            button {
              width: 85%;
            }
          }          
        `;
    }
  }}
`;
