import { Link } from "react-router-dom"
import { StyledNavAdminBar } from "./styles"

export const NavAdminBar = () => {
  return (
    <StyledNavAdminBar>
        <ul>
          <li>
            <Link to="/admin_welcome">
              Início
            </Link>
          </li>
          <li>
            <Link to="/admin_dashboard">
              Produtos
            </Link>
          </li>
        </ul>
      </StyledNavAdminBar>
  )
}