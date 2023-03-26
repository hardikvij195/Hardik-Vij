import React from 'react'
import Container from '../ui/Container'
import cn from 'clsx'
import s from './Hv.module.css'
import Text from '../ui/Text'
import Image from 'next/image'
import Link from 'next/link'


export const apps = [
  {
    title: 'Learnshala',
    img: '/learnshala.png',
    href: '#'
  },
  {
    title: 'Expenser',
    img: '/exp.png',
    href: '#'
  },
  {
    title: 'Student',
    img: '/student.png',
    href: '#'
  }
]
export const games = [
    {
      title: 'Dodge',
      img: '/Dodge.png',
      href: '#'
    },
    {
      title: 'Avoid',
      img: '/Avoid.png',
      href: '#'
    },
    {
      title: 'Fast',
      img: '/Fast.png',
      href: '#'
    },
    {
      title: 'Walls',
      img: '/Walls.png',
      href: '#'
    }
  ]

const Hv = () => {
    return (
        <Container clean className={cn(s.root)}>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <Image
                    width={100}
                    height={100}
                    src="/logohv.png"
                    alt=""
                />
                <h3 className='text-5xl font-bold text-accent-0 text-center'>Hv Technologies</h3>
                <p className='text-2xl font-thin text-accent-0 text-center'>Founded in 2018, We Expertise in Apps, Websites & Games</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <h3 className='text-3xl font-bold text-accent-0 text-center'>Our Apps</h3>
                <div className={cn('flex justify-between w-full space-x-5')}>
              {
                apps.map((m, i) => (

                  <Link href={m.href} key={i}>
                    <Image
                      src={m.img}
                      width={100}
                      height={100}
                      placeholder='blur'
                      blurDataURL={m.img}
                      alt={m.title}
                    />
                  </Link>

                ))
              }
            </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <h3 className='text-3xl font-bold text-accent-0 text-center'>Our Games</h3>
                <div className={cn('flex justify-between w-full space-x-5')}>
              {
                games.map((m, i) => (

                  <Link href={m.href} key={i}>
                    <Image
                      src={m.img}
                      width={100}
                      height={100}
                      placeholder='blur'
                      blurDataURL={m.img}
                      alt={m.title}
                    />
                  </Link>

                ))
              }
            </div>
            </div>
        </Container>
    )
}

export default Hv