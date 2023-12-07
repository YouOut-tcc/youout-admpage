import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../components/LogoInicial";
import Modal from "../../components/modalA";
import Styles from "../denuncias/style.css";

function Index() {
  const [openModal, setOpenModal] = useState(false);
  const [showplaces, setshowplaces] = useState(false);
  const [showavalicaçoes, setshowavalicaçoes] = useState(false);
  const [showresposta, setshowrespostas] = useState(false);

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
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        title="Perfil Completo"
      ></Modal>

      <div className=" buttons">
        <button className = "btnPlaces" onClick={()=>{switchTable("places")}}>Estabelecimentos</button>
        <button className = "btnRespostas" onClick={()=>{switchTable("respostas")}}>Respostas</button>
        <button className = "btnAvaliacoes" onClick={()=>{switchTable("avaliacoes")}}>Avaliações</button>
        <button className = "btnLimpar" onClck={()=>{switchTable("limpar")}}>Limpar</button>
      </div>

      {showplaces && (
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
            {
              <tr>
                <td>1</td>
                <td>logo</td>
                <td>asdfasdf</td>
                <td>asdfdfasfd</td>
                <td>12/12/2022</td>
                <td>
                  {" "}
                  <button onClick={() => setOpenModal(true)}>
                    Outras Informações
                  </button>
                </td>
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      )}
      {showresposta && (
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
            {
              <tr>
                <td>1</td>
                <td>Lucas</td>
                <td>34</td>
                <td>carlos</td>
                <td>
                  {" "}
                  <button onClick={() => setOpenModal(true)}>
                    ...
                  </button>
                </td>
                <td>10/12/2022</td>
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      )}
      {showavalicaçoes && (
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
            {
              <tr>
                <td>4</td>
                <td>alam</td>
                <td>7</td>
                <td>fabio</td>
                <td>
                  {" "}
                  <button onClick={() => setOpenModal(true)}>
                    ...
                  </button>
                </td>
                <td>10/12/2322</td>
                <td>
                  <button className="btnEditar">Editar</button>
                  <button className="btnExcluir">Excluir</button>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      )}
    </>
  );
}

export default Index;
