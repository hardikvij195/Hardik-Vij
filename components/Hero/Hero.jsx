import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'
import cn from 'clsx'
import s from './Hero.module.css'
const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="">
        <Image
          src="/intro-bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
        />
      </div>
      <div className='absolute z-10  flex justify-center items-center w-full h-full '>
        <div className={cn(
          s.root
        )}>
          <Text className={cn(s.hello_text, '')} variant='pageHeading'>Hello, World.</Text>
        </div>
      </div>
    </div>
  )
}

export default Hero