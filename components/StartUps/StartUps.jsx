import React from 'react'
import Container from '../ui/Container'
import Text from '../ui/Text'
import cn from 'clsx'
import s from './StartUps.module.css'
import Image from 'next/image'

const StartUps = () => {


    return (
        <Container className={cn(s.root, 'flex flex-col items-center justify-center space-y-10')}>
            <Text
                variant='pageHeading'
            >My Start-Up</Text>
            <div className='md:flex block justify-between items-center w-4/5 space-y-10'>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        width={100}
                        height={100}
                        src="/youtube.png"
                        alt=""
                    />
                    <h3 className='text-3xl font-bold text-red text-center'>Smart Coding Classes</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        width={100}
                        height={100}
                        src="/outlineHv2.png"
                        alt=""
                    />
                    <h3 className='text-3xl font-bold text-accent-9 text-center'>Hv Technologies</h3>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image
                    width={100}
                    height={100}
                    src="/background.png"
                    alt=""
                />
                <h3 className='text-3xl font-bold text-blue text-center'>Smart Coding Classes</h3>
            </div>
        </Container>
    )
}

export default StartUps