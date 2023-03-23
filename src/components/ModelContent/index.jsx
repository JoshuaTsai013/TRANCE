import React from "react";
import './styles/model.css'
function ModelContent() {
    return (
        <model-viewer id="modelContainer"
        src="Room.glb"
        environment-image="night.jpg"
        exposure="3"
        camera-orbit="50deg 60deg 3m"
        camera-controls
        camera-target="auto auto auto"
        poster="poster.webp"
        shadow-intensity="2">
        </model-viewer>
    );
}

export default ModelContent;