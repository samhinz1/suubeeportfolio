import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5] border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src={`${basePath}/Asset 1.svg`}
            alt="Suubee Portfolios Logo"
            className="w-6 h-6 object-contain"
          />
          <div className="logo-text text-2xl tracking-tight text-[#0c0c0c]">
            <span className="font-semibold">suubee</span>
            <span className="font-regular"> portfolios</span>
          </div>
        </Link>

        {/* Main Navigation
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-mint transition-colors"
          >
            Home
          </Link>
          <Link
            href="/strategy"
            className="text-sm font-medium text-gray-700 hover:text-mint transition-colors"
          >
            Our Strategy
          </Link>
          <Link
            href="#portfolios"
            className="text-sm font-medium text-gray-700 hover:text-mint transition-colors"
          >
            Portfolios
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-mint transition-colors"
          >
            Contact
          </Link>
        </nav> */}

        <div className="flex items-center gap-4">
          
          <Link
            href="/login"
            className="hidden md:flex text-sm font-medium px-4 py-2 border border-[#0c0c0c] rounded-full text-[#0c0c0c] hover:bg-gray-100 transition-all items-center gap-2"
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
          <Link href="/register" className="hidden md:block">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-mint to-mint/80 text-black hover:from-mint/90 hover:to-mint/70 rounded-full">
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
          <button 
            className="md:hidden text-[#0c0c0c]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#f5f5f5] border-t border-gray-200`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 text-[#0c0c0c] hover:text-mint transition-colors"
            >
              Home
            </Link>
            <Link
              href="/strategy"
              className="text-sm font-medium py-2 text-[#0c0c0c] hover:text-mint transition-colors"
            >
              Our Strategy
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 text-[#0c0c0c] hover:text-mint transition-colors"
            >
              Contact
            </Link>
            
            {/* Added Auth Links to Mobile Menu */}
            <div className="border-t border-gray-200 mt-2 pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                className="text-sm font-medium py-2 text-[#0c0c0c] hover:text-mint transition-colors flex items-center justify-center gap-2 border border-[#0c0c0c] rounded-full px-4 hover:bg-gray-100"
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
              <Link
                href="/register"
                className="text-sm font-medium py-2 bg-gradient-to-r from-mint to-mint/80 text-black hover:from-mint/90 hover:to-mint/70 rounded-full flex items-center justify-center gap-2"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 