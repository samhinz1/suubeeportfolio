import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface PortfolioCardProps {
  title: string
  subtitle: string
  description: string
  iconSrc: string
  featured?: boolean
  color?: "mint" | "orange"
  children?: ReactNode
}

export default function PortfolioCard({
  title,
  subtitle,
  description,
  iconSrc,
  featured = false,
  color = "mint",
  children,
}: PortfolioCardProps) {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
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

  return (
    <div
      className={cn(
        "group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-8px] flex flex-col h-full min-h-[700px]",
        featured
          ? `bg-gradient-to-b from-${color}/20 to-${color}/5 border border-${color}/30`
          : `bg-gradient-to-b from-gray-900/50 to-black border border-gray-800/50 ${currentColor.hoverBorder}`,
      )}
    >
      {featured && (
        <div
          className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${currentColor.bg} text-black text-xs font-medium px-3 py-1 rounded-full`}
        >
          Popular Choice
        </div>
      )}

      <div className="mb-6 flex justify-between items-start">
        <div>
          <p className={`text-sm ${currentColor.text} mb-2`}>{subtitle}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        {iconSrc && (
          iconSrc.endsWith('.svg') || iconSrc.endsWith('.png') ? (
            <div className="w-36 h-24">
              <Image 
                src={iconSrc} 
                alt={title} 
                width={120} 
                height={90}
                className="object-contain filter grayscale transition-all duration-800 group-hover:grayscale-[20%] group-hover:brightness-[80%]"
              />
            </div>
          ) : (
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                featured ? currentColor.iconBg : "bg-gray-800/50",
              )}
            >
              <Image 
                src={iconSrc || `${basePath}/placeholder.svg`} 
                alt={title} 
                width={24} 
                height={24} 
              />
            </div>
          )
        )}
      </div>

      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex-grow">
        {children}
      </div>

      <div className="mt-8 pt-6">
        <Button
          variant={featured ? "default" : "outline"}
          className={cn(
            "w-full justify-between group/btn",
            featured
              ? `bg-gradient-to-r ${currentColor.gradient} text-black hover:from-${color}/90 hover:to-${color}/70`
              : `bg-transparent border-gray-700 ${currentColor.hoverBg} ${currentColor.hoverBorder}`,
          )}
        >
          <span>View Portfolio</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div
        className={cn(
          `absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${currentColor.gradient} transition-all duration-300 rounded-b-lg`,
          "group-hover:w-full",
        )}
      ></div>
    </div>
  )
}
