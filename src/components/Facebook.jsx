/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 facebook.gltf --transform 
Files: facebook.gltf [23.29KB] > facebook-transformed.glb [7.42KB] (68%)
Author: Anthony Yanez (https://sketchfab.com/paulyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/facebook-logo-61764fe978014be48d55dd574da03d9c
Title: Facebook Logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/facebook-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Facebook_Logo_01_-_Default_0'].geometry} material={materials['01_-_Default']} position={[0, 0, -50]} />
    </group>
  )
}

useGLTF.preload('/facebook-transformed.glb')
