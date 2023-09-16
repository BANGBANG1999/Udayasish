/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --transform 
Files: scene.gltf [4.16KB] > scene-transformed.glb [65.83KB] (-1482%)
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 0.079, 0.181]} rotation={[0, 0, -Math.PI / 2]} scale={[0.392, 0.392, 0.527]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed2.glb')
