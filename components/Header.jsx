import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa"; // Import icons for navigation
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <header className={`${poppins.className} z-20 fixed top-0 w-full backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 shadow-lg`}>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 max-w-screen-xl mx-auto relative gap-2">
        {/* Logo and Branding */}
        <section className="flex  items-center space-x-2">
          <Image src="/logo.svg" alt="Lowkey Autos" width={120} height={120} priority />
        </section>

        {/* Desktop Navigation */}
        <nav className="flex gap-4 md:gap-8 text-sm md:text-md text-foreground">
          <Link href="/" className="flex items-center hover:text-primary transition duration-200">
            <span>Home</span>
          </Link>
          <Link
            href="#collection"
            className="flex items-center hover:text-primary transition duration-200"
          >
            <span>Collection</span>
          </Link>
          <Link
            href="#testimonial"
            className="flex items-center hover:text-primary transition duration-200"
          >
            <span>Testimonials</span>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {/* <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="p-2 rounded-full bg-primary text-white transition duration-200 hover:bg-primary-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent className="bg-background border border-primary rounded shadow-lg text-primary flex flex-col items-center space-y-8 p-6">
              <SheetHeader className="mb-4 text-center">
                <SheetTitle className="text-3xl font-bold text-foreground">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-primary">
                  Explore our services
                </SheetDescription>
              </SheetHeader>
              <nav className="space-y-2 text-lg text-center">
                <Link
                  href="/"
                  className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-foreground transition duration-300"
                >
                  <FaHome size={18} />
                  <span>Home</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-white transition duration-300"
                >
                  <FaInfoCircle size={18} />
                  <span>About</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-white transition duration-300"
                >
                  <FaPhoneAlt size={18} />
                  <span>Contact</span>
                </Link>
              </nav>
              <div className="mt-8 text-sm text-gray-400">
                © 2024 Lowkey Autos. All rights reserved.
              </div>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
}
