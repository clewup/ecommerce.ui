import "./hero.scss";
import Heading from "../../atoms/Heading/Heading";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import MorphingSphere from "../../../threejs/MorphingSphere/MorphingSphere";

const Hero = () => {
  return (
    <div id={"hero"}>
      <div className={"hero-image"}>
        <Canvas>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={5}
            enablePan={false}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            <MorphingSphere />
          </Suspense>
        </Canvas>
      </div>
      <div className={"hero-text"}>
        <Heading>Ecommerce</Heading>
        <p>Your one stop shop for the latest trends.</p>
      </div>
    </div>
  );
};
export default Hero;
