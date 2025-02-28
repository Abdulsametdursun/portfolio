'use client'

import React from 'react'

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: (event: React.MouseEvent) => void
  otherClasses?: string
}) => {
  console.log('ShimmerButton rendered', handleClick)

  return (
    <button
      className={`inline-flex h-12 w-full animate-shimmer items-center justify-center md:w-60 md:mt-10 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-100 transition-colors focus:outline-none gap-2 ${otherClasses}`}
      onClick={event => {
        console.log('ShimmerButton clicked!')
        event.stopPropagation() // Prevent other elements from capturing the click
        if (handleClick) handleClick(event)
      }}
    >
      {position === 'left' && icon} {title} {position === 'right' && icon}
    </button>
  )
}

export default ShimmerButton
