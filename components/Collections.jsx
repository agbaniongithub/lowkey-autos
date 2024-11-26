// components/Collections.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { Cormorant_Garamond } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const playfairDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
  display: "swap",
});

const cars = [
  {
    name: " 2012 Toyota Camry Sport",
    images: [
      "/car1/camry1.jpg",
      "/car1/camry2.jpg",
      "/car1/camry3.jpg",
      "/car1/camry4.jpg",
      "/car1/camry5.jpg",
      "/car1/camry6.jpg",
    ],
    description: "V4 engine with Thumbstart Registered in Pristine condition",
    price: "12.5M",
  },
  {
    name: "2016 Lexus RX350",
    images: [
      "/car2/lexus2.jpg",
      "/car2/lexus3.jpg",
      "/car2/lexus4.jpg",
      "/car2/lexus5.jpg",
    ],
    description: "Registered, Barely Used. Full Option.",
    price: "36M",
  },
  {
    name: "2013 Toyota Camry Sport",
    images: [
      "/car3/camry1.jpg",
      "/car3/camry2.jpg",
      "/car3/camry3.jpg",
      "/car3/camry4.jpg",
      "/car3/camry5.jpg",
      "/car3/camry6.jpg",
      "/car3/camry7.jpg",
      "/car3/camry8.jpg",
    ],
    description: "V4 engine with thumbstart. Registered in pristine condition",
    price: "12.5M",
  },
  {
    name: "2013 Toyota Camry SE",
    images: [
      "/car4/camry1.jpg",
      "/car4/camry2.jpg",
      "/car4/camry3.jpg",
      "/car4/camry4.jpg",
      "/car4/camry5.jpg",
    ],
    description: "V4 engine with thumbstart. Registered in pristine condition",
    price: "11.5M",
  },
  {
    name: "2015 Lexus IS250 F Sport",
    images: [
      "/car5/lexus1.jpg",
      "/car5/lexus2.jpg",
      "/car5/lexus3.jpg",
      "/car5/lexus4.jpg",
      "/car5/lexus5.jpg",
      "/car5/lexus6.jpg",
      "/car5/lexus7.jpg",

    ],
    description: "V6 engine with thumbstart. Turbo Exhaust",
    price: "22M",
  },
];



const Collections = () => {
  return (
    <section id="collection" className="bg-background bg-cover bg-center text-background">
      <h2 className={`text-5xl font-bold text-center mb-16 text-muted-foreground tracking-wider px-2`}>
        Our Collection
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
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-lg"
              >
                {car.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={image}
                      alt={`${car.name} - image ${i + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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
