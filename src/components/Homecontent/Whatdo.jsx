import React from "react"

import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Button, Space } from 'antd';
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
        <h3>This is a world with everything</h3>

        <Space direction="vertical" style={{ width: '10%' }}>
    <Button style={{ paddingBottom: '25%' }} type="primary" block>
      DISCOVER
    </Button>
    </Space >

      </div>

      <Canvas dpr={[1, 2]} shadows camera={{ fov: 20, position: [5, 5, 10] }} style={{ "position": "absolute", width: "100%", height: "100%", marginTop: "-5%" }}>

        <PresentationControls speed={1.5} global zoom={.5} polar={[-1.3, Math.PI / 6]}>
          <Stage environment={"sunset"}>
            <Model scale={0.5} />
          </Stage>

        </PresentationControls>

      </Canvas>

    </div >
  );
}

export default Whatdo