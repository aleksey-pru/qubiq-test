'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function HeroSection() {
    return (
        <div className="px-4 pb-[67px] md:pb-[119.5px] lg:pb-[131px]">
            <div className="md:max-w-[720px] md:mx-auto lg:max-w-[1370px]">
                {/* Контейнер с framer-motion */}
                <motion.div
                    layout
                    className="md:flex md:items-start md:gap-8 md:mb-8"
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <motion.div layout className="md:flex-1">
                        <motion.h1
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-[316px] mx-auto md:w-full md:mx-0 font-semibold text-[58px] md:text-[48px] leading-[1.1] text-[#303030] mb-6 lg:text-[90px]"
                        >
                            The yield-backed stablecoin protocol boosting DeFi
                            <span className="inline-flex pl-5 md:hidden">
                                <Image
                                    src="images/h1-svg-image.svg"
                                    width={60}
                                    height={60}
                                    alt="logo"
                                    priority
                                />
                            </span>
                            liquidity
                        </motion.h1>

                        <motion.p
                            layout
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-[316px] mx-auto md:w-full md:mx-0 font-normal text-[20px] md:text-[16px] text-[rgba(38,38,38,0.55)] mb-9 lg:text-[24px]"
                        >
                            Keep your yield working for you — we keep your
                            liquidity accessible
                        </motion.p>
                    </motion.div>

                    {/* hero image tablet */}
                    <motion.div
                        layout
                        className="hidden md:flex md:flex-shrink-0 lg:hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Image
                            src="images/tablet-hero-image.svg"
                            alt="tablet hero"
                            width={152}
                            height={152}
                        />
                    </motion.div>

                    {/* hero image desktop */}
                    <motion.div
                        layout
                        className="hidden lg:flex lg:flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Image
                            src="images/desktop-hero-image.svg"
                            alt="desktop hero"
                            width={275}
                            height={275}
                        />
                    </motion.div>
                </motion.div>

                {/* Кнопки */}
                <motion.div
                    layout
                    transition={{ duration: 0.6 }}
                    className="w-[316px] mx-auto md:w-full md:mx-0 flex gap-4"
                >
                    <motion.button
                        layout
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 md:w-[329px] md:flex-none rounded-[38px] py-4 h-[57px] bg-[#2d2d2d] text-white font-archivo text-sm flex items-center justify-center"
                    >
                        Join Whitelist
                    </motion.button>
                    <motion.button
                        layout
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 md:w-[164px] md:flex-none rounded-[38px] py-4 h-[57px] bg-zinc-300 text-black text-sm flex items-center justify-center"
                    >
                        Read Docs
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
