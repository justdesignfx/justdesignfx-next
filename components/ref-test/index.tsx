/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import * as THREE from "three"

import { Environment, Image, ScrollControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { easing } from "maath"

import logo from "@/public/img/contact-blob.png"

type Props = {}

const ImgTest = () => {
  const ref = useRef<any>()
  const [hovered, hover] = useState(false)
  const pointerOver = (e: any) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    if (!ref.current) return
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, "radius", hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta)
  })

  return (
    <Image
      ref={ref}
      url={logo}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

const RefTest = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      <ScrollControls pages={4} infinite>
        <ImgTest />
      </ScrollControls>
      <Environment preset="dawn" background blur={0.5} />
    </Canvas>
  )
}

export default RefTest
