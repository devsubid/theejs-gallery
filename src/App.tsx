import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cylinder from "./cylinder";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Reflector } from "@react-three/drei";
const App = () => {
  return (
    <div>
      <div className="h-screen w-screen">
        <Canvas
          camera={{
            fov: 28,
            zoom: 0.9,
          }}
        >
          <OrbitControls
            autoRotate
            dampingFactor={0.025}
            enableDamping
            rotateSpeed={0.25}
            enableZoom={false}
          />
          <ambientLight intensity={2} />
          <Cylinder />
          <Reflector
            blur={[1024, 1024]}
            mixBlur={75}
            mixStrength={0.25}
            resolution={1024}
            args={[50, 50]}
            rotation={[-Math.PI * 0.5, 0, 0]}
            mirror={2}
            minDepthThreshold={0}
            maxDepthThreshold={100}
            depthScale={1000}
            position={[0, -1.25, 0]}
          >
            {(Material: any, props) => (
              <Material metalness={0.01} roughness={1} {...props} />
            )}
          </Reflector>
          <EffectComposer>
            <Bloom
              mipmapBlur={true}
              luminanceThreshold={0.01}
              luminanceSmoothing={3}
              height={300}
              opacity={3}
            />
            <Noise opacity={0.025} />
            <Vignette eskil={false} offset={0.1} darkness={0.5} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
