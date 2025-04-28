'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

interface Props {
  brands: any[];
}

const TopBrands = ({ brands }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="container mx-auto mb-12 mt-4 w-full max-w-[1570px] px-4 pb-[25px] sm:px-[15px]">
      <div className="relative clear-both mx-auto w-full max-w-[1570px] px-[15px]">
        <div className="mb-0 flex items-center justify-between sm:mb-6">
          <h2 className="!m-0 !py-3 !text-xl font-semibold text-[#000000] md:!text-3xl">
            Top Brands
          </h2>
          <a
            className="hover:text-primary-dark flex items-center text-base font-semibold text-[#000000]"
            href="/shop-by-brand/"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right ml-1 h-4 w-4"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>

        <div className="relative">
          <div className="mb-6 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {brands.map((brand, index) => (
                <div>
                  <div className="w-[215px] min-w-[215px] max-w-[215px] flex-shrink-0 p-4" style={{ width: '100%', display: 'inline-block' }}>
                    <a
                      key={index}
                      href="#"
                      className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                    >
                      <div className="relative h-32 w-full">
                        <img
                          src={brand.img}
                          alt={brand.name}
                          loading="lazy"
                          decoding="async"
                          className="object-contain object-center mix-blend-darken"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            color: 'transparent',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
