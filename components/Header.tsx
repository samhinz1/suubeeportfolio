import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-mint/5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={`${basePath}/suubee-circle.png`}
            alt="Suubee Portfolios Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl tracking-tight">Suubee Portfolios</span>
        </Link>

        {/* Main Navigation
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-mint transition-colors"
          >
            Home
          </Link>
          <Link
            href="/strategy"
            className="text-sm font-medium hover:text-mint transition-colors"
          >
            Our Strategy
          </Link>
          <Link
            href="#portfolios"
            className="text-sm font-medium hover:text-mint transition-colors"
          >
            Portfolios
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-mint transition-colors"
          >
            Contact
          </Link>
        </nav> */}

        <div className="flex items-center gap-4">
          
          <Link
            href="/login"
            className="text-sm font-medium px-4 py-2 border border-mint/30 rounded-full hover:bg-mint/10 transition-all flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Login
          </Link>
          <Link href="/register">
            <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-mint to-mint/80 text-black hover:from-mint/90 hover:to-mint/70 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Sign Up
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Hidden by default */}
      <div className="md:hidden hidden bg-black/80 border-t border-mint/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-mint transition-colors"
            >
              Home
            </Link>
            <Link
              href="/strategy"
              className="text-sm font-medium py-2 hover:text-mint transition-colors"
            >
              Our Strategy
            </Link>
            <Link
              href="#portfolios"
              className="text-sm font-medium py-2 hover:text-mint transition-colors"
            >
              Portfolios
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-mint transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 