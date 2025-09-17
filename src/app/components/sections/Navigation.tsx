'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BurgerIcon from '@/app/components/BurgerIcon'
import NavTabs from '@/app/components/NavTabs'

function Navigation(props) {
    return (
        <div className="bg-white flex flex-col pt-4 max-md:pt-6 lg:px-4">
            <header className="flex items-center mx-auto gap-[138] lg:gap-[339] md:gap-[50.5] pb-16 lg:max-w-[1392px]">
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
