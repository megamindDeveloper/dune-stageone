"use client"
import React, { useEffect, useState, createContext, useContext, JSX } from "react"
import {  IconX, IconPlus, IconChevronRight, IconChevronLeft } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image, { type ImageProps } from "next/image"

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Card = {
  src: string
  title: string
  category: string
  features?: string[]
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto md:pl-24", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[5%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 md:mr-24">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconChevronLeft className="h-8 w-6 text-[#0000008F]" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3]  flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconChevronRight className="h-6 w-6 text-[#0000008F]" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

// Updated Card component to match the design in the screenshot
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card
  index: number
  layout?: boolean
}) => {
  const { currentIndex } = useContext(CarouselContext)

  return (
    <div className="group perspective h-[680px] w-[372px]">
      <div className="relative h-full w-full transition-all duration-500  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 rounded-3xl bg-[#B298FE] overflow-hidden justify-between flex flex-col items-start  [backface-visibility:hidden]">
          <div className="space-y-4 p-8 ">
            <h3 className="text-white text-4xl font-bold leading-tight">{card.title}</h3>
          </div>

          <div className="w-full  flex items-center justify-center">
            <Image
              src={card.src || "/placeholder.svg"}
              alt={card.title}
              width={400}
              height={100}
              className="object-cover mb-16"
            />
          </div>

          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconPlus className="h-5 w-5 text-[#b19bff]" />
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 rounded-3xl bg-[#B298FE] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col ">
          <div className="space-y-4">
            <h3 className="text-white text-4xl font-bold leading-tight ">{card.title}</h3>

            <p className="text-white text-base leading-relaxed font-medium">{card.category}</p>
          </div>

          <div className="space-y-4 mt-16">
            {card.features?.map((feature, i) => (
              <div key={i} className="flex  font-medium gap-2 text-white">
                <IconChevronRight className="h-6 w-6 pt-1  flex-shrink-0 font-medium" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconX className="h-5 w-5 text-[#b19bff]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}

