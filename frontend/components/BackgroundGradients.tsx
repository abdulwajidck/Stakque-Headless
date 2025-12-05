export default function BackgroundGradients() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-[blob_7s_infinite]"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-[blob_7s_infinite_2s]"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen opacity-20 animate-[blob_7s_infinite_4s]"></div>
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"
      ></div>
    </div>
  )
}

