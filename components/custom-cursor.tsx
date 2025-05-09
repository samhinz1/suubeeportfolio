"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [isHoveringMint, setIsHoveringMint] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 1024) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnter = () => setHidden(false)
    const handleMouseLeave = () => setHidden(true)

    const handleLinkHoverStart = (e: MouseEvent) => {
      setLinkHovered(true)
      
      // Check if the hovered element has a mint background or contains mint color
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      const backgroundColor = computedStyle.backgroundColor
      const background = computedStyle.background
      
      // Check for mint color (can adjust these values as needed)
      const isMintElement = 
        backgroundColor.includes('rgb(57, 253, 173)') || 
        background.includes('rgb(57, 253, 173)') || 
        target.classList.contains('bg-mint') ||
        target.classList.contains('from-mint') ||
        target.classList.contains('to-mint')
        
      setIsHoveringMint(isMintElement)
    }
    
    const handleLinkHoverEnd = () => {
      setLinkHovered(false)
      setIsHoveringMint(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add event listeners for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, input, select, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart as EventListener)
      el.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart as EventListener)
        el.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  if (typeof window === "undefined") return null

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, input, select, [role="button"] {
          cursor: none;
        }
      `}</style>

      <div
        className={`fixed pointer-events-none z-[100] transition-opacity ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
            isHoveringMint ? "bg-black" : "bg-mint"
          } ${
            clicked
              ? "w-6 h-6 -translate-x-3 -translate-y-3 opacity-80"
              : linkHovered
                ? "w-10 h-10 -translate-x-5 -translate-y-5 opacity-80"
                : "w-4 h-4 -translate-x-2 -translate-y-2"
          }`}
        >
          {linkHovered && <div className="w-1 h-1 bg-white rounded-full"></div>}
        </div>
      </div>
    </>
  )
}
