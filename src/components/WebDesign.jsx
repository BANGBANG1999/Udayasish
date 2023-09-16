import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, {useRef} from 'react'
import Website from './Website'

function WebDesign() {
    const modelGroupRef = useRef();
    const scale = 0.6;
  return (
   
    <Canvas>
        {/* <Stage environment="city" intensity={0.6}> */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <group ref={modelGroupRef} scale={[scale, scale, scale]}>
        <Website />
      </group>
        
        {/* </Stage> */}
      <OrbitControls enableZoom={false} />
    </Canvas>
 
  )
}

export default WebDesign
