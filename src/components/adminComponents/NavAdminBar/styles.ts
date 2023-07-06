import styled from "styled-components"
import { letterMenu } from "../../../styles/globalStyle"

export const StyledNavAdminBar = styled.nav`
  width: 100%;
  min-height: 3rem;
  max-width: 1440px;

  display: flex;
  padding: 0 35px;
  margin-bottom: 1.25rem;

  /* background-color: yellow; */

  > ul {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;

    /* background-color: green; */
    li { 
      height: auto;
      /* background-color: tomato; */
    }

    li > a {
      text-decoration: none;
      font:${letterMenu};

      cursor: pointer;

      margin-right: 1.8rem;

      /* background: blue; */

      &:visited {
        color:#000000; 
      }
    }
  }

  @media(max-width: 400px){
    ul {
      li {
        width: 220px;
        a{
          margin: 0;
        }
      }
    }
  }
`