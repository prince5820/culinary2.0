import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Image } from '~/components/image';
import { Link as CustomLink } from '~/components/link';
import { cn } from '~/lib/utils';

import { type Locale, LocaleSwitcher } from './locale-switcher';
import { MobileNav } from './mobile-nav';

interface Link {
  label: string;
  href: string;
}

interface Group {
  label: string;
  href: string;
  links?: Link[];
}

interface Image {
  src: string;
  altText: string;
}

interface Links {
  label: string;
  href: string;
  groups?: Group[];
}

interface Props extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  account?: ReactNode;
  activeLocale?: string;
  locales: Locale[];
  cart?: ReactNode;
  links: Links[];
  locale?: ReactNode;
  logo?: string | Image;
  search?: ReactNode;
}

const Header = ({
  account,
  activeLocale,
  cart,
  className,
  links,
  locales,
  logo,
  search,
}: Props) => (
  <div className={cn('relative w-full fixed bg-white', className)} style={{zIndex: 99999}}>

    <div className='flex items-center justify-between bg-pencil py-[4px]'>
      <Image
        alt="Visit Showroom"
        src="https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/visit-showroom.png?t=1745297891"
        width={194}
        height={28}
        unoptimized
        priority
        className='cursor-pointer'
      />

      <div className='flex items-center gap-8'>
        <div className='flex items-center bg-black pro-padding'>
          <Image
          src="https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/pro-header.png?t=1745301771"
          alt="Pro"
          width={52}
          height={24}
          />
          <span className='text-white pro-text'>Sign up for pro and receive more</span>
          <button className='go-pro-button'>Go Pro Now</button>
        </div>
        <a href="#" className='pencil-link hover:text-[#d1093f]'>Contact Us</a>
        <a href="#" className='pencil-link hover:text-[#d1093f]'>About Us</a>
      </div>
    </div>

    <header className="flex h-[92px] items-center justify-between gap-1 overflow-y-visible bg-white px-4 2xl:container sm:px-10 lg:gap-8 lg:px-12 2xl:mx-auto 2xl:px-0">
      <CustomLink className="overflow-hidden text-ellipsis py-3" href="/">
        {typeof logo === 'object' ? (
          <Image
            alt={logo.altText}
            className="max-h-16 object-contain"
            height={32}
            priority
            src={logo.src}
            width={155}
          />
        ) : (
          <span className="truncate text-2xl font-black">{logo}</span>
        )}
      </CustomLink>

      <div className="search-box grow p-6">
        <input type="text" placeholder="What can we help you find?" />
        <div className="search-icon hover:text-[#000]">{search}</div>
      </div>

      <div>
        <div className="contact-text">Contact an expert:</div>
        <div className="contact-number cursor-pointer">(888) 845-8200</div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* {search} */}
        <nav className="flex gap-2 lg:gap-4">
          <div className="flex items-center justify-center">
            <div className="header-icons">{account}</div>
            <span className="font-14 cursor-pointer font-semibold hover:text-[#d1093f]">Login</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="header-icons">{cart}</div>
            <span className="font-14 cursor-pointer font-semibold hover:text-[#d1093f]">
              My Cart
            </span>
          </div>
        </nav>

        {activeLocale && locales.length > 0 ? (
          <LocaleSwitcher activeLocale={activeLocale} locales={locales} />
        ) : null}

        <MobileNav links={links} logo={logo} />
      </div>
    </header>

    <div className="category-nav">
      <NavigationMenuPrimitive.Root className="nav hidden lg:block">
        <NavigationMenuPrimitive.List className="flex items-center gap-2 lg:gap-4">
          {links.map((link) =>
            link.groups && link.groups.length > 0 ? (
              <NavigationMenuPrimitive.Item key={link.href}>
                <NavigationMenuPrimitive.Trigger className="group/button flex items-center justify-center font-semibold hover:rounded-md hover:bg-white hover:text-[#d1093f] hover:text-primary hover:shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">
                  <CustomLink
                    className="nav-text p-3 font-semibold hover:text-[#d1093f]"
                    href={link.href}
                  >
                    {link.label}
                  </CustomLink>
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content className="flex justify-center gap-20 2xl:container data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 sm:px-10 lg:px-12 2xl:mx-auto 2xl:px-0">
                  {link.groups.map((group) => (
                    <ul className="flex flex-col" key={group.href}>
                      <li>
                        <NavigationMenuPrimitive.Link asChild>
                          <CustomLink
                            className="nav-text block p-3 font-semibold"
                            href={group.href}
                          >
                            {group.label}
                          </CustomLink>
                        </NavigationMenuPrimitive.Link>
                      </li>
                      {group.links &&
                        group.links.length > 0 &&
                        group.links.map((nestedLink) => (
                          <li key={nestedLink.href}>
                            <NavigationMenuPrimitive.Link asChild>
                              <CustomLink className="block p-3" href={nestedLink.href}>
                                {nestedLink.label}
                              </CustomLink>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        ))}
                    </ul>
                  ))}
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>
            ) : (
              <NavigationMenuPrimitive.Item key={link.href}>
                <NavigationMenuPrimitive.Link asChild>
                  <CustomLink
                    className="nav-text p-3 font-semibold hover:rounded-md hover:bg-white hover:text-[#d1093f] hover:shadow hover:shadow-lg"
                    href={link.href}
                  >
                    {link.label}
                  </CustomLink>
                </NavigationMenuPrimitive.Link>
              </NavigationMenuPrimitive.Item>
            ),
          )}
        </NavigationMenuPrimitive.List>

        <NavigationMenuPrimitive.Viewport className="absolute start-0 top-full z-50 w-full bg-white pb-12 pt-6 shadow-xl duration-200 animate-in slide-in-from-top-5" />
      </NavigationMenuPrimitive.Root>
    </div>
  </div>
);

Header.displayName = 'Header';

export { Header, type Links };
