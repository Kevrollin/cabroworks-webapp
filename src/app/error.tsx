'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="font-heading font-700 text-[#1F2937] text-2xl mb-3">Something went wrong</h2>
        <p className="font-body text-[#6B7280] text-sm mb-6 leading-relaxed">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-[#D97706] text-white font-body font-600 px-6 py-3 rounded-full hover:bg-[#B45309] transition-all duration-300"
          >
            Try Again
          </button>
          <a
            href="https://wa.me/254710535735"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-body font-600 px-6 py-3 rounded-full hover:bg-[#1da851] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
