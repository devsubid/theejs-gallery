import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cylinder from "./cylinder";

const App = () => {
  return (
    <div>
      <div className="h-screen w-screen">
        <Canvas
          camera={{
            fov: 25,
            zoom: 1,
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
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Cylinder />
        </Canvas>
      </div>
      <div className="text-white">
        <h1>React Three Fiber</h1>
        <p>
          This is a simple example of a cylinder with a texture applied to it.
        </p>
      </div>
    </div>
  );
};

export default App;
