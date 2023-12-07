import React, { useState, useReducer } from "react";
import "./styles.css";
import { userLogin } from "../../services/login";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import InputB from "../../components/Inputs/InputB";
import theme from "../../styles/Global";
import { useReducerInputs } from "../../hooks/Inputs";
import { validateInputsEmpty } from "../../helpers/validator/inputs";

const loginInitialState = [
  {
    label: "E-mail",
    name: "email",
    type: "email",
  },
  {
    label: "Senha",
    name: "senha",
    type: "password",
  },
];

export default function Login() {
  const [login, onChange, setError, clearErrors] =
    useReducerInputs(loginInitialState);

  const navigate = useNavigate();

  const handleSignupForm = async (event) => {
    event.preventDefault();
    console.log("rodou");

    let email = login[0].value;
    let password = login[1].value;

    clearErrors();

    if (validateInputsEmpty(login, setError)) return;

    try {
      let token = await userLogin({ email, password });

      if (!token) {
        setError(0);
        setError(1, "Login falhou. Tente novamente.");
        return null;
      }

      sessionStorage.setItem("loginToken", token);
      return navigate("/home");
    } catch (error) {
      console.log(error.constructor.name);
      console.log(error.message);
    }
  };

  return (
    <div className="containerInfos">
      <h1 className="title">Login</h1>
      <form className="formLogin" onSubmit={handleSignupForm}>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "60%",
            "& .MuiTextField-root": {
              m: 1,
              width: "65ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <InputB index={0} state={login} onChange={onChange} />
          <InputB index={1} state={login} onChange={onChange} />
        </Box>
        <div className="btns">
          <Link>
            <button onClick={handleSignupForm} className="btnEntrar">
              Entrar
            </button>
          </Link>
        </div>

      </form>
    </div>
  );
}
