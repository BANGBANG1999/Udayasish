import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import "./Test.css"
import Cube from './Cube'
// import { Color } from 'three'

function Test() {
  return (
    <div className="container_test">
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
           <Cube />
        </Canvas>
    </div>
  )
}

export default Test
