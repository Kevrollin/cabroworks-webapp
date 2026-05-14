export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#D97706]/20 border-t-[#D97706] rounded-full animate-spin" />
        <p className="font-body text-[#6B7280] text-sm">Loading...</p>
      </div>
    </div>
  )
}
