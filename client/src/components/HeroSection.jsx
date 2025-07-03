import React from 'react'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function HeroSection() {

    const navigate = useNavigate()

    return (
        <div className='bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen
    flex flex-col justify-center items-start gap-4 px-4 md:px-16
    lg:px-36 
    '>
            <h1 className='text-5xl md:text-[70px] md:leading-18 
        font-semibold max-w-110'>How to Train your Dragon</h1>

            <div className='flex item-center gap-4 text-gray-300'>
                <span>Action | Adventure | Sci-fi</span>
                <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4.5 h-4.5' />2018
                </div>
                <div className='flex items-center gap-1'>
                    <ClockIcon className='w-4.5 h-4.5' />1hr 56m
                </div>
            </div>
            <p className='max-w-md text-gray-300'>
                On the rugged isle of Berk, a Viking boy named Hiccup defies centuries of tradition by befriending a dragon named Toothless. However,
                when an ancient threat emerges that
                endangers both species...
            </p>

            <button className='px-5 py-3  bg-primary rounded-md 
            hover:bg-primary-dull cursor-pointer'
            onClick={()=> navigate("/movies:id")}// remember to fix this
            >
                Book Now
            </button>
        </div>
    )
}

export default HeroSection