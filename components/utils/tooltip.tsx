'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

type TooltipProps = {
  children: React.ReactNode
  className?: string
  position?: string
}

export default function Tooltip({
  children,
  className = '',
  position = 'top',
}: TooltipProps) {

  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const positionOuterClasses = (position: string) => {
    switch (position) {
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2'
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2'
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2'
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2'
    }
  }

  const positionInnerClasses = (position: string) => {
    switch (position) {
      case 'right':
        return 'ml-2'
      case 'left':
        return 'mr-2'
      case 'bottom':
        return 'mt-2'
      default:
        return 'mb-2'
    }
  }  

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setTooltipOpen(true)}
      onMouseLeave={() => setTooltipOpen(false)}
      onFocus={() => setTooltipOpen(true)}
      onBlur={() => setTooltipOpen(false)}
    >
      <button
        className="block"
        aria-haspopup="true"
        aria-expanded={tooltipOpen}
        onClick={(e) => e.preventDefault()}
      >
        <svg className="w-4 h-4 fill-current text-slate-400 shrink-0" viewBox="0 0 16 16">
          <path d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Zm0 14c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6ZM7 7h2v5H7V7Zm1-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
      </button>
      <div className={`z-10 absolute ${positionOuterClasses(position)}`}>
        <Transition
          show={tooltipOpen}
          as="div"
          className={`min-w-[12rem] bg-slate-800 p-2 rounded-sm overflow-hidden transform transition duration-200 ease-out data-enter:data-closed:-translate-y-2 data-closed:opacity-0 ${positionInnerClasses(position)}`}
        >
          {children}
        </Transition>
      </div>
    </div>
  )
}
