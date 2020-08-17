//Components
import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

// Styles
import '../../css/frameworks.css';

// Requests
import { getFrameworks, deleteFramework } from "../../utils/request/FrameworkRequest";

// Interfaces
import IFramework from "../../interfaces/IFramework";

// Logos
import node_express_logo from '../../assets/logo/node-express-logo.png';
import boot_logo from '../../assets/logo/bootstrap-logo.png';
import mysql_logo from '../../assets/logo/mysql-logo.svg';
import react_logo from '../../assets/logo/react-logo.jpg';
import typescript_logo from '../../assets/logo/typescript-logo.svg';


const About: React.FC = () => {


  return (
    <div>
      <div className="page-title">Información del Proyecto</div>
    <div style={{textAlign: "center"}}>
    <img src={react_logo} alt="logo" width= "250px" style={{ margin: "20px"}}/>
    <img src={typescript_logo} alt="logo" width= "100px" style={{ margin: "20px"}}  />
    <img src={boot_logo} alt="logo" width= "100px" style={{ margin: "20px"}}  />
    <img src={node_express_logo} alt="logo" width= "220px" style={{ margin: "20px"}} />
    <img src={mysql_logo} alt="logo" width= "220px"  />
    
    </div>
    <div style={{width: "50%", textAlign: "center", marginLeft: "auto", marginRight: "auto", fontSize: "20px"}}>

    <div>
        Proyecto para autoaprendizaje creado por Néstor Fernández el 17/08/2020. Se trata de un proyecto cliente-servidor, la parte del cliente
      se ha hecho con <b>React + Typescript + Bootstrap</b> y la parte de la API con <b>Node.js + Express + MySQL</b>. El proyecto está desplegado en un servidor
      ubuntu 18.04 de DigitalOcean y manejado con Nginx.
      </div>
      <div style={{marginTop: "20px"}}>
        Enlace al repositorio (código libre): <br></br>
      <a style={{marginTop: "3%"}} href="https://github.com/extraertond/frameworks"  target="_blank" >Repositorio de GitHub</a>
      </div>

</div>
      
   
      
     
    </div>
  );
};

export default About;
