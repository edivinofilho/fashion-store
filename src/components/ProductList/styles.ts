import { styled, css } from "styled-components"
import { letterParagraph, letterPriceSmallBold } from "../../styles/globalStyle"

interface IStyledProductList {
  styledDiv: "homePage" | "adminPage";
}

export const StyledProductList = styled.div<IStyledProductList>`

    width: 100%;
    height: 3.75rem;

    ${({ styledDiv }) => {
        switch (styledDiv) {
            case "homePage":
                return css`
                  /* Estilização Home e ProductPage */
                `;
            case "adminPage":
              return css`
              width: 100%;
              height: auto;
    
              display: flex;
              align-items: center;
              justify-content: space-around;
              gap: 1.8rem;
              flex-wrap: wrap;

              button {
                cursor: pointer;
                background-color: transparent;
              }
        
              li {
                width: 49%;

                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;

                img {
                    width: 11rem;
                    height: 13rem;

                    margin-right: 1.25rem;
                  }

                div:first-child {
                  width: 60%;
                  display: flex;
                  align-items: center;
    
                  p:nth-child(1) {
                    font: ${letterParagraph}; 
                    width: 100%;
                    margin-bottom: 1.25rem;
                  }

                  p:nth-child(2){
                    font: ${letterPriceSmallBold};
                  }
                }

                div:nth-child(2) {
                  width: 20%;

                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  gap: 1rem;

                  margin-left: 1rem;
                  
                  .buttonIcon {
                    width: 2.2rem;
                    height: 2.2rem;
                  }
                }
              }
    
              @media screen and (max-width: 48rem) {
                li {
                  width: 100%;
                }
              }
            `;
        }
    }}
`