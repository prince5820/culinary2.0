'use client';

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const brands = [
  {
    name: 'Vollrath',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/vollrath.91d3c390.jpg',
  },
  {
    name: 'Hobart',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/hobart-change.9d6e50a5.png',
  },
  {
    name: 'Krowne',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/krowne.61c70fd7.png',
  },
  {
    name: 'Scotsman',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/scotsman.b3bf94b3.png',
  },
  {
    name: 'True Manufacturing',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/trolle.98dbe483.png',
  },
  {
    name: 'Turbo Air',
    href: '#',
    imageUrl:
      'https://www.culinarydepotinc.com/_next/static/media/truboair.86e0d7ed.png',
  },
  {
    name: 'Vulcan',
    href: '#',
    imageUrl: 'https://www.culinarydepotinc.com/_next/static/media/vulcan.d8f65eb9.png'
  },
  {
    name: 'Manitowoc',
    href: '#',
    imageUrl: 'https://www.culinarydepotinc.com/_next/static/media/manitowoc.e652376f.png'
  }
]

export default function TopBrandsCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: false })

  return (
    <section className="mb-12 mt-4 pb-[25px]">
      <div className="mx-auto w-full max-w-[1570px] px-[15px]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black md:text-3xl">
            Top Brands
          </h2>
          <a
            href="/shop-by-brand/"
            className="flex items-center text-base font-semibold text-black hover:text-primary-dark"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Embla wraps this on small screens */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {brands.map((brand, index) => (
              <a
                key={index}
                href={brand.href}
                className="flex-shrink-0 w-[160px] mr-4 rounded-lg bg-[#F5F5F5] p-4 hover:bg-gray-100 hover:shadow-md"
              >
                <div className="h-24 w-full">
                  <img
                    src={brand.imageUrl}
                    alt={brand.name}
                    className="h-full w-full object-contain object-center mix-blend-darken"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Static 8-column layout on large screens */}
        <div className="hidden lg:flex justify-between gap-4">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.href}
              className="w-[12.5%] rounded-lg bg-[#F5F5F5] p-4 hover:bg-gray-100 hover:shadow-md"
            >
              <div className="h-24 w-full">
                <img
                  src={brand.imageUrl}
                  alt={brand.name}
                  className="h-full w-full object-contain object-center mix-blend-darken"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
