import { Link } from "react-router-dom"

export const NavAdminBar = () => {
  return (
    <nav>
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
      </nav>
  )
}