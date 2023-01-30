// eslint-disable-next-line
// @ts-nocheck
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Mesh } from "three";
import { MathUtils } from "three";
import fragmentShader from "./utils/fragmentShader";
import vertexShader from "./utils/vertexShader";

interface MeshProps extends Mesh {
  current: {
    material: {
      uniforms: {
        u_time: {
          value: number;
        };
        u_intensity: {
          value: number;
        };
      };
    };
  };
}

export const Blob = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const mesh = useRef() as MeshProps;
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        isMouseHover ? 1 : 0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
      onPointerOver={() => setIsMouseHover(true)}
      onPointerLeave={() => setIsMouseHover(false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
