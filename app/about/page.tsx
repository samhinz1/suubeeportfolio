"use client"
import Layout from "@/components/Layout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-32 pb-16 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0c0c0c] leading-[1.1] tracking-tight">About Us</h1>
              <p className="text-gray-700 text-lg md:text-xl">
              With over 40+ years of combined experience in capital markets, the Suubee Portfolios team has the experience to navigate all market environments.
              Our goal is to build long-term wealth for our clients while developing relationships built off trust, integrity and transparency.
              </p>
            </header>
          </div>
        </section>

        {/* Our Team */}
        <section className="container mx-auto px-4 pt-8 pb-24 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10">
            <div className="bg-white rounded-2xl p-6 md:p-10 ring-1 ring-gray-100">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0c0c0c]">Our Team</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* George Rolleston */}
                <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src="/teamphotos/georgephoto.png"
                      alt="George Rolleston - Founder & Portfolio Manager"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0c0c0c]">George Rolleston</h3>
                    <p className="text-sm text-gray-600 mb-3">Founder &amp; Portfolio Manager</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Founded by George Rolleston (MAPP FIN) B Bus (Law), who has over 18 years of
                      experience in financial markets. George sits on a number of boards in both the
                      public and private markets and is the cornerstone investor in Suubee Portfolios.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="mailto:george@suubee.com?subject=Enquiry%20for%20George%20Rolleston"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="Email George Rolleston"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/george-rolleston-b27b23109/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="George Rolleston on LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>

                {/* Sam Hinz */}
                <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src="/teamphotos/samphoto.png"
                      alt="Sam Hinz - US Portfolio Manager"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0c0c0c]">Sam Hinz</h3>
                    <p className="text-sm text-gray-600 mb-3">US Portfolio Manager</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Sam Hinz (B Bus, Economics &amp; Finance) was a founding team member alongside George.
                      Now based in London, Sam leads our US &amp; European operations, enabling Suubee Portfolios
                      to provide comprehensive real-time service across global markets.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="mailto:sam@suubee.com?subject=Enquiry%20for%20Sam%20Hinz"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="Email Sam Hinz"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/samhinz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="Sam Hinz on LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>

                {/* Phil Hall */}
                <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src="/teamphotos/philphoto.png"
                      alt="Phil Hall - General Manager"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0c0c0c]">Phil Hall</h3>
                    <p className="text-sm text-gray-600 mb-3">General Manager</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      With over a decade of experience in financial markets, Phil (B.Eng (Hons), MAICD)
                      combines deep technical insight with strong fundamental expertise. Based in Australia,
                      he has been instrumental in the development of the Suubee Portfolios platform.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="mailto:phil@suubee.com?subject=Enquiry%20for%20Phil%20Hall"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="Email Phil Hall"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hallph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-2.5 rounded-full transition-all duration-200"
                        aria-label="Phil Hall on LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}