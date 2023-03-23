import Image from 'next/image'
import React from 'react'

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
    </div>
  )
}

export default Hero