// components/Footer.tsx

import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Footer() {
  return (
    <footer className={`${poppins.className} fixed bottom-0 z-10 w-full text-foreground text-xs p-4 md:p-6 shadow-lg backdrop-blur-lg supports-[backdrop-filter]:bg-background/60`}>
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-1">
        
        {/* Location Information */}
        <div className="flex items-center gap-2 text-center">
          <FaMapMarkerAlt size={12} className="text-primary" />
          <p className="leading-relaxed">
            11 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          <FaPhoneAlt size={12} className="text-primary" />
          <p className="leading-relaxed">+2347036953374</p>
        </div>

        {/* Social Media Links */}
        <ul className="flex gap-4">
          <li>
            <a
              href="https://wa.link/8u8a22"
              rel="noreferrer"
              target="_blank"
              className="hover:text-primary/80 transition duration-200 transform hover:scale-110"
            >
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lowkeyautos/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-primary/80 transition duration-200 transform hover:scale-110"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
        <p>Lowkey Autos &copy;2024</p>
      </div>
    </footer>
  );
}
