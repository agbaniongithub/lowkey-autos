'use client'

// pages/about.tsx
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSmile, FaCheckCircle, FaEye } from 'react-icons/fa'; // Import icons


export default function About() {
  return (
    <section
      className='relative min-h-screen bg-cover bg-center flex flex-col items-center text-white pt-[10rem] pb-[13rem] px-6'
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl space-y-12 text-gray-200">
        
        {/* Introduction Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg text-gray-300">Committed to Helping You Find the Perfect Vehicle</p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Established over a decade ago, our dealership has been dedicated to providing top-quality vehicles and exceptional customer service. With a passion for cars and a commitment to our customers, we have grown into a trusted name in the industry, known for our transparency and professionalism.
          </p>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-center">Our Values</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-gray-100/20 p-4 rounded-lg shadow-md backdrop-blur-md flex items-center space-x-3">
              <FaShieldAlt size={24} className="text-primary" />
              <div>
                <h3 className="font-semibold text-white">Integrity</h3>
                <p>We are committed to honesty and transparency in all our transactions.</p>
              </div>
            </li>
            <li className="bg-gray-100/20 p-4 rounded-lg shadow-md backdrop-blur-md flex items-center space-x-3">
              <FaSmile size={24} className="text-primary" />
              <div>
                <h3 className="font-semibold text-white">Customer Satisfaction</h3>
                <p>Our customers are at the heart of everything we do.</p>
              </div>
            </li>
            <li className="bg-gray-100/20 p-4 rounded-lg shadow-md backdrop-blur-md flex items-center space-x-3">
              <FaCheckCircle size={24} className="text-primary" />
              <div>
                <h3 className="font-semibold text-white">Quality Assurance</h3>
                <p>We provide only the best vehicles that meet our high standards.</p>
              </div>
            </li>
            <li className="bg-gray-100/20 p-4 rounded-lg shadow-md backdrop-blur-md flex items-center space-x-3">
              <FaEye size={24} className="text-primary" />
              <div>
                <h3 className="font-semibold text-white">Transparency</h3>
                <p>Every step of our process is open and transparent to ensure trust.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Visit Us CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl text-gray-300 mb-4">Interested in finding out more? Visit our showroom today!</p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/80 text-background font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
