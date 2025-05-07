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
}

export default function DashboardPreview() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([])
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>("us")

  useEffect(() => {
    // Load and parse CSV data based on selected portfolio
    const dataFile = selectedPortfolio === "us" 
      ? '/data/suubee performance data.csv'
      : '/data/suubee performance data.csv' // Replace with AU data file when available
    
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
              return: parseFloat(cumulativeChange) // Store cumulative change instead of daily change
            }
          })
        
        setPortfolioData(parsedData)
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
            <div className="text-mint font-medium">Portfolio Dashboard</div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-mint"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] p-6">
          {/* Portfolio Selection Dropdown */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Portfolio Performance</h3>
            <select 
              className="bg-black/50 border border-mint/30 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-mint"
              value={selectedPortfolio}
              onChange={(e) => setSelectedPortfolio(e.target.value)}
            >
              <option value="us">US Leaders</option>
              <option value="au">AU Leaders</option>
            </select>
          </div>
          
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
                  <XAxis dataKey="date" stroke="#666" />
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
              <div className="text-xs text-gray-400 mb-1">Value as at {formattedDate}</div>
              <div className="text-lg font-bold">${lastDataPoint.value.toLocaleString()}</div>
              <div className="text-xs text-mint">{cumulativeReturn >= 0 ? '+' : ''}{cumulativeReturn.toFixed(1)}%</div>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-mint/10">
              <div className="text-xs text-gray-400 mb-1">Daily Return</div>
              <div className="text-lg font-bold">${(portfolioData[portfolioData.length - 1].value - portfolioData[portfolioData.length - 2].value).toLocaleString()}</div>
              <div className="text-xs text-mint">+{(portfolioData[portfolioData.length - 1].return - portfolioData[portfolioData.length - 2].return).toFixed(1)}%</div>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-mint/10">
              <div className="text-xs text-gray-400 mb-1">Risk Level</div>
              <div className="text-lg font-bold">Moderate</div>
              <div className="text-xs text-mint">Balanced</div>
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
