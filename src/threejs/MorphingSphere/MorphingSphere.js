import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function MorphingSphere() {
  return (
    // eslint-disable-next-line
    <mesh rotation={[90, 0, 20]}>
      // @ts-ignore
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#ccc"
          attatch="material"
          distort={0.3}
          speed={1.5}
          roughness={1}
        />
      </Sphere>
    </mesh>
  );
}
