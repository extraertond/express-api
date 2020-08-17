import React, { useState } from "react";

// Components
import { Form, Button } from 'react-bootstrap';

// Styles
import '../../css/frameworks.css';

// Interfaces
import { postFramework } from "../../utils/request/FrameworkRequest";

const CreateFramework: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");


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
    postFramework(frame).then((statusResponse: any)=>{
      window.location.href = "/frameworks";
    }).catch((error: string) => {
      console.log(error.toString());
    });
  }


  return (
    <div>
      <div className="page-title">Agregar Framework</div>
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
    {
      name === "" || url === "" || description === ""  ?
      <Button disabled variant="primary" onClick={submitFramework} style={{width: "300px"}}>
      Enviar
    </Button>
     :
    <Button variant="primary" onClick={submitFramework} style={{width: "300px"}}>
    Enviar
  </Button>
    }
 
</Form>
</div>
    
    </div>
  );
};

export default CreateFramework;