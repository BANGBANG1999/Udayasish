import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'
import "./Who.css"


function Who() {
  const redirectToUrl = () => {
    window.location.href = 'https://github.com/BANGBANG1999';
  };
  return (
    <div className="who_section">
      <div className="who_container">
        <div className="left">
          {/* 3D Model */}
          <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>

        </div>
        <div className="right">
          <h1 className='title'>Think outside the square space</h1>
          <div className="whatWeDo">
            {/* <img className="line" src="/img/line.png"></img> */}
            <p style={{ width: "35px", height: "5px", backgroundColor: "white" }}></p>
            <p className="subtitle">Who am I</p>
          </div>
          <p className="description">
          I've built numerous web app projects, showcasing my expertise in the field.
          </p>
          <button className="seeOurWorks" onClick={redirectToUrl}>See our works</button>
        </div>
      </div>
    </div>
  )
}

export default Who
