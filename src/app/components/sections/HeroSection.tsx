import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (
        <div className="px-4 pb-[67px] md:pb-[119.5px] lg:pb-[131px]">
            <div className="md:max-w-[720px] md:mx-auto lg:max-w-[1370px]">
                <div className="md:flex md:items-start md:gap-8 md:mb-8">
                    <div className="md:flex-1">
                        <h1 className="w-[316px] mx-auto md:w-full md:mx-0 font-semibold text-[58px] md:text-[48px] leading-[1.1] text-[#303030] mb-6 lg:text-[90px]">
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
                        </h1>

                        <p className="w-[316px] mx-auto md:w-full md:mx-0 font-normal text-[20px] md:text-[16px] text-[rgba(38,38,38,0.55)] mb-9 lg:text-[24px]">
                            Keep your yield working for you — we keep your
                            liquidity accessible
                        </p>
                    </div>

                    <div className="hidden md:flex md:flex-shrink-0 lg:hidden">
                        <Image
                            src="images/tablet-hero-image.svg"
                            alt="tablet hero"
                            width={152}
                            height={152}
                        />
                    </div>
                    <div className="hidden lg:flex lg:flex-shrink-0">
                        <Image
                            src="images/desktop-hero-image.svg"
                            alt="desktop hero"
                            width={275}
                            height={275}
                        />
                    </div>
                </div>

                <div className="w-[316px] mx-auto md:w-full md:mx-0 flex gap-4">
                    <button className="flex-1 md:w-[329px] md:flex-none rounded-[38px] py-4 h-[57px] bg-[#2d2d2d] text-white font-archivo text-sm flex items-center justify-center">
                        Join Whitelist
                    </button>
                    <button className="flex-1 md:w-[164px] md:flex-none rounded-[38px] py-4 h-[57px] bg-zinc-300 text-black text-sm flex items-center justify-center">
                        Read Docs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
