import React from 'react'
import Container from '../ui/Container'
import cn from 'clsx'
import s from './Pricing.module.css'
import Image from 'next/image'
import PricingCard from '../ui/PricingCard'
import {FaCheck} from 'react-icons/fa'
import {HiOutlineXMark} from 'react-icons/hi'


export const pricing = [
    {
        title: "Beginner",
        duration: "1",
        price1: "₹ 5,000",
        price2: "₹ 4,000",
        price3: "₹ 3,000",
        intermediate: "cross",
        advanced: "cross"
    },
    {
        title: "Intermediate",
        duration: "2",
        price1: "₹ 8,000",
        price2: "₹ 7,000",
        price3: "₹ 6,000",
        intermediate: "cross",
        advanced: "cross"
    },
    {
        title: "Advanced",
        duration: "3",
        price1: "₹ 11,000",
        price2: "₹ 10,000",
        price3: "₹ 9,000",
        intermediate: "check",
        advanced: 'check'
    },
]



const Pricing = () => {
    return (
        <Container className={cn(s.root)}>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <Image
                    width={100}
                    height={100}
                    src="/background.png"
                    alt=""
                />
                <h3 className='text-3xl font-bold text-blue text-center'>Smart Coding Classes</h3>
                <p className='text-xl font-thin text-blue text-center'>Learn the magic of CODING using App/Game Development <span
                    className='font-bold'
                >@ Affordable Prices</span></p>
            </div>
            <div className='flex space-x-10'>
                {
                    pricing.map((item, i) =>
                        <PricingCard key={i}
                            item={item}
                        />
                    )
                }
            </div>
        </Container>
    )
}

export default Pricing