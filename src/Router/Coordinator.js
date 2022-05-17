























export const irParaEditarEndereco = (navigate) => {
  navigate('/editarendereco')
}

export const voltar = (navigate) => {
  navigate(-1)
}

export const irParaEditarPerfil = (navigate) => {
  navigate('/editarperfil')
}

export const irParaDetalhesRestaurante = (navigate, id) => {
  navigate(`restaurante/${id}`)
}
