import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, {useRef} from 'react'
import Facebook from "./Facebook"

function WebApps() {
  const modelGroupRef = useRef();
    const scale = 0.0045;
  return (
   
    <Canvas>
        {/* <Stage environment="city" intensity={0.6}> */}
        <ambientLight intensity={3} />
        <directionalLight position={[3, 2, 1]} />
        <group ref={modelGroupRef} scale={[scale, scale, scale]}>
          <Facebook />
        </group> 
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default WebApps

// scale={[scale, scale, scale]}