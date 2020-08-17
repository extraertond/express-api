//Components
import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

// Styles
import '../../css/frameworks.css';

// Requests
import { getFrameworks, deleteFramework } from "../../utils/request/FrameworkRequest";

// Interfaces
import IFramework from "../../interfaces/IFramework";


const FrameworksList: React.FC = () => {

  const [frameworks, setFrameworks] = useState<IFramework[]>([]);

  useEffect(() => {
    getFrameworks().then((frames: IFramework[])=>{
      setFrameworks(frames)}).catch((error: string) => {
      console.log(error.toString());
    });
  }, []);


  const eliminateFramework = (id: number) => {
    deleteFramework(id).then((response: any)=>{
      window.location.href = "/frameworks"}).catch((error: string) => {
      console.log(error.toString());
    });
  }


  return (
    <div>
      <div className="page-title">Listado de Frameworks</div>
      <div style={{textAlign: "center"}}>
      {frameworks.map((f: IFramework) => (
        <div key={f.id} className="frame-card card" style={{display:"inline-block", marginLeft: "2%", marginRight: "2%", marginBottom: "2%"}}>
        <div className="card-body">
          <h5 className="card-title">{f.name}</h5>
      <p className="card-text">{f.description}</p>
          <a href={f.url}>Ver Documentación</a>
          <br></br>
          <a style={{marginTop: "3%"}} href={"/editar/"+f.id} className="btn btn-primary">Editar</a>
          <br></br>
          <Button style={{marginTop: "3%"}} onClick={()=> eliminateFramework(f.id)} className="btn btn-danger">Eliminar</Button>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default FrameworksList;
