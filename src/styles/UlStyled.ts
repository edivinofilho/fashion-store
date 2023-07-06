import { styled, css } from "styled-components"
import { letterParagraph, letterPriceSmallBold } from "./globalStyle"

interface IStyledProductList {
  styledDiv: "otherPage" | "adminPage";
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
                    justify-content: space-between;
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
              justify-content: space-around;
              gap: 2.7rem;
              flex-wrap: wrap;

              button {
                cursor: pointer;
                background-color: transparent;
              }
        
              li {
                width: 47%;

                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                gap: 10px;
                flex-wrap: wrap;

                img {
                    width: 10rem;
                    height: 12rem;

                    margin-right: 1.25rem;
                  }

                div:first-child {
                  width: 400px;
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;

                  p:nth-child(1) {
                    font: ${letterParagraph}; 
                    width: 130px;
                    margin-bottom: 1.25rem;

                  }

                  p:nth-child(2){
                    font: ${letterPriceSmallBold};
                  }
                }

                div:nth-child(2) {
                  width: 140px;

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
    
              @media(max-width: 760px) {
                li {
                  width: 100%;
                  justify-content: center;

                  div:first-child {
                    justify-content: space-evenly;
                  }
                }
              }
            `;
    }
  }}
    `