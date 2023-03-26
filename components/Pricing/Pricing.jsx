import React from 'react'
import Container from '../ui/Container'
import cn from 'clsx'
import s from './Pricing.module.css'
import Image from 'next/image'
import PricingCard from '../ui/PricingCard'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'



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
        <Container clean className={cn(s.root)}>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <Image
                    width={100}
                    height={100}
                    src="/background.png"
                    alt=""
                />
                <h3 className='text-5xl font-bold text-blue text-center'>Smart Coding Classes</h3>
                <p className='text-2xl font-thin text-blue text-center'>Learn the magic of CODING using App/Game Development <span
                    className='font-bold'
                >@ Affordable Prices</span></p>
            </div>
            <div className='flex w-full mt-20 mb-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}

                >


                    {
                        pricing.map((item, i) =>
                            <SwiperSlide key={i}>
                                <PricingCard
                                    item={item}
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <Link href={"https://www.smartcodingclasses.com/"}
                target="_blank" rel="noopener noreferrer" title='LEARN CODING'
                className='bg-blue text-accent-0 w-[20%] py-1 rounded-2xl text-center font-semibold text-2xl space-x-3'>
                <Image
                    width={48}
                    height={48}
                    src="/ws2.png"
                    alt=""
                    className='inline-block'
                />
                <span>Register</span>

            </Link>
        </Container>
    )
}

export default Pricing