'use client'

// components/Main.tsx
import { motion } from 'framer-motion';
import { FaCar, FaHandshake, FaExchangeAlt } from 'react-icons/fa';

export default function Main() {
  return (
    <section className='relative min-h-screen bg-cover bg-center flex flex-col items-center text-white pt-[10rem] pb-[13rem]' style={{ backgroundImage: "url('/background.jpg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Hero Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          duration: 0.8,
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
        >
          Discover Your Dream Car
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 font-light text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 20,
            delay: 0.4,
          }}
        >
          Buy, Sell, and Swap Quality Cars
        </motion.p>

        <motion.a
          href="#showroom"
          className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            delay: 0.6,
          }}
        >
          Visit Our Dealership Today
        </motion.a>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="relative z-10 mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 px-6 max-w-5xl text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Buy Cars */}
        <motion.div
          className="bg-white/20 backdrop-blur-md p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
          }}
        >
          <FaCar size={40} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Buy a Car</h3>
          <p className="text-gray-300">
            Find your ideal car with our wide selection of quality vehicles at unbeatable prices.
          </p>
        </motion.div>

        {/* Sell Cars */}
        <motion.div
          className="bg-white/20 backdrop-blur-md p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
          }}
        >
          <FaHandshake size={40} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Sell Your Car</h3>
          <p className="text-gray-300">
            Get the best deal when you sell your car to us, hassle-free and convenient.
          </p>
        </motion.div>

        {/* Swap Cars */}
        <motion.div
          className="bg-white/20 backdrop-blur-md p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
          }}
        >
          <FaExchangeAlt size={40} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Swap a Car</h3>
          <p className="text-gray-300">
            Trade in your current vehicle for another from our extensive selection.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
