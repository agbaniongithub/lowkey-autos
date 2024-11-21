"use client";

// components/Main.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";


export default function Main() {
  return (
    <section className='relative min-h-screen bg-hero bg-cover bg-center flex flex-col items-center justify-center py-[10rem] text-white'
    >

      

      {/* Hero Section */}
      <motion.div
        className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl p-12 md:p-20 w-[90%] md:w-[70%] text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* SVG Decorations */}
        {/* <Image
          height={1000}
          width={1000}
          src="/carone.svg"
          alt="Luxury Car Left"
          className="absolute bottom-10 left-[25%]"
        /> */}
        {/* <Image
          height={100}
          width={100}
          src="/carone.svg"
          alt="Luxury Car Right"
          className="absolute -bottom-10 -right-10 w-24 md:w-[20rem] opacity-70"
        /> */}

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover Your Dream Car
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Luxury redefined. Explore our exclusive collection of premium cars to enhance your driving experience.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Button className="px-8 py-4 bg-primary rounded-lg shadow-lg hover:bg-primary/80 transition-transform transform hover:scale-105">
          <a href="#collection">
            Explore Our Collection
          </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
