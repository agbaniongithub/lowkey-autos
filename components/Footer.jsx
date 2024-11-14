// components/Footer.tsx

import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='z-10 fixed bottom-0 w-full bg-gray-800 text-background text-sm p-4 md:p-6 shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-gray-800/60'>
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Location Information */}
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt size={24} className="text-primary" />
          <p className="leading-relaxed text-background">
            11 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-3">
          <FaPhoneAlt size={24} className="text-primary" />
          <p className="leading-relaxed text-background">+2347036953374</p>
        </div>

        {/* Social Media Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://wa.link/8u8a22"
              rel="noreferrer"
              target="_blank"
              className="text-background hover:text-primary/80 transition duration-200 transform hover:scale-110"
            >
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lowkeyautos/"
              rel="noreferrer"
              target="_blank"
              className="text-background hover:text-primary/80 transition duration-200 transform hover:scale-110"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={28} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
