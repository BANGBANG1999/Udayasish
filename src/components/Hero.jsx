import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import "./Hero.css"
import Navbar from './Navbar'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

function Hero() {
  return (
    <div className="hero_section">
        <Navbar />
        <div className="hero_container">
          <div className="left">
            <h1 className='title'>Think. Make. Solve.</h1>
            <div className="whatWeDo">
              {/* <img className="line" src="/img/line.png"></img> */}
              <p style={{width: "35px", height: "5px", backgroundColor: "white"}}></p>
              <p className="subtitle">What I Do</p>
            </div>
            <p className="description">
            I enjoy creating delightful, human-centered digital experiences.
            </p>
            <button className="learnMore">Learn More</button>
          </div>
          <div className="right">
            {/* 3D Model */}
            <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial 
              color="#002348"
              attach="material"
              distort={0.5}
              speed={2}
              />
            </Sphere>
          </Canvas>
            <img src="/img/model.png" className="model" />
          </div>
        </div>
    </div>
  )
}

export default Hero
