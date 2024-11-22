// components/Testimonials.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const testimonials = [
  {
    carSold: "2016 Mercedes C300",
    videoSrc: "https://www.instagram.com/p/DBjSPdyisC3/embed",
  },
  {
    carSold: "2015 Lexus IS250",
    videoSrc: "https://www.instagram.com/reel/C_d3VGHue6t/embed",
  },
  {
    carSold: "2015 Lexus NX 200T",
    videoSrc: "https://www.instagram.com/reel/C-0GhH9ieku/embed",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonial' className="bg-background pt-20 min-h-screen bg-cover bg-center text-background pb-[13rem]">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-muted-foreground tracking-wider px-2">
        Customer Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="block bg-gradient-to-bl from-blue-900 via-teal-800 to-blue-700 p-8 rounded-xl shadow-2xl backdrop-blur-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <iframe
              src={testimonial.videoSrc}
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              className="rounded-lg mb-4"
            ></iframe>
            <p className="text-lg font-bold text-background text-center">
              Sold: {testimonial.carSold}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
