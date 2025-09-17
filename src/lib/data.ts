export interface BackyardSlide {
    id: number
    number: string
    title: string
    heading: string
    description: string
    image: string
}

export const backyardSlides: BackyardSlide[] = [
    {
        id: 1,
        number: '1',
        title: 'Yield Aggregator',
        heading: 'One-click yield aggregation',
        description:
            'Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity',
        image: '/images/yield-aggregator.png',
    },
    {
        id: 2,
        number: '2',
        title: 'Yield-backed Stablecoin',
        heading: 'Unlock liquidity with BYD',
        description:
            'Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time',
        image: '/images/yield-stablecoin.png',
    },
    {
        id: 3,
        number: '3',
        title: 'Boost DeFi Liquidity',
        heading: 'Boost protocols, earn more',
        description:
            'Your liquidity empowers DeFi — vote for pools, earn fees, and maximize your rewards',
        image: '/images/boost-liquidity.png',
    },
]
