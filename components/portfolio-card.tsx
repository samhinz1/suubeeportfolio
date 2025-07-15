import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ProductJsonLd } from "./JsonLd"

interface PortfolioCardProps {
  title: string
  subtitle: string
  description: string
  iconSrc: string
  featured?: boolean
  color?: "mint" | "orange"
  children?: ReactNode
  portfolioType?: "us" | "au"
  comingSoon?: boolean
}

export default function PortfolioCard({
  title,
  subtitle,
  description,
  iconSrc,
  featured = false,
  color = "mint",
  children,
  portfolioType = "us",
  comingSoon = false,
}: PortfolioCardProps) {
  // Ref for intersection observer to detect when card is in view
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  // State to track if this is a mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const colorClasses = {
    mint: {
      bg: "bg-mint",
      text: "text-mint",
      border: "border-mint",
      gradient: "from-mint to-mint/80",
      hoverBg: "hover:bg-mint/10",
      hoverBorder: "hover:border-mint/30",
      iconBg: "bg-mint/20",
    },
    orange: {
      bg: "bg-orange",
      text: "text-orange",
      border: "border-orange",
      gradient: "from-orange to-orange/80",
      hoverBg: "hover:bg-orange/10",
      hoverBorder: "hover:border-orange/30",
      iconBg: "bg-orange/20",
    },
  }

  const currentColor = colorClasses[color]
  
  // Apply hover effect if card is in view on mobile or on hover for desktop
  const applyHoverEffect = isMobile && isInView;

  // Function to scroll to performance section and set the correct portfolio
  const scrollToPerformance = () => {
    // Scroll to performance section by finding it in the DOM
    const performanceSections = Array.from(document.querySelectorAll('section'));
    let performanceSection = null;
    
    // Find section with Performance heading
    for (const section of performanceSections) {
      const heading = section.querySelector('h2');
      if (heading && heading.textContent?.includes('Performance')) {
        performanceSection = section;
        break;
      }
    }
    
    if (performanceSection) {
      // Smooth scroll to the performance section
      window.scrollTo({
        top: performanceSection.offsetTop,
        behavior: 'smooth'
      });
      
      // Set the correct portfolio toggle
      if (typeof window !== 'undefined') {
        // We need to wait a bit for the scroll to complete
        setTimeout(() => {
          // Dispatch a custom event that DashboardPreview can listen for
          const event = new CustomEvent('setPortfolio', { 
            detail: { portfolio: portfolioType } 
          });
          window.dispatchEvent(event);
        }, 800);
      }
    }
  };
  
  // Prepare image URL for structured data
  const imageUrl = iconSrc.startsWith('http') 
    ? iconSrc 
    : `https://suubeeportfolio.vercel.app${iconSrc}`;

  return (
    <>
      {/* Add product structured data */}
      <ProductJsonLd
        name={title}
        description={description}
        image={imageUrl}
      />
      
      <div
        ref={cardRef}
        className={cn(
          "group relative rounded-2xl p-6 md:p-8 transition-all duration-300 flex flex-col h-full min-h-[700px]",
          featured
            ? `bg-[#0c0c0c] border border-${color}/30 shadow-lg`
            : `bg-[#0c0c0c] border border-gray-800 shadow-md ${currentColor.hoverBorder}`,
          {
            "translate-y-[-8px]": applyHoverEffect,
            "hover:translate-y-[-8px]": !isMobile
          }
        )}
      >
        {featured && (
          <div
            className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${currentColor.bg} text-black text-xs font-medium px-3 py-1 rounded-full`}
          >
            Popular Choice
          </div>
        )}

        {/* Coming Soon Badge */}
        {comingSoon && (
          <div
            className={cn(
              "absolute -top-3 -right-3 bg-mint text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10",
              "opacity-0 transition-opacity duration-300 transform scale-90",
              "group-hover:opacity-100 group-hover:scale-100"
            )}
          >
            Coming Soon
          </div>
        )}

        <div className="mb-6 flex justify-between items-start">
          <div>
            <p className={`text-sm ${currentColor.text} mb-2`}>{subtitle}</p>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          {iconSrc && (
            iconSrc.endsWith('.svg') || iconSrc.endsWith('.png') ? (
              <div className="w-36 h-24">
                <Image 
                  src={iconSrc} 
                  alt={title} 
                  width={120} 
                  height={90}
                  className={cn(
                    "object-contain grayscale-[60%] brightness-[50%] transition-[filter] duration-1000 ease-in-out",
                    {
                      "grayscale-[20%] brightness-[100%]": applyHoverEffect,
                      "group-hover:grayscale-[20%] group-hover:brightness-[100%]": !isMobile
                    }
                  )}
                />
              </div>
            ) : (
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  featured ? currentColor.iconBg : "bg-gray-800",
                )}
              >
                <Image 
                  src={iconSrc || '/placeholder.svg'} 
                  alt={title} 
                  width={24} 
                  height={24} 
                />
              </div>
            )
          )}
        </div>

        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex-grow">
          {children}
        </div>

        <div className="mt-8 pt-6">
          <div className="flex gap-3">
            <Button
              asChild
              variant={featured ? "default" : "outline"}
              className={cn(
                "flex-1 justify-between group/btn rounded-md relative z-20",
                featured
                  ? `bg-mint text-black hover:bg-mint/90`
                  : `bg-transparent border-gray-500 text-white hover:bg-gray-800`,
              )}
            >
              <Link href="/strategy">
                <span>Our Strategy</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className={cn(
                "flex-1 justify-between group/btn rounded-md relative z-20",
                `bg-transparent border-gray-500 text-white hover:bg-gray-800`,
              )}
              onClick={scrollToPerformance}
            >
              <span>Performance</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
