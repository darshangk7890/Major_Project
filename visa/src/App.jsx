import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const yHome = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yAbout = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const yObjectives = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const yContact = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <div ref={ref} className="h-screen w-full overflow-x-hidden bg-gray-900 text-white relative">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Sphere args={[1.5, 100, 100]} position={[0, 0, -3]}>
          <MeshDistortMaterial color="#1E90FF" attach="material" distort={0.6} speed={2} />
        </Sphere>
      </Canvas>
      
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-4 text-center text-white z-50">
        <a href="#home" className="mx-4">Home</a>
        <a href="#about" className="mx-4">About Us</a>
        <a href="#objectives" className="mx-4">Objectives</a>
        <a href="#contact" className="mx-4">Contact Us</a>
      </nav>
      
      <section id="home" className="h-screen flex items-center justify-center relative z-10">
        <motion.h1 style={{ y: yHome }} className="text-5xl font-bold">Welcome to Our Website</motion.h1>
      </section>
      
      <section id="about" className="h-screen flex items-center justify-center relative z-10">
        <motion.h1 style={{ y: yAbout }} className="text-5xl font-bold">About Us</motion.h1>
      </section>
      
      <section id="objectives" className="h-screen flex items-center justify-center relative z-10">
        <motion.h1 style={{ y: yObjectives }} className="text-5xl font-bold">Our Objectives</motion.h1>
      </section>
      
      <section id="contact" className="h-screen flex items-center justify-center relative z-10">
        <motion.h1 style={{ y: yContact }} className="text-5xl font-bold">Contact Us</motion.h1>
      </section>
    </div>
  );
}
