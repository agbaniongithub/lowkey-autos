'use client'

// pages/contact.tsx
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons



export default function Contact() {
  return (
    <section
      className='relative min-h-screen bg-cover bg-center flex flex-col items-center text-white pt-[10rem] pb-[13rem] px-6'
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl space-y-12 text-gray-200">
        
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">We&apos;d love to hear from you! Reach out for any inquiries or assistance.</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Our Contact Information</h2>
          <div className="flex flex-col items-center space-y-3 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt size={20} className="text-red-500" />
              <span>+2347036953374</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope size={20} className="text-red-500" />
              <span>info@lowkeyautos.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt size={20} className="text-red-500" />
              <span>123 Auto Avenue, Sabo, Yaba, Lagos, Nigeria</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="space-y-6 bg-gray-100/20 p-8 rounded-lg shadow-md backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-center text-white">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Your Message</label>
              <textarea
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
