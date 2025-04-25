'use client';

// components/ProductCarousel.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  products: any[];
  title: string;
}

export default function CustomCarousel({ products, title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className='container mx-auto w-full max-w-[1570px] px-4 sm:px-[15px]'>
      <div className="mb-6 text-3xl font-semibold container mx-auto w-full max-w-[1570px] px-4 sm:px-[15px]">{title}</div>
      {title === 'Commercial Refrigeration' && (
        <div className="text-base font-semibold text-[#c91926] container mx-auto w-full max-w-[1570px] px-4 sm:px-[15px]">Recommended for you</div>
      )}
      <div className="relative">
        <div className="overflow-hidden mb-6" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <div className="w-[300px] min-w-[300px] max-w-[300px] flex-shrink-0 p-4" key={index}>
                <div className="cursor-pointer rounded-lg border bg-white p-3 shadow transition hover:text-[#d1093f] hover:shadow-md">
                  <a href="#">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mb-4 h-48 w-full transform object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                  <a href="#" className="cursor-pointer hover:text-[#d1093f]">
                    <h3 className="product-title line-clamp-3">{product.name}</h3>
                  </a>
                  <p className="product-price py-2">
                    {product.price} <span className="each">/ Each</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          className="hidden md:block absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black p-2 text-[#fff] shadow"
          onClick={scrollPrev}
        >
          <ChevronLeft />
        </button>
        <button
          className="hidden md:block absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black p-2 text-[#fff] shadow"
          onClick={scrollNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
