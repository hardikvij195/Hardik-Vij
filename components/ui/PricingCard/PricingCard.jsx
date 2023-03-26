import React from 'react'
import cn from 'clsx'
import s from './PricingCard.module.css'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
const PricingCard = ({ item }) => {
    return (
        <div className={cn(s.root)}>
            
            <div className={cn(s.main)}>
            <div className='absolute top-[-4.2%] left-[10%] bg-gradient-to-r from-cyan to-blue text-accent-0 w-[80%] py-1 rounded-full text-center'><strong>{item?.title}</strong></div>
                <div className="">
                    {item?.duration}{" "}Month (2 hrs/Week)
                </div>


                <div className={cn(s.breakLine)} />

                <div className={cn(s.body)}>
                    <p>Class 8th to 10th</p>
                    <p>{item.price1}</p>
                </div>
                <div>
                    <p>Class 10th to 12th</p>
                    <p>{item.price2}</p>
                </div>
                <div>
                    <p>College Students & Above</p>
                    <p>{item.price3}</p>
                </div>

                <div className={cn(s.breakLine)} />

                <div>
                    <div className='flex items-center space-x-3'>
                        <span>
                            <FaCheck />
                        </span>
                        <div>
                            <p>Basic Programming</p>
                            <p>Concepts</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <span>
                            <FaCheck />
                        </span>
                        <div>
                            <p>Beginner Level</p>
                            <p>App/Game</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <span>
                            {
                                item.intermediate === "check" ? <FaCheck /> : <Image width={12} height={12} src={"/xmark-solid.svg"} alt=''
                                />
                            }
                        </span>
                        <div>
                            <p>Intermediate Level</p>
                            <p>App/Game</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <span>
                            {
                                item.advanced === "check" ? <FaCheck /> : <Image width={12} height={12} src={"/xmark-solid.svg"} alt=''
                                />
                            }
                        </span>
                        <div>
                            <p>Advanced Level</p>
                            <p>App/Game</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard