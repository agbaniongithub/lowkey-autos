// components/Collections.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const cars = [
  {
    name: "2018 Toyota Corolla",
    image: "/corollacar.png",
    description: "Reliability, good fuel economy, and spacious interior.",
    price: '12,000,000',
  },
  {
    name: "2018 Lexus RX300",
    image: "/lexuscar.png",
    description: "Luxury and sophistication in every detail.",
    price: "17,000,000",
  },
];

const Collections = () => {
  return (
    <section id='collection'className="bg-background bg-cover bg-center text-background">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-muted-foreground tracking-wider px-2">
        Our Exclusive Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-20">
        {cars.map((car, index) => (
          <motion.div
            key={index}
            className="collection-item bg-gradient-to-bl from-blue-900 via-teal-800 to-blue-700 p-8 rounded-xl shadow-2xl backdrop-blur-xl group hover:scale-105 transition-all duration-300 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={300}
                className="rounded-lg group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold mb-2 text-gold">{car.name}</h3>
              <p className="text-gray-300 mb-4">{car.description}</p>
              <p className="text-2xl font-bold text-gold mb-6">&#8358;{car.price}</p>
              <Button className="bg-primary text-white px-6 py-3 rounded-full transition-transform transform hover:scale-110">
                Book A Test Drive
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
