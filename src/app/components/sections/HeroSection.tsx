'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BurgerIcon from '@/app/components/BurgerIcon'
import NavTabs from '@/app/components/NavTabs'

function HeroSection(props) {
    return (
        <div className="min-h-screen bg-white flex flex-col pt-4 md:pt-6 lg:px-8">
            <header className="flex items-center mx-auto gap-[138] mb-12 lg:mb-20 md:gap-[50.5]">
                <div className="flex items-center space-x-2">
                    <Image
                        src="images/logo.svg"
                        width={132}
                        height={44}
                        alt="logo"
                        priority
                    />
                </div>
                <div className="md:hidden">
                    <BurgerIcon />
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <NavTabs />
                </nav>
                <button className="hidden md:flex rounded-[100px] p-[9px] w-[75px] h-[31px]  bg-neutral-800 text-white text-center">
                    Connect
                </button>
            </header>
        </div>
    )
}

export default HeroSection
