// Components
import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Styles
import '../../css/frameworks.css';

// Interfaces
import { getFrameworkById, updateFramework } from "../../utils/request/FrameworkRequest";
import IFramework from '../../interfaces/IFramework';

const EditFramework = () => {

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  let { id } =  (useParams());

  useEffect(() => {
    getFrameworkById(id).then((framework: IFramework)=>{
        setName(framework.name);
        setDescription(framework.description);
        setUrl(framework.url);
    }).catch((error: string) => {console.log(error.toString());});
  }, [id]);


  const nameHandler = (event: any) => {
    setName(event.target.value);
  }

  const descriptionHandler = (event: any) => {
    setDescription(event.target.value);
  }

  const urlHandler = (event: any) => {
    setUrl(event.target.value);
  }

  const submitFramework = () => {
    let frame = {
      name: name,
      description: description,
      url: url
    };
    updateFramework(frame, id).then((statusResponse: any)=>{
      window.location.href = "/frameworks";
    }).catch((error: string) => {
      console.log(error.toString());
    });
  }


  return (
    <div>
      <div className="page-title">Editar Framework</div>
      <div style={{ textAlign: "center"}}>
        <Form style={{textAlign: "left", width: "300px", marginLeft: "auto", marginRight: "auto"}}>
          <Form.Group >
          <Form.Label>Nombre del Framework</Form.Label>
          <Form.Control onChange={nameHandler} value={name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
    <Form.Control onChange={descriptionHandler} type="text" value={description} as="textarea" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Url</Form.Label>
    <Form.Control onChange={urlHandler} value={url} placeholder="http://www.google.es..." />
  </Form.Group>
    
    <Button variant="primary" onClick={submitFramework} style={{width: "300px"}}>
    Actualizar
  </Button>
    
 
</Form>
</div>
    
    </div>
  );
};

export default EditFramework;