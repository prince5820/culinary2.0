import useEmblaCarousel from 'embla-carousel-react';
import { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

import { Image } from '~/components/image';
import { cn } from '~/lib/utils';

interface Link {
  label: string;
  href: string;
}

interface Image {
  altText: string;
  blurDataUrl?: string;
  src: string | StaticImageData;
}

interface Slide {
  cta?: Link;
  description?: string;
  image?: Image;
  title: string;
}

interface Props {
  className?: string;
  slides: Slide[];
}

const Slideshow = ({ className, slides }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeSlide, setActiveSlide] = useState(0);

  // Update active slide on Embla selection change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollToSlide = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section
      aria-label="Slideshow"
      aria-roledescription="carousel"
      className={cn('relative w-full overflow-hidden px-4 m-[48px_0px] max-w-[1570px] mx-auto px-4 sm:px-5', className)}
    >
      <div ref={emblaRef}>
        <ul className="flex" id="slideshow-slides">
          {slides.map((slide, index) => (
            <li
              key={index}
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <div className="relative rounded-lg overflow-hidden">
                {slide.image && (
                  <Image
                    alt={slide.image.altText}
                    blurDataURL={slide.image.blurDataUrl}
                    className="absolute -z-10 object-cover"
                    fill
                    placeholder="blur"
                    priority={index === 0}
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    src={slide.image.src}
                  />
                )}
                <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
                  <h2 className="text-5xl font-black lg:text-6xl">{slide.title}</h2>
                  {Boolean(slide.description) && <p className="max-w-xl">{slide.description}</p>}
                  {slide.cta && (
                    <a href={slide.cta.href} className="w-fit text-blue-500 hover:underline">
                      {slide.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-12 start-16 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-3 w-3 rounded-full transition-all duration-300',
              index === activeSlide ? 'bg-black' : 'bg-white'
            )}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export { Slideshow };
