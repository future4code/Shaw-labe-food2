import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { BASE_URL } from "../../Contants/Contants";

const PaginaDeLogin = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" });   

    const login = () => {
   axios
          .post(`${BASE_URL}/login`, form)
          .then((res) => {
            console.log(res);
              localStorage.setItem("token", res.data.token);
              if (res.data.user.hasAddress === true) {
                  navigate.push("/")
              }else {
                  navigate.push("/cadastro")
              }
              clear();
          })
          .catch((err) => {
              console.log(err.res)
              clear();
          })
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(navigate)
}


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <h1>Login</h1>
                <input type={"email"}
                    placeholder="Email"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input type={"password"}
                    placeholder="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />   
                <button type={"submit"} >Entrar</button>
               

            </form>
        </div>
    );
}

export default PaginaDeLogin