import React from 'react'
import { NeonGradientCard} from "@/components/magicui/neon-gradient-card";
const chatpage = () => {
  return (

<div className="flex bg-black mx-7 gap-4">
       <div className="flex flex-row flex-1 min-h-screen rounded-3xl justify-between">
      <NeonGradientCard className="background-position-spin max-w-lg items-center justify-center text-center mx-7">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
       India
      </span>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-lg items-center justify-center text-center mx-7">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        USA
      </span>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-lg items-center justify-center text-center mx-7">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
       London
      </span>
    </NeonGradientCard>
    </div>
    </div> 
  )
}

export default chatpage
