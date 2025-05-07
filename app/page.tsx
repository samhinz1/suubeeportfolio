import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import PortfolioCard from "@/components/portfolio-card"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"
import Image from "next/image"

export default function Home() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />

      {/* Header */}
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
              Register
            </Button>

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
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,253,173,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(241,140,31,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-mint">Suubee Portfolios</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                A Future Of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">
                  Financial Freedom
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Expertly managed investment portfolios designed to help you achieve your financial goals with confidence
                and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button className="group flex items-center gap-2 text-base px-6 py-6 bg-mint text-black hover:bg-mint/90 rounded-full transition-all">
                  Open an Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="text-base px-6 py-6 bg-transparent border border-orange/50 text-white hover:bg-orange/10 rounded-full transition-all"
                >
                  Explore Portfolios
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
                {/* First blob layer - larger and more pronounced */}
                <div 
                  className="absolute inset-0 rounded-[70%_30%_20%_80%/60%_30%_70%_40%] bg-gradient-to-br from-mint via-orange/70 to-mint/90 blur-3xl opacity-80"
                  style={{
                    animation: "blob 6s infinite alternate",
                    transform: "scale(1.2)"
                  }}
                ></div>
                
                {/* Second blob layer - with more contrast */}
                <div 
                  className="absolute inset-0 rounded-[30%_70%_80%_20%/30%_80%_20%_70%] bg-gradient-to-br from-orange/80 via-mint/60 to-orange/80 blur-3xl opacity-70"
                  style={{
                    animation: "blob 7s infinite alternate-reverse",
                    animationDelay: "0.5s",
                    transform: "scale(1.1) rotate(15deg)"
                  }}
                ></div>
                
                {/* Third blob layer for extra effects */}
                <div 
                  className="absolute inset-0 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-mint/60 to-orange/60 blur-2xl opacity-60"
                  style={{
                    animation: "blob 8s infinite alternate",
                    animationDelay: "1s",
                    transform: "scale(0.9) rotate(-10deg)"
                  }}
                ></div>
                
                {/* Fourth blob layer for depth in center */}
                <div 
                  className="absolute inset-0 rounded-[55%_45%_40%_60%/50%_40%_60%_50%] bg-gradient-to-br from-mint/70 to-orange/70 blur-3xl opacity-50"
                  style={{
                    animation: "blob 9s infinite alternate-reverse",
                    animationDelay: "1.5s",
                    transform: "scale(0.7)"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-gray-400">
          <span>Scroll to explore</span>
          <div className="w-6 h-10 border border-gray-500 rounded-full flex items-center justify-center p-1">
            <div className="w-1 h-1 bg-mint rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Options Section */}
      <section id="portfolios" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(57,253,173,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Geographically diversified portfolios, with a focus on either US, or Australian equities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <PortfolioCard
              title="US Leaders Portfolio"
              subtitle="Option One"
              description="A strategic portfolio focused on leading US companies, offering exposure to innovative and high-growth sectors of the American market."
              iconSrc={`${basePath}/icons/conservative.svg`}
              featured={true}
              color="orange"
            />

            <PortfolioCard
              title="AU Leaders Portfolio"
              subtitle="Option Two"
              description="A carefully curated portfolio of top Australian companies, providing strong exposure to the local market with a focus on stability and growth."
              iconSrc={`${basePath}/icons/balanced.svg`}
              color="mint"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(241,140,31,0.1),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Active Momentum-Driven Investment Strategy</h2>
              <p className="text-gray-300 mb-8">
                Our investment portfolios are designed to gain exposure to a list of our leading names and themes. This list is actively managed and monitored, focusing on high growth opportunities while maintaining active risk management for optimal performance.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 9L12 5L16 9"
                        stroke="#39FDAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5V15"
                        stroke="#39FDAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 19H4"
                        stroke="#39FDAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Actively Managed</h3>
                    <p className="text-gray-400">
                      Dedicated professionals with years of experience to ensure you are getting exposure to the right names, at the right times.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#F18C1F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="#F18C1F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Managed Account</h3>
                    <p className="text-gray-400">
                      An individually managed account means your investments are always held in your name.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#39FDAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="18" x2="12" y2="18" stroke="#39FDAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                    <p className="text-gray-400">
                      Stay connected and updated with our mobile app available on IOS & Play Store.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-orange text-black hover:bg-orange/90 flex items-center gap-2">
                  View Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(57,253,173,0.08),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-black to-black/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-mint/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of investors who trust Suubee Portfolios to help them achieve their financial goals.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="w-full md:w-2/3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <select className="bg-black/50 border border-mint/30 rounded-md px-4 py-3 text-white w-full focus:outline-none focus:ring-2 focus:ring-mint">
                    <option value="" disabled selected>
                      I Want To Learn More About
                    </option>
                    <option value="conservative">Conservative Portfolio</option>
                    <option value="balanced">Balanced Portfolio</option>
                    <option value="aggressive">Aggressive Portfolio</option>
                    <option value="custom">Custom Solutions</option>
                  </select>
                  <Button className="bg-orange hover:bg-orange/90 text-black px-6 py-3 whitespace-nowrap">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="#contact"
                className="flex items-center gap-2 text-mint hover:text-mint/80 transition-colors group"
              >
                <span>Chat With Us Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-mint/10">
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
              <p className="text-gray-400 text-sm">
                Building financial futures through expert portfolio management and innovative investment solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Portfolios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Investment Approach
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Disclaimers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-mint text-sm">
                    Regulatory Information
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">123 Financial District</li>
                <li className="text-gray-400 text-sm">Melbourne, VIC 3000</li>
                <li className="text-gray-400 text-sm">contact@suubee.com</li>
                <li className="text-gray-400 text-sm">(03) 9637 1608</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-mint/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Suubee Portfolios. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-mint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-mint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-mint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-mint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
