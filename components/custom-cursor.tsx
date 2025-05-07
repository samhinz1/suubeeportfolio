"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

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

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add event listeners for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, input, select, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart)
      el.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart)
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
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`relative flex items-center justify-center rounded-full bg-mint transition-all duration-200 ${
            clicked
              ? "w-6 h-6 -translate-x-3 -translate-y-3"
              : linkHovered
                ? "w-10 h-10 -translate-x-5 -translate-y-5"
                : "w-4 h-4 -translate-x-2 -translate-y-2"
          }`}
        >
          {linkHovered && <div className="w-1 h-1 bg-black rounded-full"></div>}
        </div>
      </div>
    </>
  )
}
