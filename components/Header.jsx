import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa"; // Import icons for navigation


export default function Header() {
  return (
    <header className={` z-20 fixed top-0 w-full bg-background backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/70 border-t-4 border-b-4 border-dashed border-primary`}>
      <div className="flex justify-between items-center px-6 py-3 max-w-screen-xl mx-auto relative">
        
        {/* Logo and Branding */}
        <section className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Lowkey Autos" 
            width={90} 
            height={90} 
            priority
          />
          <div className="text-lg font-semibold tracking-wide flex flex-col">
            <span className="text-primary text-xs md:text-sm">⚠️ We Buy, We Sell, We Swap</span>
            <span className="text-primary text-xs md:text-sm">⚠️ Grade A Pre-Owned Cars</span>
            <span className="text-primary text-xs md:text-sm">⚠️ Foreign Used Cars</span>
          </div>
        </section>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition duration-200">
            <FaHome size={18} />
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2 text-foreground hover:text-primary transition duration-200">
            <FaInfoCircle size={18} />
            <span>About</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 text-foreground hover:text-primary transition duration-200">
            <FaPhoneAlt size={18} />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent className="bg-background border border-primary rounded shadow-lg text-primary flex flex-col items-center space-y-8 p-6">
              <SheetHeader className="mb-4 text-center">
                <SheetTitle className="text-3xl font-bold text-foreground">Navigation</SheetTitle>
                <SheetDescription className="text-primary">Explore our services</SheetDescription>
              </SheetHeader>
              <nav className="space-y-2 text-lg text-center">
                <Link href="/" className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-foreground transition duration-300">
                  <FaHome size={18} />
                  <span>Home</span>
                </Link>
                <Link href="/about" className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-white transition duration-300">
                  <FaInfoCircle size={18} />
                  <span>About</span>
                </Link>
                <Link href="/contact" className="flex items-center space-x-2 w-full py-2 px-4 text-foreground rounded hover:bg-red-500 hover:text-white transition duration-300">
                  <FaPhoneAlt size={18} />
                  <span>Contact</span>
                </Link>
              </nav>
              <div className="mt-8 text-sm text-gray-400">© 2024 Lowkey Autos. All rights reserved.</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
