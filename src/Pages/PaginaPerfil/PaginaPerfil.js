import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Contants/Contants";
import { irParaEditarPerfil, irParaEditarEndereco } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

const PaginaPerfil = () => {

    const [perfil, setPerfil] = useState({id: "", name: "", email: "", cpf: "", hasAdress: true, address: ""})
    const [pedidos, setPedidos] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        buscarInformacoes()
        buscarHistoricoDePedidos()
    }, [])

    const buscarInformacoes = () => {
        const url = `${BASE_URL}/profile`
        const { token } = localStorage
        axios
        .get(url, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setPerfil(response.data.user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const buscarHistoricoDePedidos = () => {
        const url = `${BASE_URL}/orders/history`
        const { token } = localStorage
        axios
        .get(url, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setPedidos(response.data.orders)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const onClickIrParaEditarPerfil = () => {
        irParaEditarPerfil(navigate)
    }

    const onClickIrParaEditarEndereco = () => {
        irParaEditarEndereco(navigate)
    }

    const listaDePedido = pedidos.map((pedido) => {
        return (
            <div key={pedido.totalPrice}>
                <p>Nome do Restaurante: {pedido.restaurantName}</p>
                <p>SubTotal: {pedido.totalPrice}</p>
                <p>Data: {new Date(pedido.createdAt).toLocaleDateString()}</p>
            </div>
        )
    })

    return (
        <div>
            <div>
                <p>Nome: {perfil.name}</p>
                <p>Email: {perfil.email}</p>
                <p>CPF: {perfil.cpf}</p>
                <button onClick={onClickIrParaEditarPerfil}>Editar Perfil</button>
            </div>

            <div>
                <p>Endereço: {perfil.address}</p>
                <button onClick={onClickIrParaEditarEndereco}>Editar Endereço</button>
            </div>

            <div>
                <p>Historico de compras:</p>
                {listaDePedido}
            </div>
        </div>
    )
}

export default PaginaPerfil;