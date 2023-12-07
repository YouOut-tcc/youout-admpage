import api from "./api";
import { AxiosError } from "axios";

async function userLogin(data) {
  try {
    const res = await api.post("/login", data);

    return res.data.token;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log("erro no login");
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function userCadastro(data) {
  try {
    const res = await api.post("/cadastrar", data);

    return res;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log("erro no cadastro");
      console.log(error.response.status);
      console.log(error.response.data.message);
      throw error;
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
      throw error;
    }
  }
}


export {
    userLogin,
    userCadastro,
}