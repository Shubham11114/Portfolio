import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Sphere, Cylinder, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const RobotCharacter = () => {
    const headRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (headRef.current) {
            // Smooth look-at mouse
            const target = new THREE.Vector3(state.mouse.x * 5, state.mouse.y * 5, 5);
            headRef.current.lookAt(target);
        }
    });

    const bodyColor = "#e2e8f0"; // White/Gray plastic
    const accentColor = "#3b82f6"; // Blue
    const glowColor = hovered ? "#f472b6" : "#06b6d4"; // Cyan to Pink on hover

    return (
        <group onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            {/* Float Animation - Positioned to the right */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={[1.5, 0.5, 0]}>

                {/* HEAD GROUP */}
                <group ref={headRef} position={[0, 1.2, 0]}>
                    <RoundedBox args={[1, 0.8, 0.9]} radius={0.2} smoothness={4}>
                        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.1} />
                    </RoundedBox>
                    <RoundedBox args={[0.85, 0.6, 0.1]} radius={0.05} position={[0, 0, 0.41]}>
                        <meshPhysicalMaterial color="#111" roughness={0.2} metalness={0.8} clearcoat={1} />
                    </RoundedBox>
                    <Sphere args={[0.08, 32, 32]} position={[-0.2, 0.05, 0.46]}>
                        <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} />
                    </Sphere>
                    <Sphere args={[0.08, 32, 32]} position={[0.2, 0.05, 0.46]}>
                        <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} />
                    </Sphere>
                    <Cylinder args={[0.02, 0.02, 0.3]} position={[0, 0.55, 0]}>
                        <meshStandardMaterial color="#64748b" />
                    </Cylinder>
                    <Sphere args={[0.05]} position={[0, 0.7, 0]}>
                        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={1} />
                    </Sphere>
                </group>

                {/* BODY GROUP */}
                <group position={[0, 0, 0]}>
                    <RoundedBox args={[0.8, 1, 0.6]} radius={0.2} smoothness={4}>
                        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.1} />
                    </RoundedBox>
                    <Cylinder args={[0.15, 0.15, 0.1]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.2, 0.3]}>
                        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={1} />
                    </Cylinder>
                </group>

                {/* ARMS */}
                <group position={[-0.55, 0.2, 0]}>
                    <RoundedBox args={[0.2, 0.6, 0.2]} radius={0.05}>
                        <meshStandardMaterial color={bodyColor} />
                    </RoundedBox>
                </group>
                <group position={[0.55, 0.2, 0]}>
                    <RoundedBox args={[0.2, 0.6, 0.2]} radius={0.05}>
                        <meshStandardMaterial color={bodyColor} />
                    </RoundedBox>
                </group>

            </Float>

            <Sparkles count={30} scale={5} size={4} speed={0.4} opacity={0.5} position={[1.8, 0, 0]} color={accentColor} />
        </group>
    );
};

const Robot = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`robot-wrapper ${mounted ? 'visible' : ''}`}>
            {/* Increased FOV to see more width, preventing clipping at the edges */}
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }} style={{ pointerEvents: 'auto' }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

                {/* Robot Scene */}
                <RobotCharacter />

            </Canvas>
        </div>
    );
};

export default Robot;
