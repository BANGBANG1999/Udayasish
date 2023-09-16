import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, {useRef} from 'react'
import Backend from "./Backend"


function BackendDevelopment() {
  const modelGroupRef = useRef();
    const scale = 1.75;
  return (
   
    <Canvas>
        {/* <Stage environment="city" intensity={0.6}> */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <group ref={modelGroupRef} scale={[scale, scale, scale]}>
        <Backend />
        </group> 
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default BackendDevelopment

