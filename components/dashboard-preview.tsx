"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PortfolioData {
  date: string
  value: number
  return: number
  dateParts: {
    day: number
    month: number
    year: number
  }
}

interface DashboardPreviewProps {
  selectedPortfolio: string
  onPortfolioChange?: (portfolio: string) => void
}

export default function DashboardPreview({ 
  selectedPortfolio = "us",
  onPortfolioChange
}: DashboardPreviewProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([])
  
  const portfolioOptions = [
    { value: "au", label: "AU Leaders", flag: "/australiaflag.svg" },
    { value: "au-resources", label: "AU Resources", flag: "/australiaflag.svg" },
    { value: "us", label: "US Leaders", flag: "/usflag.png" },
    { value: "us-resources", label: "US Resources", flag: "/usflag.png" }
  ]
  useEffect(() => {
    // Load and parse CSV data based on selected portfolio
    let dataFile = ""
    switch (selectedPortfolio) {
      case "us":
        dataFile = "/data/suubee performance data.csv"
        break
      case "au":
        dataFile = "/data/AULeaders.csv"
        break
      case "au-resources":
        dataFile = "/data/AU Resources Performance.csv"
        break
      case "us-resources":
        dataFile = "/data/US Resources Performance.csv"
        break
      default:
        dataFile = "/data/suubee performance data.csv"
    }
    
    fetch(dataFile)
      .then(response => response.text())
      .then(csvData => {
        // Split the CSV into lines and remove the header
        const lines = csvData.split('\n').slice(1)
        
        // Parse each line
        const parsedData = lines
          .filter(line => line.trim() !== '') // Remove empty lines
          .map(line => {
            const [date, dailyChange, cumulativeChange] = line.split(',')
            // Handle cases where cumulativeChange might be empty or not a valid number
            // Remove percentage sign if present and parse as float
            let parsedCumulativeChange = 0
            if (cumulativeChange && cumulativeChange.trim() !== '') {
              const cleanValue = cumulativeChange.replace('%', '')
              parsedCumulativeChange = !isNaN(parseFloat(cleanValue)) ? parseFloat(cleanValue) : 0
            }
            
            return {
              date: date,
              value: parsedCumulativeChange + 100, // Convert percentage to actual value
              return: parsedCumulativeChange, // Store cumulative change instead of daily change
              // Store the date parts for easier access
              dateParts: {
                day: parseInt(date.split('/')[0]),
                month: parseInt(date.split('/')[1]),
                year: parseInt(date.split('/')[2])
              }
            }
          })
        
        setPortfolioData(parsedData)
      })
      .catch(error => {
        console.error("Error loading portfolio data:", error);
        setPortfolioData([]);
      })
  }, [selectedPortfolio]) // Re-fetch when selected portfolio changes

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })
  }, [controls])

  // Listen for custom setPortfolio event
  useEffect(() => {
    // Event handler to change the portfolio when triggered from external components
    const handleSetPortfolio = (event: CustomEvent) => {
      if (event.detail?.portfolio && onPortfolioChange) {
        onPortfolioChange(event.detail.portfolio);
      }
    };

    // Add event listener
    window.addEventListener('setPortfolio', handleSetPortfolio as EventListener);

    // Cleanup function
    return () => {
      window.removeEventListener('setPortfolio', handleSetPortfolio as EventListener);
    };
  }, [onPortfolioChange]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0c0c0c]/90 border border-mint/20 p-3 rounded-lg shadow-lg">
          <p className="text-mint text-sm">{label}</p>
          <p className="text-white font-medium">${payload[0].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  if (portfolioData.length === 0) {
    return <div className="p-6 text-center text-white bg-[#0c0c0c] rounded-xl border border-gray-700">
      Error loading portfolio data. Please try again later.
    </div>
  }

  const lastDataPoint = portfolioData[portfolioData.length - 1]
  const firstDataPoint = portfolioData[0]
  // Parse the date correctly from DD/MM/YYYY format
  const [day, month, year] = lastDataPoint.date.split('/')
  const formattedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  // Parse first data point date for inception date
  const [firstDay, firstMonth, firstYear] = firstDataPoint.date.split('/')
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayWithSuffix = (day: string): string => {
    const suffix = ['th', 'st', 'nd', 'rd']
    const relevantDigits = (parseInt(day) < 30) ? parseInt(day) % 20 : parseInt(day) % 30
    const suffixIndex = (relevantDigits <= 3) ? relevantDigits : 0
    return `${parseInt(day)}${suffix[suffixIndex]}`
  }
  const inceptionDateStr = `${monthNames[parseInt(firstMonth) - 1]} ${dayWithSuffix(firstDay)} ${firstYear}`
  
  // Calculate cumulative return as a percentage
  const cumulativeReturn = ((lastDataPoint.value - firstDataPoint.value) / firstDataPoint.value) * 100
  
  // Calculate YTD return - find first data point from current year
  const currentYear = new Date().getFullYear().toString()
  let firstDataPointOfYear = portfolioData[0]
  
  for (let i = 0; i < portfolioData.length; i++) {
    const [pointDay, pointMonth, pointYear] = portfolioData[i].date.split('/')
    if (pointYear === currentYear && pointMonth === '01' && pointDay === '01') {
      firstDataPointOfYear = portfolioData[i]
      break
    }
    // If we can't find exact Jan 1st, use the first entry of current year
    if (pointYear === currentYear) {
      firstDataPointOfYear = portfolioData[i]
      break
    }
  }
  
  // Ensure we have valid values to calculate YTD return
  const ytdReturn = firstDataPointOfYear.value !== 0 ? 
    ((lastDataPoint.value - firstDataPointOfYear.value) / firstDataPointOfYear.value) * 100 : 0
  
  // Create a complete timeline with all months represented
  const createCompleteTimeline = () => {
    if (portfolioData.length === 0) return []
    
    const firstPoint = portfolioData[0]
    const lastPoint = portfolioData[portfolioData.length - 1]
    
    // Create a map of existing data points by month-year
    const dataByMonth = new Map()
    portfolioData.forEach(point => {
      const monthKey = `${point.dateParts.year}-${point.dateParts.month.toString().padStart(2, '0')}`
      if (!dataByMonth.has(monthKey)) {
        dataByMonth.set(monthKey, point)
      }
    })
    
    const timeline = []
    let currentYear = firstPoint.dateParts.year
    let currentMonth = firstPoint.dateParts.month
    const endYear = lastPoint.dateParts.year
    const endMonth = lastPoint.dateParts.month
    
    while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
      const monthKey = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`
      
      if (dataByMonth.has(monthKey)) {
        // Use actual data point
        timeline.push(dataByMonth.get(monthKey))
      } else {
        // Create synthetic data point for missing month
        // Find the closest previous data point for value
        let closestValue = 100
        for (let i = portfolioData.length - 1; i >= 0; i--) {
          const point = portfolioData[i]
          if (point.dateParts.year < currentYear || 
              (point.dateParts.year === currentYear && point.dateParts.month < currentMonth)) {
            closestValue = point.value
            break
          }
        }
        
        timeline.push({
          date: `1/${currentMonth.toString().padStart(2, '0')}/${currentYear}`,
          value: closestValue,
          return: 0,
          dateParts: {
            day: 1,
            month: currentMonth,
            year: currentYear
          },
          isSynthetic: true
        })
      }
      
      // Move to next month
      currentMonth++
      if (currentMonth > 12) {
        currentMonth = 1
        currentYear++
      }
    }
    
    return timeline
  }
  
  // Get complete timeline and generate ticks with consistent spacing
  const completeTimeline = createCompleteTimeline()
  const getMonthTicks = () => {
    if (completeTimeline.length === 0) return []
    
    const ticks = []
    const totalMonths = completeTimeline.length
    
    // Determine spacing based on total timeline length
    let tickInterval = 1
    if (totalMonths > 24) tickInterval = 3  // Show every 3 months for 2+ years
    else if (totalMonths > 12) tickInterval = 2  // Show every 2 months for 1+ year
    
    // Generate ticks with consistent spacing, starting from the first month
    for (let i = 0; i < completeTimeline.length; i += tickInterval) {
      ticks.push(completeTimeline[i].date)
    }
    
    return ticks
  }
  
  const monthTicks = getMonthTicks()

  return (
    <div
      ref={containerRef}
      className="group relative rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:translate-y-[-8px] hover:border-mint/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={controls} className="relative">
        {/* Portfolio selector */}
        <div className="bg-[#0c0c0c] px-4 pt-4 pb-2">
          {/* Mobile Dropdown */}
          <div className="flex justify-center md:hidden">
            <Select value={selectedPortfolio} onValueChange={(value) => onPortfolioChange && onPortfolioChange(value)}>
              <SelectTrigger className="w-64 bg-[#161616] border-mint/30 text-white">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Image 
                      src={portfolioOptions.find(opt => opt.value === selectedPortfolio)?.flag || "/usflag.png"} 
                      alt="Flag" 
                      width={16} 
                      height={12}
                      className="rounded-sm"
                    />
                    <span>{portfolioOptions.find(opt => opt.value === selectedPortfolio)?.label || "Select Portfolio"}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-[#161616] border-mint/30">
                {portfolioOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white hover:bg-[#0c0c0c]/90">
                    <div className="flex items-center gap-2">
                      <Image 
                        src={option.flag} 
                        alt="Flag" 
                        width={16} 
                        height={12}
                        className="rounded-sm"
                      />
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Toggle Buttons */}
          <div className="hidden md:flex justify-center">
            <div className="inline-flex flex-wrap items-stretch bg-[#0c0c0c]/80 border border-mint/30 rounded-full overflow-hidden p-1.5 gap-1">
              <button
                className={`px-3 py-1.5 text-xs flex items-center gap-1.5 rounded-full transition-all ${
                  selectedPortfolio === "au" 
                    ? "bg-mint text-black font-medium" 
                    : "text-gray-400 hover:bg-[#0c0c0c]/90"
                }`}
                onClick={() => onPortfolioChange && onPortfolioChange("au")}
              >
                <Image 
                  src="/australiaflag.svg" 
                  alt="AU" 
                  width={16} 
                  height={12}
                  className="rounded-sm"
                />
                <span>AU Leaders</span>
              </button>
              <button
                className={`px-3 py-1.5 text-xs flex items-center gap-1.5 rounded-full transition-all ${
                  selectedPortfolio === "au-resources" 
                    ? "bg-mint text-black font-medium" 
                    : "text-gray-400 hover:bg-[#0c0c0c]/90"
                }`}
                onClick={() => onPortfolioChange && onPortfolioChange("au-resources")}
              >
                <Image 
                  src="/australiaflag.svg" 
                  alt="AU" 
                  width={16} 
                  height={12}
                  className="rounded-sm"
                />
                <span>AU Resources</span>
              </button>
              <button
                className={`px-3 py-1.5 text-xs flex items-center gap-1.5 rounded-full transition-all ${
                  selectedPortfolio === "us" 
                    ? "bg-mint text-black font-medium" 
                    : "text-gray-400 hover:bg-[#0c0c0c]/90"
                }`}
                onClick={() => onPortfolioChange && onPortfolioChange("us")}
              >
                <Image 
                  src="/usflag.png" 
                  alt="United States Flag - US Leaders Portfolio" 
                  width={16} 
                  height={12}
                  className="rounded-sm"
                />
                <span>US Leaders</span>
              </button>
              <button
                className={`px-3 py-1.5 text-xs flex items-center gap-1.5 rounded-full transition-all ${
                  selectedPortfolio === "us-resources" 
                    ? "bg-mint text-black font-medium" 
                    : "text-gray-400 hover:bg-[#0c0c0c]/90"
                }`}
                onClick={() => onPortfolioChange && onPortfolioChange("us-resources")}
              >
                <Image 
                  src="/usflag.png" 
                  alt="United States Flag - US Resources Portfolio" 
                  width={16} 
                  height={12}
                  className="rounded-sm"
                />
                <span>US Resources</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Dashboard UI */}
        <div className="bg-[#0c0c0c] p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
            </div>
          </div>
        </div>

        <div className="bg-[#0c0c0c] p-6">
          {/* Chart Area */}
          <div className="mb-6">
            <div className="h-[300px] w-full bg-[#161616] rounded-lg overflow-hidden relative border border-gray-800">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={portfolioData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FDAD" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#39FDAD" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#666"
                    tickFormatter={(dateStr) => {
                      // Always derive label from the actual tick value to avoid index mismatches
                      const [_, month, year] = String(dateStr).split('/');
                      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      const monthIndex = Math.max(1, Math.min(12, parseInt(month)));
                      const monthName = monthNames[monthIndex - 1];
                      // Include year for January ticks
                      if (monthIndex === 1) {
                        return `${monthName} '${String(year).slice(-2)}`;
                      }
                      return monthName;
                    }}
                    ticks={monthTicks}
                    tick={{ fontSize: 12, fill: "#999" }}
                    minTickGap={5}
                    height={30}
                  />
                  <YAxis 
                    stroke="#39FDAD" 
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    tick={{ fill: "#999" }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#39FDAD"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#39FDAD" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#161616] p-3 rounded-lg border border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Current YTD Performance</div>
              <div className="text-lg font-bold text-white">{ytdReturn >= 0 ? '+' : ''}{ytdReturn.toFixed(1)}%</div>
              <div className="text-xs text-mint">Since January 1st {currentYear}</div>
            </div>
            <div className="bg-[#161616] p-3 rounded-lg border border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Performance Since Inception</div>
              <div className="text-lg font-bold text-white">{isNaN(cumulativeReturn) ? '0.0' : (cumulativeReturn >= 0 ? '+' : '') + cumulativeReturn.toFixed(1)}%</div>
              <div className="text-xs text-mint">
                Since {inceptionDateStr}
              </div>
            </div>
            <div className="bg-[#161616] p-3 rounded-lg border border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Risk Level</div>
              <div className="text-lg font-bold text-white">High</div>
              <div className="text-xs text-orange">Growth Focused</div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="text-xs text-gray-400 bg-[#161616] border border-gray-700 rounded-lg p-3 mt-2">
            <p className="font-medium text-xs mb-1"><strong>Disclaimer:</strong> Performance data shown is based on hypothetical model portfolios tracked and updated daily on Suubeepremium.com. 
            The results assume no fees of any kind (including management, performance, transaction, or other costs). The model portfolios are fully invested (100% long) at all times and rebalanced daily to reflect additions and removals. 
            Real-world portfolios may differ and typically hold only a subset of the model constituents to reduce turnover and transaction costs.
            Past performance is not indicative of future results. Hypothetical or simulated performance has inherent limitations and does not reflect actual trading results.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mint/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      {/* Hover glow effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-mint/5 to-mint/5 opacity-30 pointer-events-none"></div>
      )}
      
      {/* Bottom gradient bar */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-mint transition-all duration-300 rounded-b-lg",
          "group-hover:w-full",
        )}
      ></div>
    </div>
  )
}
