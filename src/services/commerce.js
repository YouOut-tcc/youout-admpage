import api from "./api";
import { AxiosError } from "axios";

async function getRequest() {

    try {
        let res = await api.get("/request")
        return res.data;
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
      }
}

async function getComentariosDenuncias() {
    try {
        let res = await api.get("/comentarios")
        return res.data
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function getRespostasDenuncias() {
    try {
        let res = await api.get("/respostas")
        return res.data;
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function getPlacesDenuncias() {
    try {
        let res = await api.get("/places")
        return res.data;
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function deletarComentario(id) {
    try {
        await api.delete(`/comentarios/${id}`)

    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function deletarPlace(id) {
    try {
        await api.delete(`/places/${id}`)

    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function deletarRespostas(id) {
    try {
        await api.delete(`/respostas/${id}`)

    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function aceitarRequest(id) {
    try {
        await api.post(`/aceitar/${id}`)
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function recusarRequest(id) {
    try {
        await api.post(`/recusar/${id}`)
    } catch (error) {
        console.log(error.constructor.name);
        if (error instanceof AxiosError) {
          console.log(error.response.status);
          console.log(error.response.data.message);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        }
    }
}

async function deletarDenunciasComentarios(id) {
  try {
    await api.delete(`/comentarios/denuncias/${id}`)
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function deletarDenunciasRespostas(id) {
  try {
    await api.delete(`/respostas/denuncias/${id}`)
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function deletarDenunciasPlaces(id) {
  try {
    await api.delete(`/places/denuncias/${id}`)
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

export {
    recusarRequest,
    aceitarRequest,
    getComentariosDenuncias,
    getRequest,
    getPlacesDenuncias,
    getRespostasDenuncias,
    deletarComentario,
    deletarPlace,
    deletarRespostas,
    deletarDenunciasComentarios,
    deletarDenunciasPlaces,
    deletarDenunciasRespostas,
}