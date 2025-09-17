'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { backyardSlides } from '@/lib/data'

export default function BackyardSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backyardSlides.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="px-4 pt-16">
            <div className="max-w-md mx-auto md:max-w-[1370px]">
                <h2 className="text-[36px] md:text-[48px] font-semibold text-[#303030] mb-6">
                    What is Backyard?
                </h2>

                {/* 📱 Mobile */}
                <div className="md:hidden">
                    <motion.div
                        key={currentSlide}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Image
                            src={backyardSlides[currentSlide].image}
                            alt={backyardSlides[currentSlide].title}
                            width={179}
                            height={179}
                            className="mx-auto"
                        />

                        <motion.div
                            layout
                            className="flex items-center gap-4 mb-6 rounded-3xl bg-[#f4f6f7] p-2"
                        >
                            <div className="w-[33px] h-[33px] bg-black rounded-full flex items-center justify-center text-white font-semibold">
                                {backyardSlides[currentSlide].number}
                            </div>
                            <h3 className="text-[20px] font-semibold text-[#303030]">
                                {backyardSlides[currentSlide].title}
                            </h3>
                        </motion.div>

                        <motion.div
                            layout
                            className="mb-8 rounded-2xl bg-[#f4f6f7] p-2"
                        >
                            <h4 className="text-[24px] font-semibold text-[#303030] mb-4">
                                {backyardSlides[currentSlide].heading}
                            </h4>
                            <p className="text-[16px] text-[rgba(38,38,38,0.55)] leading-relaxed">
                                {backyardSlides[currentSlide].description}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Индикаторы */}
                    <div className="flex justify-center gap-2 mt-6">
                        {backyardSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1 rounded-full transition-all ${
                                    index === currentSlide
                                        ? 'w-8 bg-black'
                                        : 'w-6 bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* 💻 Tablet (md-only, скрыто на lg) */}
                <div className="hidden md:flex lg:hidden items-center justify-between gap-12">
                    <motion.div layout className="flex-1">
                        <motion.div
                            layout
                            className="flex items-center gap-4 mb-6 rounded-2xl bg-[#f4f6f7] p-3 max-w-md"
                        >
                            <div className="w-[36px] h-[36px] bg-black rounded-full flex items-center justify-center text-white font-semibold">
                                {backyardSlides[currentSlide].number}
                            </div>
                            <h3 className="text-[22px] font-semibold text-[#303030]">
                                {backyardSlides[currentSlide].title}
                            </h3>
                        </motion.div>

                        <motion.div
                            layout
                            className="rounded-2xl bg-[#f4f6f7] p-4 max-w-md"
                        >
                            <h4 className="text-[24px] font-semibold text-[#303030] mb-3">
                                {backyardSlides[currentSlide].heading}
                            </h4>
                            <p className="text-[16px] text-[rgba(38,38,38,0.55)] leading-relaxed">
                                {backyardSlides[currentSlide].description}
                            </p>
                        </motion.div>

                        {/* Индикаторы */}
                        <div className="flex gap-2 mt-6">
                            {backyardSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1 rounded-full transition-all ${
                                        index === currentSlide
                                            ? 'w-8 bg-black'
                                            : 'w-6 bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        key={currentSlide}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex justify-center"
                    >
                        <Image
                            src={backyardSlides[currentSlide].image}
                            alt={backyardSlides[currentSlide].title}
                            width={220}
                            height={220}
                            className="mx-auto"
                        />
                    </motion.div>
                </div>

                {/* 🖥 Desktop grid */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 mt-12">
                    {backyardSlides.map((slide) => (
                        <motion.div
                            key={slide.id}
                            layout
                            className="text-center p-6 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={179}
                                height={179}
                                className="mx-auto"
                            />

                            <div className="flex items-center gap-3 mb-4 mt-4 bg-[#f4f6f7] rounded-2xl p-2">
                                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    {slide.number}
                                </div>
                                <h3 className="text-[18px] font-semibold text-[#303030]">
                                    {slide.title}
                                </h3>
                            </div>

                            <div className="bg-[#f4f6f7] rounded-2xl p-2">
                                <h4 className="text-[20px] font-semibold text-[#303030] mb-3">
                                    {slide.heading}
                                </h4>
                                <p className="text-[14px] text-[rgba(38,38,38,0.55)]">
                                    {slide.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
