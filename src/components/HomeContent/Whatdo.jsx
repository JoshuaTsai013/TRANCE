import React from "react";
import { SearchOutlined } from "@ant-design/icons";
// import { Canvas } from '@react-three/fiber';
// import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles/whatdo.css';

// function Model(props) {
//   const { scene } = useGLTF("/bmw.glb");
//   return <primitive object={scene}{...props} />
// }

function Whatdo() {
  return (
    <div className="whatdo-container">

      <div className="whatdo-content">
        <h1 className="whatdo-title">➥ What do we do?</h1>
        <h3>TRANCE is a creative studio that specializes in 3D design, <br />music production, and art direction. Our team offers services <br />including 3D modeling and animation, music composition, and art direction<br /> for branding and marketing campaigns. Contact us today to learn more.</h3>
        <br />

        <InputGroup className="mb-3 searchbar">
          <h1 className="search-title"></h1>

          <a href='/AboutUs' target="_blank">
            <Button variant="outline-light" id="button-addon2" onClick={() => onClickOpenVacancy(id)}>
              <h2>LEARN MORE ↗</h2>
            </Button>
          </a>
        </InputGroup>
      </div>

      {/* model */}
      <model-viewer id="modelContainerr"
        src="bmw.glb"
        camera-orbit="25deg 75deg 5.5m"
        // camera-controls
        camera-target="auto auto auto"
        disable-zoom
        auto-rotate
        rotation-per-second
        interaction-prompt="none"
        scale="1.2 1.2 1.2"
        shadow-intensity="2">
      </model-viewer>
    </div >
  );
}

export default Whatdo