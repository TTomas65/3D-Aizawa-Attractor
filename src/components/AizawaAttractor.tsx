import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function AizawaAttractor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Aizawa Attractor parameters
    const a = 0.95;
    const b = 0.7;
    const c = 0.6;
    const d = 3.5;
    const e = 0.25;
    const f = 0.1;

    // Generate points
    const points: THREE.Vector3[] = [];
    let x = 0.1;
    let y = 0;
    let z = 0;
    const dt = 0.01;
    const numPoints = 100000;

    for (let i = 0; i < numPoints; i++) {
      // Aizawa system equations
      const dx = (z - b) * x - d * y;
      const dy = d * x + (z - b) * y;
      const dz = c + a * z - z * z * z / 3 - (x * x + y * y) * (1 + e * z) + f * z * x * x * x;

      x += dx * dt;
      y += dy * dt;
      z += dz * dt;

      points.push(new THREE.Vector3(x, y, z));
    }

    // Create geometry
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create gradient colors
    const colors = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      colors[i * 3] = 0.5 + 0.5 * Math.sin(t * 5);     // R
      colors[i * 3 + 1] = 0.5 + 0.5 * Math.cos(t * 3); // G
      colors[i * 3 + 2] = 0.5 + 0.5 * Math.sin(t * 7); // B
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material with vertex colors
    const material = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    // Create points system
    const pointSystem = new THREE.Points(geometry, material);
    scene.add(pointSystem);

    // Position camera
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      pointSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    // Handle window resize
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen bg-black" />;
}