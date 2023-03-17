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

      {/* model */}
      <model-viewer id="modelContainerr"
        src="bmw.glb"
        camera-orbit="25deg 75deg 3"
        camera-controls
        camera-target="auto auto auto"
        poster="poster.webp"
        scale="1.2 1.2 1.2"
        shadow-intensity="2">
      </model-viewer>
    </div >
  );
}

export default Whatdo