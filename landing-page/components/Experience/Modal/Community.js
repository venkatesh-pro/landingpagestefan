import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

const CommunityModal = ({ ...props }) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/o1p7-XCLAYeabnya/scene.splinecode"
  );

  console.log(nodes, materials);

  return (
    <>
      <color attach="background" args={["#000000"]} />
      {/* <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Sphere 3"
            geometry={nodes["Sphere 3"].geometry}
            material={materials["Sphere 3 Material"]}
            castShadow
            receiveShadow
            position={[-10321, 1849.88, 804]}
            rotation={[Math.PI, Math.PI / 2, 0]}
          />
          <mesh
            name="Sphere 2"
            geometry={nodes["Sphere 2"].geometry}
            material={materials[""]}
            castShadow
            receiveShadow
            scale={2}
          />
          <group name="Group" rotation={[-0.04, 0, -0.12]} scale={1}>
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials["Sphere Material"]}
              castShadow
              receiveShadow
              scale={1}
            />
            <mesh
              name="Sphere 31"
              geometry={nodes["Sphere 31"].geometry}
              material={materials[""]}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-5000}
            shadow-camera-right={5000}
            shadow-camera-top={5000}
            shadow-camera-bottom={-5000}
            position={[-301.25, 254.89, -145.87]}
            scale={[1, 1, 1.34]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
        </scene>
      </group> */}
    </>
  );
};

export default CommunityModal;
