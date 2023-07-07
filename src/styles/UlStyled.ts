import { styled, css } from "styled-components"
import { letterParagraph, letterPriceSmallBold } from "./globalStyle"

interface IStyledProductList {
  styledDiv: "otherPage" | "adminPage"
}

export const StyledProductList = styled.ul<IStyledProductList>`

    width: 100%;
    height: 3.75rem;

    ${({ styledDiv }) => {
    switch (styledDiv) {
      case "otherPage":
        return css`
                    display: flex;
                    flex-direction: row;
                    align-items: start;
                    height:auto;
                    width: 100%;
                    max-width: 1440px;
                    overflow-x: auto;   
                    gap: 15px;
                    padding: 10px 0px;
                `;
      case "adminPage":
        return css`
              width: 100%;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 1.6em;
              flex-wrap: wrap;

              button {
                cursor: pointer;
                background-color: transparent;
              }
              
              li {
                width: 48%;

                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;

                list-style: none;
                gap: 10px;
                flex-wrap: wrap;

                img {
                    width: 11rem;
                    height: 13rem;
                    border-radius: 8px;

                    margin-right: 1.25rem;
                  }

                div:first-child {
                  width: 360px;
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
      
                  p:nth-child(1) {
                    font: ${letterParagraph}; 
                    width: 150px;
                    margin-bottom: 1.25rem;

                    flex-wrap: wrap;
                  }

                  p:nth-child(2){
                    font: ${letterPriceSmallBold};
                    text-align: flex-start;
                  }
                }

                div:nth-child(2) {
                  width: 130px;

                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  gap: 1rem;

                  .buttonIcon {
                    width: 2.2rem;
                    height: 2.2rem;
                  }
                }
              }
    
              @media(max-width: 780px) {
                justify-content: center;

                li {
                  width: 100%;
                  justify-content: center;

                  div:first-child {
                    justify-content: center;

                    margin-bottom: 10px;
                  }
                }
              }

              @media(max-width: 1101px){
                li {
                  justify-content: center;
                }
              }

              @media(max-width: 1240px){
                gap: 1.8em;
              }
            `;
    }
  }}
    `