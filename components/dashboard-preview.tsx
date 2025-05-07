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
  
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';

  useEffect(() => {
    // Load and parse CSV data based on selected portfolio
    const dataFile = selectedPortfolio === "us" 
      ? `${basePath}/data/suubee performance data.csv`
      : `${basePath}/data/suubee performance data.csv` // Replace with AU data file when available
    
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
            return {
              date: date,
              value: parseFloat(cumulativeChange) + 100, // Convert percentage to actual value
              return: parseFloat(cumulativeChange), // Store cumulative change instead of daily change
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
        // Provide fallback data in case the CSV loading fails
        const fallbackData = [
          { date: "1/1/2023", value: 100000, return: 0, dateParts: { day: 1, month: 1, year: 2023 } },
          { date: "1/2/2023", value: 105000, return: 5, dateParts: { day: 1, month: 2, year: 2023 } },
          { date: "1/3/2023", value: 110000, return: 10, dateParts: { day: 1, month: 3, year: 2023 } },
          { date: "1/4/2023", value: 108000, return: 8, dateParts: { day: 1, month: 4, year: 2023 } },
          { date: "1/5/2023", value: 112000, return: 12, dateParts: { day: 1, month: 5, year: 2023 } },
          { date: "1/6/2023", value: 115000, return: 15, dateParts: { day: 1, month: 6, year: 2023 } },
        ];
        setPortfolioData(fallbackData);
      })
  }, [selectedPortfolio, basePath]) // Re-fetch when selected portfolio changes

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 border border-mint/20 p-3 rounded-lg shadow-lg">
          <p className="text-mint text-sm">{label}</p>
          <p className="text-white font-medium">${payload[0].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  if (portfolioData.length === 0) {
    return <div>Loading...</div>
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
  
  const ytdReturn = ((lastDataPoint.value - firstDataPointOfYear.value) / firstDataPointOfYear.value) * 100
  
  // Generate an array of unique month labels, filling in any gaps
  const getUniqueMonthLabels = () => {
    // Create a map to store one entry per month/year combination
    const uniqueMonthsMap = new Map()
    
    // Track all year-month combinations in data
    portfolioData.forEach(point => {
      const monthKey = `${point.dateParts.year}-${String(point.dateParts.month).padStart(2, '0')}`
      if (!uniqueMonthsMap.has(monthKey)) {
        uniqueMonthsMap.set(monthKey, {
          monthIndex: point.dateParts.month - 1,
          year: point.dateParts.year,
          dataIndex: portfolioData.indexOf(point),
          monthKey
        })
      }
    })
    
    // Convert to array and sort chronologically
    const labels = Array.from(uniqueMonthsMap.values())
      .sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year
        return a.monthIndex - b.monthIndex
      })
    
    // If we have at least two data points, fill in any missing months
    if (labels.length >= 2) {
      const filledLabels = []
      const startLabel = labels[0]
      const endLabel = labels[labels.length - 1]
      
      // Starting from the first month in the data to the last
      let currentYear = startLabel.year
      let currentMonth = startLabel.monthIndex
      
      while (currentYear < endLabel.year || 
            (currentYear === endLabel.year && currentMonth <= endLabel.monthIndex)) {
        // Create the key for this month to see if we have data
        const monthKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`
        
        // If we have an existing data point for this month, use it
        if (uniqueMonthsMap.has(monthKey)) {
          filledLabels.push(uniqueMonthsMap.get(monthKey))
        } else {
          // Otherwise create a placeholder using the nearest data point
          // Find the nearest data point before this date
          let nearestIndex = 0
          for (let i = 0; i < portfolioData.length; i++) {
            if (
              portfolioData[i].dateParts.year < currentYear || 
              (portfolioData[i].dateParts.year === currentYear && 
               portfolioData[i].dateParts.month - 1 <= currentMonth)
            ) {
              nearestIndex = i
            } else {
              break
            }
          }
          
          filledLabels.push({
            monthIndex: currentMonth,
            year: currentYear,
            dataIndex: nearestIndex,
            monthKey,
            isFilledGap: true
          })
        }
        
        // Move to the next month
        currentMonth++
        if (currentMonth > 11) {
          currentMonth = 0
          currentYear++
        }
      }
      
      return filledLabels
    }
    
    return labels
  }
  
  // Get array of month labels
  const monthLabels = getUniqueMonthLabels()

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden border border-mint/20 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={controls} className="relative">
        {/* Dashboard UI */}
        <div className="bg-[#0A0A0A] p-4 rounded-t-xl border-b border-mint/10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-medium">US Leaders Performance</div>
            <div className="flex items-center gap-3">
              <select 
                className="bg-black/50 border border-mint/30 rounded-md px-3 py-1.5 text-white text-xs focus:outline-none focus:ring-1 focus:ring-mint"
                value={selectedPortfolio}
                onChange={(e) => {
                  // Call the parent's callback if provided
                  if (onPortfolioChange) {
                    onPortfolioChange(e.target.value);
                  }
                }}
              >
                <option value="us">US Leaders</option>
                <option value="au">AU Leaders</option>
              </select>
              <div className="w-3 h-3 rounded-full bg-mint"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] p-6">
          {/* Chart Area */}
          <div className="mb-6">
            <div className="h-[200px] w-full bg-black/50 rounded-lg overflow-hidden relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={portfolioData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
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
                    tickFormatter={(dateStr, i) => {
                      // Look up the month data from our sorted array using the index
                      if (typeof i === 'number' && monthLabels[i]) {
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const monthName = monthNames[monthLabels[i].monthIndex];
                        
                        // Add year for January or first month in dataset
                        if (monthLabels[i].monthIndex === 0 || i === 0 || 
                            (i > 0 && monthLabels[i].year !== monthLabels[i-1].year)) {
                          return `${monthName} '${monthLabels[i].year.toString().slice(-2)}`;
                        }
                        return monthName;
                      }
                      
                      // Fallback to original formatting if i is not provided
                      const [day, month, year] = dateStr.split('/');
                      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      return monthNames[parseInt(month) - 1];
                    }}
                    ticks={monthLabels.map(label => portfolioData[label.dataIndex].date)}
                    tick={{ fontSize: 12 }}
                    minTickGap={5}
                    height={30}
                  />
                  <YAxis 
                    stroke="#39FDAD" 
                    domain={[100000, 'auto']}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
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
            <div className="bg-black/30 p-3 rounded-lg border border-mint/10">
              <div className="text-xs text-gray-400 mb-1">Current YTD Performance</div>
              <div className="text-lg font-bold">+{ytdReturn.toFixed(1)}%</div>
              <div className="text-xs text-mint">Since January 1st 2025</div>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-mint/10">
              <div className="text-xs text-gray-400 mb-1">Performance Since Inception (January 1st 2023)</div>
              <div className="text-lg font-bold">{cumulativeReturn >= 0 ? '+' : ''}{cumulativeReturn.toFixed(1)}%</div>
              <div className="text-xs text-mint">Total Return</div>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-mint/10">
              <div className="text-xs text-gray-400 mb-1">Risk Level</div>
              <div className="text-lg font-bold">High</div>
              <div className="text-xs text-orange">Growth Focused</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mint/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      {/* Hover glow effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-mint/5 to-mint/5 opacity-30 pointer-events-none"></div>
      )}
    </div>
  )
}
