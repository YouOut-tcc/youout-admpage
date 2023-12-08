import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../components/LogoInicial";
import Modal from "../../components/modalA";
import Styles from "../denuncias/style.css";

import {getComentariosDenuncias, deletarPlace, getPlacesDenuncias, getRespostasDenuncias, deletarComentario, deletarRespostas} from "../../services/commerce";


function Index() {
  const [openModalDenuncias, setOpenModalDenuncias] = useState(false);
  const [showplaces, setshowplaces] = useState(false);
  const [showavalicaçoes, setshowavalicaçoes] = useState(false);
  const [showresposta, setshowrespostas] = useState(false);
  
  const [places, setPlaces] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  

  useEffect(()=> {
    const getDenunciasPlaces = (async () => {
      try {
        let res = await getPlacesDenuncias();
        setPlaces(res)
      } catch (error) {
        console.log(error.message)
      }
    })
    getDenunciasPlaces()
  }, [])

const switchTable = (table) => {
    switch (table) {
        case "places":
            setshowplaces(true);
            setshowavalicaçoes(false);
            setshowrespostas(false);
            break;

        case "avaliacoes":
            setshowavalicaçoes(true);
            setshowplaces(false);
            setshowrespostas(false);
            break;

        case "respostas":
            setshowrespostas(true);
            setshowplaces(false);
            setshowavalicaçoes(false);
            break;    

        case "limpar":
          setshowrespostas(false);
          setshowplaces(false);
          setshowavalicaçoes(false);
          break;    

        default:
            break;
    }

    
}
  return (
    <>
      <Modal
        isOpen={openModalDenuncias}
        setModalOpen={() => setOpenModalDenuncias(!openModalDenuncias)}
        title="Motivo"
      ></Modal>

      <div className=" buttons">
        <button className = "btnPlaces" onClick={()=>{switchTable("places")}}>Estabelecimentos</button>
        <button className = "btnRespostas" onClick={()=>{switchTable("respostas")}}>Respostas</button>
        <button className = "btnAvaliacoes" onClick={()=>{switchTable("avaliacoes")}}>Avaliações</button>
        <button className = "btnLimpar" onClick={()=>{switchTable("limpar")}}>Limpar</button>
      </div>

      
        <Table striped bordered hover className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Icone</th>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Data</th>
              <th>Informações</th>
              <th></th>
            </tr>
          </thead>
            
          <tbody>
              {showplaces && places.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>logo</td>
                <td>{item.nome}</td>
                <td>{item.cnpj}</td>
                <td>{item.solicitado}</td>
                <td>
                  {" "}
                  <button onClick={() => setOpenModalDenuncias(true)}>
                   ...
                  </button>
                </td>
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
              ))
              }
              
          </tbody>
            
        </Table>
      
      
        <Table striped bordered hover className="tabela">
          <thead>
            <tr>
              <th>ID Autor</th>
              <th>Autor</th>
              <th>ID Denunciado</th>
              <th>Denunciado</th>
              <th>Motivo</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {showresposta && respostas.map((item) => (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fk_resposta_id}</td>
              <td>{item.fk_usuario_id}</td>
              <td>{item.motivo}</td>
              <td>{item.criado}</td>
              <td>
                  {" "}
                  <button onClick={() => setOpenModalDenuncias(true)}>
                    ...
                  </button>
                </td>
                {/* <td>10/12/2022</td> */}
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
              ))
            }
          </tbody>
        </Table>
      
        <Table striped bordered hover className="tabela">
          <thead>
            <tr>
              <th>ID Autor</th>
              <th>Autor</th>
              <th>ID Denunciado</th>
              <th>Denunciado</th>
              <th>Motivo</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {showavalicaçoes && avalicaçoes.map((item) => ( //erro na avalicoes.map
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fk_avaliacao_id}</td>
              <td>{item.fk_usuario_id}</td>
              <td>{item.motivo}</td>
              <td>{item.criado}</td>
              <td>
                  {" "}
                  <button onClick={() => setOpenModalDenuncias(true)}>
                    ...
                  </button>
                </td>
                {/* <td>10/12/2322</td> */}
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
               ))
            }
          </tbody>
        </Table>
      
    </>
  );
}

export default Index;
