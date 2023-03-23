import React from 'react'
import Container from '../ui/Container'
import cn from 'clsx'
import s from './About.module.css'
import Text from '../ui/Text'
import Image from 'next/image'

const About = () => {
  return (
    <Container className={cn(s.root,'flex flex-col items-center justify-center')}>
        <Text variant='pageHeading'>About Me</Text>
        <div className='w-3/4'>
        <h3
        className={cn(s.text, "")} variant='body'>To Intriduce Myself</h3>
       <p className='text-accent-4 text-center text-2xl'>
            I&apos;m a determined, passionate and hard working individual with underlying self motivation and experience in Mobile Application Development, Website Development and Game Development
        </p>
        </div>
        <div className='mt-5 space-y-5'>
            <h3 className='text-accent-4 text-center text-2xl font-bold'>
                Currently Working At:
            </h3>
            <div className='flex justify-center items-center space-x-3'>
            <Image
            width={100}
            height={100}
            quality={80}
            src="/app_synergies_logo.jpeg" alt="" />
            <p className='text-accent-4 text-center text-4xl font-bold'>AppSynergies</p>
            </div>
        </div>
    </Container>
  )
}

export default About