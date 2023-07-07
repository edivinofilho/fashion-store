import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProductsPage } from "../pages/ProductsPage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { AdminDashboardWelcomePage } from "../pages/AdminDashboardWelcomePage"
import { AdminDashboardPage } from "../pages/AdminDashboardPage"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product/:id" element={<ProductsPage />}/>
      <Route path="/product" element={<ProductsPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/admin_dashboard" element={<AdminDashboardPage />}/>
      <Route path="/admin_welcome" element={<AdminDashboardWelcomePage />}/>
    </Routes>
  )
}