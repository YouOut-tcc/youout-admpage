import styles from "./style.css";
import YOUT from "../../assets/logotipo.png";
import { TfiHome } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { ImTicket } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdBlock } from "react-icons/md";
import { RiPassValidFill } from "react-icons/ri";


function Header() {
  return (
    <header>
      <div className="divHeader">
      <div className="layoutBLogo">
        <div className="logoY">

          <img src={YOUT} className="logolb" alt="Logo YouOut" />
        </div>
          <h1>YouOut</h1>
          <div className="line"></div>
        </div> 
        <div className="menu">
               <Link className="iconesMenu" to="/home">
                   <AiFillHome size={50} className="iconesMenuHome iconesHeader" /> 
                   <p>Início</p>
               </Link>
               <Link className="iconesMenu" to="validação">
                   <RiPassValidFill size={40} className="iconesMenuEventos iconesHeader" /> 
                   <p>Validar Comércios</p>
               </Link>
               <Link className="iconesMenu" to="denuncias">
                   <MdBlock size={40} className="iconesMenuCupons iconesHeader" /> 
                   <p>Denúncias</p>
               </Link>
               <Link className="iconesMenu" to="perfil">
                   <FaUserAlt size={40} className="iconesMenuPerfil iconesHeader" /> 
                   <p>Perfil</p>
               </Link>
         </div>
      </div>
    </header>
  );
}

export default Header;
