// src/components/Scene.tsx
'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const INK = '#f3efe6'
const ACCENT = '#d4ff5a'

function IcosahedronScene() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.LineSegments>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const dotsRef = useRef<THREE.Points>(null)

  // interaction state (refs → no re-renders)
  const targetX = useRef(0.3)
  const targetY = useRef(-0.2)
  const curX = useRef(0.3)
  const curY = useRef(-0.2)
  const dragging = useRef(false)
  const lastPX = useRef(0)
  const lastPY = useRef(0)
  const scrollY = useRef(0)

  // geometries — created once
  const { outerWire, innerWire, coreGeo, dotsGeo } = useMemo(() => {
    const outerWire = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.6, 1))
    const innerWire = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.0, 0))
    const coreGeo = new THREE.IcosahedronGeometry(0.5, 0)

    const N = 220
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const r = 2.4 + Math.random() * 2.4
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(p) * Math.cos(t)
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
      pos[i * 3 + 2] = r * Math.cos(p)
    }
    const dotsGeo = new THREE.BufferGeometry()
    dotsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

    return { outerWire, innerWire, coreGeo, dotsGeo }
  }, [])

  // pointer + scroll listeners
  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY
    }
    const onMove = (e: PointerEvent) => {
      const isMobile = window.innerWidth < 768
      const dragScale = isMobile ? 0.003 : 0.006
      const hoverScaleX = isMobile ? 0.25 : 0.6
      const hoverScaleY = isMobile ? 0.15 : 0.4
      if (dragging.current) {
        targetX.current += (e.clientX - lastPX.current) * dragScale
        targetY.current += (e.clientY - lastPY.current) * dragScale
        lastPX.current = e.clientX
        lastPY.current = e.clientY
      } else {
        targetX.current = 0.3 + (e.clientX / window.innerWidth - 0.5) * hoverScaleX
        targetY.current = -0.2 + (e.clientY / window.innerHeight - 0.5) * hoverScaleY
      }
    }
    const onUp = () => {
      dragging.current = false
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // smooth lerp towards target rotation
    curX.current += (targetX.current - curX.current) * 0.06
    curY.current += (targetY.current - curY.current) * 0.06

    if (groupRef.current) {
      groupRef.current.rotation.y = curX.current + t * 0.08
      groupRef.current.rotation.x = curY.current + Math.sin(t * 0.4) * 0.08

      // scroll parallax: scale down + drift up
      const sc = Math.max(0.35, 1 - scrollY.current / 1400)
      groupRef.current.scale.setScalar(sc)
      groupRef.current.position.x = 2.0 - (Math.min(scrollY.current, 400) / 400) * 0.5
      groupRef.current.position.y = -scrollY.current / 300
    }

    // inner wireframe counter-rotates independently
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3
      innerRef.current.rotation.x = t * 0.15
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5
    }

    if (dotsRef.current) {
      dotsRef.current.rotation.y = t * 0.02
      dotsRef.current.rotation.x = t * 0.01
    }
  })

  return (
    <>
      {/* floating dots cloud */}
      <points ref={dotsRef} geometry={dotsGeo}>
        <pointsMaterial color={INK} size={0.018} transparent opacity={0.6} />
      </points>

      {/* main group — reacts to mouse + scroll */}
      <group ref={groupRef} position={[2.0, 0, 0]}>
        {/* outer coarse wireframe, bone-white */}
        <lineSegments geometry={outerWire}>
          <lineBasicMaterial color={INK} transparent opacity={0.22} />
        </lineSegments>

        {/* inner wireframe, lime, counter-rotates */}
        <lineSegments ref={innerRef} geometry={innerWire}>
          <lineBasicMaterial color={ACCENT} transparent opacity={0.55} />
        </lineSegments>

        {/* solid core, lime, low opacity */}
        <mesh ref={coreRef} geometry={coreGeo}>
          <meshBasicMaterial color={ACCENT} transparent opacity={0.15} />
        </mesh>
      </group>
    </>
  )
}

interface SceneProps {
  onCanvasReady?: (canvas: HTMLCanvasElement) => void
}

export default function Scene({ onCanvasReady }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      onCreated={({ gl }) => {
        gl.domElement.style.cursor = 'grab'
        onCanvasReady?.(gl.domElement)
      }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <IcosahedronScene />
    </Canvas>
  )
}
