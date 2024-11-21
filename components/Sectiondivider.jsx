'use client'

// components/VisualAppeal.js
import Image from 'next/image';
import { motion } from 'framer-motion';

const VisualAppeal = () => {
  return (
    <>
   
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-background flex justify-center items-center text-muted-foreground">
      <div className="grid grid-cols-2 grid-rows-1 gap-6 w-full max-w-5xl">
        {/* Top Left - Text */}
        <motion.div
          className="flex items-center justify-center p-8 rounded-lg "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h3 className="text-2xl font-bold">Premium Service Guaranteed. Buy, Sell and Trade at our dealership</h3>
        </motion.div>
        {/* Top Right - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Image src="/premium.png" alt="Luxury Car 1" layout="responsive" width={500} height={400} className="rounded-lg" />
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default VisualAppeal;