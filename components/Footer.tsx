import Link from "next/link";

export default function Footer() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
  return (
    <footer className="py-12 bg-black/95 border-t border-mint/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src={`${basePath}/suubee-circle.png`}
                alt="Suubee Portfolios Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg">Suubee Portfolios</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 mr-12">
              Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
            </p>
            <p className="text-gray-400 text-sm mb-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>0424 639 003</span>
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@suubee.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                <Link href="about" className="text-gray-400 hover:text-mint text-sm">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="contact" className="text-gray-400 hover:text-mint text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fsg" className="text-gray-400 hover:text-mint text-sm">
                  Financial Services Guide
                </Link>
              </li>
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
                  Disclaimers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
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
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Authorised Representative No. 1262749 of Sanlam Private Wealth Pty Ltd which holds Australian Financial Services License number 337927
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 