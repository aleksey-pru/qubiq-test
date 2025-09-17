'use client'
import React from 'react'
import Image from 'next/image'
import BurgerIcon from '@/app/components/BurgerIcon'
import NavTabs from '@/app/components/NavTabs'

function Navigation(props) {
    return (
        <div className="flex flex-col pt-4 max-md:pt-6 lg:px-4">
            <header className="flex items-center pb-6 mx-auto gap-[138] lg:gap-[339] md:gap-[50.5]  md:pb-16 lg:max-w-[1392px] lg:pb-28">
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
                <button className="hidden md:flex justify-center rounded-[100px] p-[9px] w-[75px] h-[31px]  bg-neutral-800 text-white hover:bg-neutral-900 text-center">
                    Connect
                </button>
            </header>
        </div>
    )
}

export default Navigation
