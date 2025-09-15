import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-black/95 border-t border-mint/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-1 pb-6 md:pb-0 border-b md:border-b-0 border-gray-800/30">
            <Link href="/" className="flex items-center gap-3 mb-3 md:mb-4">
              <Image
                src="/Asset 1.svg"
                alt="Suubee Portfolios Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <div className="logo-text text-xl tracking-tight text-gray-400">
                <span className="font-semibold">suubee</span>
                <span className="font-regular"> portfolios</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-3 md:mb-4 mr-0 md:mr-12">
              Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 md:mr-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <Link href="mailto:info@suubee.com" className="hover:text-mint">
                <span>info@suubee.com</span>
              </Link>
            </p>
          </div>

          <div className="pb-6 md:pb-0 border-b md:border-b-0 border-gray-800/30">
            <h3 className="font-semibold mb-3 md:mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-mint text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/strategy" className="text-gray-400 hover:text-mint text-sm">
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-mint text-sm">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-mint text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="pb-6 md:pb-0 border-b md:border-b-0 border-gray-800/30">
            <h3 className="font-semibold mb-3 md:mb-4 text-gray-300">Legal</h3>
            <ul className="space-y-1.5 md:space-y-2">

              <li>
                <Link href="/tos" className="text-gray-400 hover:text-mint text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-mint text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-mint text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-gray-300">Connect With Us</h3>
            <div className="flex gap-4 mb-4 md:mb-6">
              <Link href="https://www.linkedin.com/company/waimak-asset-management" className="text-gray-400 hover:text-mint" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="https://suubee.substack.com/" className="text-gray-400 hover:text-mint" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor">
                  <path d="M22.539 8.242H1.46V5.406H22.539V8.242zM1.46 10.812H22.539V24H1.46V10.812zM22.539 0H1.46v2.836H22.539V0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-3 md:mt-4 leading-relaxed">
              Authorised Representative No. 1262749 of Sanlam Private Wealth Pty Ltd which holds Australian Financial Services License number 337927
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 