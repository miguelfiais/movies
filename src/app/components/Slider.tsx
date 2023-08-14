'use client'

import Image from 'next/image'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderProps {
  results: {
    title?: string
    name?: string
    poster_path: string
  }[]
}

const Slider = ({ results }: SliderProps) => {
  return (
    <Swiper grabCursor spaceBetween={20} slidesPerView={'auto'}>
      {results.map((result, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            alt={(result.name ?? result.title)!}
            width={250}
            height={375}
            className="rounded-xl"
          />
          <p className="text-white text-center mt-2 font-medium">
            {result.name ?? result.title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
