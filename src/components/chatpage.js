import React from 'react'
import { NeonGradientCard} from "@/components/magicui/neon-gradient-card";
const chatpage = () => {
  return (

<div className="flex bg-black mx-7 gap-4">
       <div className="flex flex-row flex-1 min-h-screen rounded-3xl justify-between">
      <NeonGradientCard className="background-position-spin max-w-lg items-center justify-center text-center mx-7">
        <div className="bg-black p-4 rounded-lg shadow-md dark:bg-neutral-800">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/path/to/avatar.jpg" alt="User Avatar" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">User Name</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
          </div>
        </div>
        <div class="flex items-center pt-0">
      <form className="flex items-center justify-center w-full space-x-2 mb-2 mt-[700px] ml-3">
        <input
          className="flex h-10 w-full rounded-2xl border bg-black border-[#2e5092] px-3 py-2 text-sm placeholder-[#4271d0] focus:outline-none focus:ring-[#18376b] disabled:cursor-not-allowed disabled:opacity-50 text-white focus-visible:ring-offset-2"
          placeholder="Type your message" value=""/>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#fbfbfb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2 hover:rounded-3xl">
          Send</button>
      </form>
    </div>   
      </NeonGradientCard>
      <NeonGradientCard className="background-position-spin max-w-lg items-center justify-center text-center mx-7">
        <div className="bg-black p-4 rounded-lg shadow-md dark:bg-neutral-800">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/path/to/avatar.jpg" alt="User Avatar" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">India</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
          </div>
        </div>
        <div class="flex items-center pt-0">
      <form className="flex items-center justify-center w-full space-x-2 mb-2 mt-[700px] ml-3">
        <input
          className="flex h-10 w-full rounded-2xl border bg-black border-[#2e5092] px-3 py-2 text-sm placeholder-[#4271d0] focus:outline-none focus:ring-[#18376b] disabled:cursor-not-allowed disabled:opacity-50 text-white focus-visible:ring-offset-2"
          placeholder="Type your message" value=""/>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#fbfbfb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2 hover:rounded-3xl">
          Send</button>
      </form>
    </div>   
      </NeonGradientCard>
    
      <NeonGradientCard className="background-position-spin max-w-lg items-center justify-center text-center mx-7">
        <div className="bg-black p-4 rounded-lg shadow-md dark:bg-neutral-800">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/path/to/avatar.jpg" alt="User Avatar" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">London</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
          </div>
        </div>
        <div class="flex items-center pt-0">
      <form className="flex items-center justify-center w-full space-x-2 mb-2 mt-[700px] ml-3">
        <input
          className="flex h-10 w-full rounded-2xl border bg-black border-[#2e5092] px-3 py-2 text-sm placeholder-[#4271d0] focus:outline-none focus:ring-[#18376b] disabled:cursor-not-allowed disabled:opacity-50 text-white focus-visible:ring-offset-2"
          placeholder="Type your message" value=""/>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#fbfbfb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2 hover:rounded-3xl">
          Send</button>
      </form>
    </div>   
      </NeonGradientCard>
    </div>
    </div> 
  )
}

export default chatpage
