import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../components/LogoInicial";
import Modal from "../../components/modalA";
import { Link } from "react-router-dom";
import Styles from "../validPlaces/style.css";

import api from "../../services/api";

import getRequest from "../../services/commerce";
import recusarRequest from "../../services/commerce";
import aceitarRequest from "../../services/commerce";



function ModalPlaces (){
    return (
    <div className='modalValid'>
        <h1>teste</h1>  
        <h1>123</h1>  
        <h1>234</h1> 
        <h1>456</h1>  
    </div>
    )
}

function Index() {

    const [openModal, setOpenModal] = useState(false);
    const [places, setPlaces] = useState([])

    useEffect(() => {
        async function getRequest() {
            const {data} = await api.get('/request');
            setPlaces(data);
        }
        getRequest();
    }, [places]);

    return (
        
        <>

        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} title="Perfil Completo"> 
            
            <ModalPlaces/>
           
        </Modal>

            <Table striped bordered hover>
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
                    { places &&
                        places.map((item) =>(
                            <tr >
                            <td>item.id</td>
                            <td>logo</td>
                            <td>item.nome</td>
                            <td>item.cnpj</td>
                            <td>item.solicitado</td>
                            <td> <button  onClick={() => setOpenModal(true)}>Mais Informações</button></td>
                            <td>
                                <button className='btnEditar'>Editar</button>
                                <button className='btnExcluir'>Excluir</button>
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