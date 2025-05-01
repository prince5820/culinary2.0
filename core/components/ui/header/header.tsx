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
  <div className={cn('fixed w-full bg-white', className)} style={{ zIndex: 99999 }}>
    <div className="bg-pencil w-full">
      <div className="container mx-auto hidden w-full max-w-[1570px] items-center justify-between px-4 py-[4px] sm:px-[15px] lg:flex">
        <Image
          alt="Visit Showroom"
          src="https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/visit-showroom.png?t=1745297891"
          width={194}
          height={28}
          unoptimized
          priority
          className="cursor-pointer"
        />

        <div className="flex items-center gap-8">
          <div className="pro-padding flex items-center bg-black">
            <Image
              src="https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/pro-header.png?t=1745301771"
              alt="Pro"
              width={52}
              height={24}
            />
            <span className="pro-text text-white">Sign up for pro and receive more</span>
            <button className="go-pro-button">Go Pro Now</button>
          </div>
          <a href="#" className="pencil-link hover:text-[#d1093f]">
            Contact Us
          </a>
          <a href="#" className="pencil-link hover:text-[#d1093f]">
            About Us
          </a>
        </div>
      </div>
    </div>

    <div className="container mx-auto w-full max-w-[1570px] sm:px-[15px]">
      <header className="fixed left-0 top-0 flex h-[92px] h-auto min-h-[92px] w-full items-center justify-between gap-1 overflow-y-visible bg-white px-4 lg:relative lg:gap-16 2xl:mx-auto 2xl:px-0">
        <div className="flex items-center gap-4">
          {/* Mobile menu (only visible on mobile) */}
          <div className="lg:hidden">
            <MobileNav links={links} logo={logo} />
          </div>

          {/* Logo */}
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
        </div>

        <div className="hidden flex-1 items-center justify-center gap-6 px-6 lg:flex">
          <div className="lg:search-box hidden shrink grow p-6 lg:items-center">
            <input type="text" placeholder="What can we help you find?" />
            <div className="search-icon hover:text-[#000]">{search}</div>
          </div>

          <div className="hidden lg:block">
            <div className="contact-text">Contact an expert:</div>
            <div className="contact-number cursor-pointer flex-nowrap">(888) 845-8200</div>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="block lg:hidden">
            <div className="header-icons">{search}</div>
          </div>
          <nav className="flex gap-1 lg:gap-4">
            <div className="flex items-center justify-center">
              <div className="header-icons">{account}</div>
              <span className="font-14 hidden cursor-pointer font-semibold hover:text-[#d1093f] lg:inline">
                Login
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="header-icons">{cart}</div>
              <span className="font-14 hidden cursor-pointer flex-nowrap font-semibold hover:text-[#d1093f] lg:inline">
                My Cart
              </span>
            </div>
          </nav>

          {activeLocale && locales.length > 0 ? (
            <LocaleSwitcher activeLocale={activeLocale} locales={locales} />
          ) : null}
        </div>
      </header>
    </div>

    <div className="container mx-auto w-full max-w-[1570px] px-4 sm:px-[15px]">
      <div className="category-nav hidden lg:block">
        <NavigationMenuPrimitive.Root className="nav">
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
  </div>
);

Header.displayName = 'Header';

export { Header, type Links };
