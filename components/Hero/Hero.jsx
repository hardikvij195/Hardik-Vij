import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'
import cn from 'clsx'
import s from './Hero.module.css'
import me from '../../public/mepng2.png'
import youtube from '../../public/youtube.png'
import instagram from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import playstore from '../../public/playstore.png'
import Container from '../ui/Container'
import Link from 'next/link'


export const social = [
  {
    title: 'Youtube',
    img: '/youtube.png',
    href: '#'
  },
  {
    title: 'Instagram',
    img: '/instagram.png',
    href: '#'
  },
  {
    title: 'Facebook',
    img: '/facebook.png',
    href: '#'
  },
  {
    title: 'Playstore',
    img: '/playstore.png',
    href: '#'
  },
  {
    title: 'LinkedIn',
    img: '/linkedin.png',
    href: '#'
  }
]

const Hero = () => {
  return (
    <Container clean>
      <div className={cn(
        s.root
      )}>
        <div className={cn(s.hero, "mt-10")}>

          <Image
            src={me}
            alt="Hardik Vij"
            quality={100}
            width={200}
            height={200}
            placeholder="blur"
            loading="eager"
          />
          <div className='flex flex-col justify-center items-center space-y-8'>
            <div>

              <Text className={cn(s.hello_text, 'uppercase')} variant='pageHeading'>Hello, World.</Text>
              <Text className={cn(s.me_text, '')} variant='heading'>I&apos;m Hardik Vij</Text>


              <Text className={cn(s.title_text, 'my-10')} variant='body'>Developer | Educator | Entrepreneur | Youtuber</Text>

            </div>

            <div className={cn('flex justify-between w-3/4 ')}>
              {
                social.map((m, i) => (
                  <>
                    <Link href={m.href} key={i}>
                      <Image
                        src={m.img}
                        width={64}
                        height={64}
                        placeholder='blur'
                        blurDataURL={m.img}
                        alt={m.title}
                      />
                    </Link>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        <div>
          <Text className={cn(s.body_text, 'flex justify-center items-center space-x-3')} variant='body'>
            <span>Made With</span>
            <Image width={32} height={32} src='/heart.png' alt='heart icon' /><span>&</span><Image width={32} height={32} src='/flutter.svg' alt='flutter icon' />
          </Text>
        </div>

      </div>

    </Container>
  )
}

export default Hero