import React from 'react'
import FlipText from "@/components/magicui/flip-text";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const hero = () => {
  return (
    <div className='bg-black mb-36 mt-44'>
       
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
            <FlipText
      className="text-4xl font-bold tracking-[-0.1em] text-white md:text-7xl md:leading-[5rem]"
      word="Asyncio"
    />
    <br/>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Introducing our AI-powered platform for asynchronous meetings, allowing you to schedule actionable items and reflect on changes without real-time constraints. Create a global calendar and manage tasks efficiently across time zones.</p>
                <p class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Give us a like
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </p>
                <a href="#" class="rounded-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black">
                    Watch Youtube Video
                </a> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">

      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.01}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      /> </div>
            </div>                
        </div>
    </section>
    </div>
  )
}

export default hero
