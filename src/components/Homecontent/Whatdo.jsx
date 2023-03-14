import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles/whatdo.css';

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene}{...props} />
}


function Whatdo() {
  return (
    <div className="whatdo-container">


      <div className="whatdo-content">
        <h1 className="whatdo-title">➥ What do we do?</h1>
        <h3>This is a world with everything<br />We have music, models, art, stores, everything you want is here</h3>

       
        <InputGroup className="mb-3 searchbar">
        <h1 className="search-title">↺ Search</h1>
          <Form.Control
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-light" id="button-addon2">
            <SearchOutlined />
          </Button>
        </InputGroup>

      </div>



      <Canvas dpr={[1, 2]} shadows camera={{ fov: 20, position: [5, 5, 10] }} style={{ "position": "absolute", width: "100%", height: "100%", marginTop: "-5%" }}>

        <PresentationControls speed={1.5} global zoom={.5} polar={[-1, Math.PI / 5]}>
          <Stage environment={"sunset"}>
            <Model scale={0.5} />
          </Stage>

        </PresentationControls>

      </Canvas>

    </div >
  );
}

export default Whatdo