import React from 'react'

function navbar() {
  return (
    <nav class="flex flex-wrap mx-7 my-6">
  <div class="flex ml-12 grow h-14 space-x-10 justify-center lg:items-center lg:w-auto cursor-pointer">
      <a className="hover:border-sky-500 hover:border-b-2" href="#about">Features</a> 
      <a className="hover:border-sky-500 hover:border-b-2" href="#contact">About Us</a>
      <a className="hover:border-sky-500 hover:border-b-2" href="#contact">Contact Us</a>
      </div>
      <div class="flex items-center gap-x-px space-x-7">
      <button class=" rounded-full relative flex py-2 px-4 items-center justify-center hover:space-x-8 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden bg-cyan-500 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before: before:duration-100 before:ease-linear hover:bg-black hover:text-cyan-500 hover:shadow-blue-500 hover:before:border-[25px]">
      <span class="relative z-10">
        <a href="_blank">Sign In</a>
        </span>
    </button>
    <button class=" rounded-full relative flex py-2 px-4 items-center justify-center hover:space-x-8 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden bg-cyan-500 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before: before:duration-100 before:ease-linear hover:bg-black hover:text-cyan-500 hover:shadow-blue-500 hover:before:border-[25px]">
      <span class="relative z-10">
        <a href="_blank">Demo</a>
        </span>
    </button>  
      </div>
       </nav>
  )
}

export default navbar
