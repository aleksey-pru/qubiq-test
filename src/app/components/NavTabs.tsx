'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { usePathname } from 'next/navigation'

export default function NavTabs() {
    const pathname = usePathname()
    const currentTab =
        pathname === '/' ? 'home' : pathname.replace('/', '') || 'home'
    return (
        <Tabs.Root defaultValue="home">
            <Tabs.List className="flex bg-gray-100 p-0.5 rounded-full items-center gap-1">
                <Tabs.Trigger
                    value="home"
                    className="px-4 py-2 rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-200 hover:text-black data-[state=active]:bg-black data-[state=active]:text-white"
                >
                    Home
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="about"
                    className="px-4 py-2 rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-200 hover:text-black data-[state=active]:bg-black data-[state=active]:text-white"
                >
                    About
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="works"
                    className="px-4 py-2 rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-200 hover:text-black data-[state=active]:bg-black data-[state=active]:text-white"
                >
                    How it works
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="token"
                    className="px-4 py-2 rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-200 hover:text-black data-[state=active]:bg-black data-[state=active]:text-white"
                >
                    Token design
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="yard"
                    className="px-4 py-2 rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-200 hover:text-black data-[state=active]:bg-black data-[state=active]:text-white"
                >
                    YARD flywheel
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    )
}
