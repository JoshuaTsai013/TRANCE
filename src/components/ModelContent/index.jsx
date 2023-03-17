import React from "react";
import './styles/model.css'
function ModelContent() {
    return (
        <model-viewer id="modelContainer"
        src="bmw.glb"
        camera-orbit="25deg 75deg 3m"
        camera-controls
        camera-target="auto auto auto"
        poster="poster.webp"
        shadow-intensity="1">
        </model-viewer>
    );
}

export default ModelContent;