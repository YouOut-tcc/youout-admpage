import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../components/LogoInicial";
import Modal from "../../components/modalA";

function Index() {

    const [openModal, setOpenModal] = useState(false);

    // const [actors, setActors] = useState([]);

    // useEffect(() => {
    //     async function getActors() {
    //         const {data} = await api.get('/ator');
    //         setActors(data);
    //     }
    //     getActors();
    // }, [actors]);

    
    return (
        <>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}> 
        
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
                    {/* {actors &&
                        actors.map((item)=>( */
                            <tr >
                                <td>1</td>
                                <td>logo</td>
                                <td>Lorem</td>
                                <td>123456789123</td>
                                <td>12/12/2022</td>
                                <td> <button  onClick={() => setOpenModal(true)}> </button></td>
                                <td>
                                    <button className='btnEditar'>Editar</button>
                                    <button className='btnExcluir'>Excluir</button>
                                </td>
                            </tr>
                        // ))
                    }
                </tbody>
            </Table> 
        </>

        
    );
}

export default Index;