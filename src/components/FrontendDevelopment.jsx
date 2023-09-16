import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, {useRef} from 'react'
import Frontend from "./Frontend"


function FrontendDevelopment() {
  const modelGroupRef = useRef();
    const scale = 0.9;
  return (
   
    <Canvas>
        {/* <Stage environment="city" intensity={0.6}> */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <group ref={modelGroupRef} scale={[scale, scale, scale]}>
        <Frontend />
        </group> 
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default FrontendDevelopment
