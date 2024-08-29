import * as THREE from "three";
import texture from "/texture.png";
import { MeshDistortMaterial, useTexture } from "@react-three/drei";
import { Ref, useRef } from "react";
const Cylinder = () => {
  const tex = useTexture(texture);
  const cylinderRef =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>();
  return (
    <group
    // rotation={[-0.15, 0.35, 0.1]}
    >
      <mesh
        ref={
          cylinderRef as Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>
        }
        scale={[-1, 1, 1]}
      >
        <cylinderGeometry args={[3, 3, 2.1, 1000, 100, true, Math.PI / 2]} />
        <MeshDistortMaterial
          map={tex}
          transparent
          side={THREE.BackSide}
          distort={0.4}
        />
      </mesh>
    </group>
  );
};

export default Cylinder;
