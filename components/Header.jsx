import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <header
      className={`${poppins.className} z-20 fixed top-0 w-full backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 shadow-lg`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 max-w-screen-xl mx-auto relative gap-2">
        {/* Logo and Branding */}
        <section className="flex  items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Lowkey Autos"
            width={120}
            height={120}
            priority
          />
        </section>

        {/* Navigation */}
        <nav className="flex gap-4 md:gap-8 text-sm md:text-md text-foreground">
          {/* <Link
            href="/"
            className="flex items-center hover:text-primary transition duration-200"
          >
            <span>Home</span>
          </Link> */}
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
      </div>
    </header>
  );
}
