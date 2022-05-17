import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBuscarRestaurante from "../Pages/PaginaBuscarRestaurante/PaginaBuscarRestaurante";
import PaginaHome from "../Pages/PaginaHome/PaginaHome";
import PaginaDeCadastro from "../Pages/PaginaDeCadastro/PaginaDeCadastro";
import PaginaEditarCadastro from "../Pages/PaginaEditarCadastro/PaginaEditarCadastro";
import PaginaEditarEndereco from "../Pages/PaginaEditarEndereco/PaginaEditarEndereco";
import PaginaEditarPerfil from "../Pages/PaginaEditarPerfil/PaginaEditarPerfil";
import PaginaLogin from "../Pages/PaginaDeLogin/PaginaDeLogin";
import PaginaPedido from "../Pages/PaginaPedido/PaginaPedido";
import PaginaDetalhesRestaurante from "../Pages/PaginaDetalhesRestaurante/PaginaDetalhesRestaurante";
import GlobalState from "../Global/GlobalState";
export const Router = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route index element={<PaginaHome />} />
          <Route path="/cadastro" element={<PaginaDeCadastro />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/busca" element={<PaginaBuscarRestaurante />} />
          <Route path="/editarcadastro" element={<PaginaEditarCadastro />} />
          <Route path="/editarendereco" element={<PaginaEditarEndereco />} />
          <Route path="/editaperfil" element={<PaginaEditarPerfil />} />
          <Route path="/pedido" element={<PaginaPedido />} />
          <Route path="/restaurante/:id" element={<PaginaDetalhesRestaurante />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  )
}