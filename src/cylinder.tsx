import * as THREE from "three";
import texture from "./assets/texture.png";
import { useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { Ref, useRef } from "react";
const Cylinder = () => {
  const tex = useTexture(texture);
  const cylinderRef =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>();
  // useFrame((_, delta) => {
  //   if (cylinderRef.current) {
  //     cylinderRef.current.rotation.y += 0.25 * delta;
  //   }
  // });
  return (
    <group rotation={[-0.15, 0.35, 0.1]}>
      <mesh
        ref={
          cylinderRef as Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>
        }
        scale={[-1, 1, 1]}
      >
        <cylinderGeometry args={[3, 3, 2.1, 60, 1, true, Math.PI / 2]} />
        <meshStandardMaterial map={tex} transparent side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

export default Cylinder;
