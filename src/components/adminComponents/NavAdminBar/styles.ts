import styled from "styled-components"
import { letterMenu } from "../../../styles/globalStyle"

export const StyledNavAdminBar = styled.nav`
  width: 100%;
  min-height: 3rem;

  margin-bottom: 1.25rem;

  > ul {
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;

    li > a {
      text-decoration: none;
      font:${letterMenu};

      cursor: pointer;

      margin-right: 1.8rem;

      &:visited {
        color:#000000; 
      }
    }
  }
`