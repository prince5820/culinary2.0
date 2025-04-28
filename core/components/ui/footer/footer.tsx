'use client';

import { useState } from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-[#b90435] px-6 py-10 text-white lg:px-12 xl:px-20 container mx-auto max-w-[1570px] px-4 sm:px-[15px]">
      {/* Grid layout for large screens */}
      <div className="mb-10 hidden grid-cols-1 gap-8 md:grid-cols-2 min-[991px]:grid lg:grid-cols-5">
        {/* 1. Logo + Address */}
        <article className="space-y-2">
          <div className="sm-desktop:flex sm-desktop:justify-center">
            <img
              alt="Logo"
              fetchPriority="high"
              width="180"
              height="66"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="https://cdn11.bigcommerce.com/s-raxt2z29l9/product_images/uploaded_images/logo-white-footer.png"
            />
          </div>
          <div className="font-montserrat sm-desktop:text-center mt-[15px] inline-block w-full p-[0_0.78571rem_0.78571rem] text-left align-top text-[20px] font-semibold leading-[24.38px] text-white">
            <span className="sm-desktop:m-[10px_0_20px_0] m-[10px_0_30px_0] block">
              <br />
              67 Route 59
              <br />
              Spring Valley, NY 10977
            </span>
            <a
              href="tel:888-845-8200"
              className="sm-desktop:text-[18px] sm-phone:text-base leading-7 text-white hover:underline"
            >
              (888) 845-8200
            </a>
          </div>
        </article>

        {/* 2. Services */}
        <div>
          <h3 className="font-montserrat emd-desktop:text-base sm-desktop:cursor-pointer sm-desktop:border-b sm-desktop:border-white sm-desktop:py-[15px] relative m-[0_0_5px_0] pb-[10px] text-2xl font-semibold capitalize leading-[29.26px] text-white">
            Services
          </h3>
          <div className="ease-[cubic-bezier(0.4,0,0.2,1)] sm-desktop:max-h-[500px] sm-desktop:max-h-[500px] overflow-hidden transition-all duration-500">
            <ul className="footer_info_list sm-desktop:p-[15px_0] m-0 list-none p-0">
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Equipment Leasing
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Design Your Kitchen
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Build Your Own Bar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Resources */}
        <div>
          <h3 className="font-montserrat emd-desktop:text-base sm-desktop:cursor-pointer sm-desktop:border-b sm-desktop:border-white sm-desktop:py-[15px] relative m-[0_0_5px_0] pb-[10px] text-2xl font-semibold capitalize leading-[29.26px] text-white">
            Resources
          </h3>
          <div className="ease-[cubic-bezier(0.4,0,0.2,1)] sm-desktop:max-h-[500px] sm-desktop:max-h-[500px] overflow-hidden transition-all duration-500">
            <ul className="footer_info_list sm-desktop:p-[15px_0] m-0 list-none p-0">
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  About Us
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Blog
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Visit Our Showroom
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Buying Guides
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Terms of Use
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Support */}
        <div>
          <h3 className="font-montserrat emd-desktop:text-base sm-desktop:cursor-pointer sm-desktop:border-b sm-desktop:border-white sm-desktop:py-[15px] relative m-[0_0_5px_0] pb-[10px] text-2xl font-semibold capitalize leading-[29.26px] text-white">
            Support
          </h3>
          <div className="ease-[cubic-bezier(0.4,0,0.2,1)] sm-desktop:max-h-[500px] sm-desktop:max-h-[500px] overflow-hidden transition-all duration-500">
            <ul className="footer_info_list sm-desktop:p-[15px_0] m-0 list-none p-0">
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  My Account
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Chat Online
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Wishlist
                </a>
              </li>
              <li className="mb-[13px]">
                <a
                  href="#"
                  className="font-montserrat inline-block text-base font-medium leading-[19.5px] text-white transition-colors duration-200 hover:underline"
                >
                  Track My Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Visit Showroom + Social */}
        <article className="footer_info_col emd-desktop:p-[0_15px] sm-desktop:w-full sm-desktop:border-r-0 sm-desktop:p-0 sm-desktop:text-center sm-desktop:transition-all sm-desktop:duration-300 sm-desktop:ease-in-out relative flex w-[19%] flex-col flex-wrap justify-end border-none pl-0 pr-0 text-right">
          <div className="sm-desktop:block mt-[15px] flex flex-wrap justify-end">
            <a
              href="/pro/"
              className="sm-phone:max-w-full mb-[15px] flex w-full max-w-[223px] cursor-pointer items-center justify-between rounded-[4px] bg-white p-[10px] text-sm font-medium text-black transition-colors duration-300"
            >
              Sign Up with
              <svg
                width="63"
                height="30"
                viewBox="0 0 63 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="63" height="30" fill="url(#pattern0_193_3499)"></rect>
                <defs>
                  <pattern
                    id="pattern0_193_3499"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_193_3499"
                      transform="matrix(0.00403551 0 0 0.00847458 -0.00443906 0)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_193_3499"
                    width="250"
                    height="118"
                    xlinkHref="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
            </a>
            <a
              href="/our-supercenter/"
              className="sm-phone:max-w-full flex w-full max-w-[223px] cursor-pointer items-center justify-between rounded-[4px] bg-black p-[15px_10px] text-sm font-semibold text-white transition-colors duration-300"
            >
              Visit Our Showroom
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className="inline-block h-[17px] w-[17px] flex-shrink-0"
              >
                <path
                  d="M8.50008 15.5832C4.58984 15.5789 1.42104 12.4101 1.41675 8.49985V8.35818C1.49462 4.46556 4.69958 1.36549 8.59264 1.41714C12.4857 1.46879 15.6073 4.65281 15.5818 8.54613C15.5564 12.4395 12.3935 15.5824 8.50008 15.5832ZM8.50008 2.83318C5.37047 2.83318 2.83341 5.37024 2.83341 8.49985C2.83341 11.6295 5.37047 14.1665 8.50008 14.1665C11.6297 14.1665 14.1667 11.6295 14.1667 8.49985C14.1632 5.37169 11.6282 2.8367 8.50008 2.83318ZM7.473 12.0415L6.47141 11.0392L8.97537 8.53527L6.47141 6.03131L7.473 5.02902L10.9792 8.53527L7.47371 12.0415H7.473Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="sm-desktop:mt-5 mt-auto flex justify-end gap-2">
            <a
              href="https://www.linkedin.com/company/culinarydepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.31339 5.04873H3.4901V15H0.31339V5.04873ZM1.88205 0C2.94124 0 3.80349 0.80524 3.80349 1.79262C3.80349 2.78 2.94038 3.58524 1.88205 3.58524C0.823718 3.58524 0 2.7808 0 1.79262C0 0.804442 0.823718 0 1.88205 0ZM5.37215 5.04873H8.50947V6.43873C9.17649 5.52404 10.2742 4.93849 11.5286 4.93849H12.3917C14.392 4.93849 15.9991 6.47547 15.9991 8.30404V14.9992H12.8618V14.0845V9.62134C12.8224 8.48698 11.9987 7.60904 10.7837 7.60904C9.5678 7.60904 8.548 8.48698 8.50947 9.62134V14.9992H5.37215V5.04873Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/CulinaryDepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="16"
                height="16"
                viewBox="0 0 320 512"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/culinarydepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.31495 0H11.6851C14.0529 0 16 1.95181 16 4.3253V11.6747C16 14.0482 14.0529 16 11.6851 16H4.31495C1.94714 16 0 14.0482 0 11.6747V4.3253C0 1.95181 1.94714 0 4.31495 0ZM12.2958 2.79442C12.7923 2.79442 13.2123 3.21536 13.2123 3.7131C13.2123 4.21084 12.7923 4.63177 12.2958 4.63177C11.7609 4.63177 11.3793 4.21084 11.3793 3.7131C11.3793 3.21536 11.7609 2.79442 12.2958 2.79442ZM7.98085 3.6363H8.01915C10.387 3.6363 12.3724 5.62651 12.3724 8C12.3724 10.4112 10.387 12.3637 8.01915 12.3637H7.98085C5.61304 12.3637 3.6659 10.4119 3.6659 8C3.6659 5.62651 5.61304 3.6363 7.98085 3.6363ZM7.98085 5.12877H8.01915C9.58468 5.12877 10.8828 6.42998 10.8828 7.99926C10.8828 9.60694 9.58468 10.9082 8.01915 10.9082H7.98085C6.41532 10.9082 5.11723 9.60694 5.11723 7.99926C5.11723 6.42998 6.41532 5.12877 7.98085 5.12877ZM4.35326 1.37801H11.6467C13.2889 1.37801 14.6253 2.71762 14.6253 4.3637V11.6363C14.6253 13.2824 13.2889 14.622 11.6467 14.622H4.35326C2.71112 14.622 1.37471 13.2824 1.37471 11.6363V4.3637C1.37471 2.71762 2.71112 1.37801 4.35326 1.37801Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/culinarydepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2151 0H15.7491L10.1358 6.19364L16.7113 14.577H11.5472L7.50566 9.47815L2.88679 14.577H0.320755L6.28679 7.94538L0 0H5.29245L8.91698 4.66087L13.2151 0ZM12.3491 13.1068H13.7604L4.55472 1.40765H3.04717L12.3491 13.1068Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@CulinaryDepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2978 2.30863C20.4749 3.00121 20.6014 4.05292 20.6772 5.46374L20.7152 7.3876L20.6772 9.31149C20.6014 10.7479 20.4749 11.8125 20.2978 12.505C20.1714 12.9411 19.9437 13.3259 19.6149 13.6593C19.2861 13.9928 18.8941 14.2237 18.4388 14.3519C17.7812 14.5315 16.2383 14.6598 13.8102 14.7367L10.3576 14.7752L6.90506 14.7367C4.47691 14.6598 2.93401 14.5315 2.27639 14.3519C1.82112 14.2237 1.42907 13.9928 1.10026 13.6593C0.771444 13.3259 0.543805 12.9411 0.417339 12.505C0.240286 11.8125 0.11382 10.7479 0.03794 9.31149L0 7.3876C0 6.82327 0.0126464 6.18198 0.03794 5.46374C0.11382 4.05292 0.240286 3.00121 0.417339 2.30863C0.543805 1.8469 0.771444 1.4493 1.10026 1.11583C1.42907 0.782368 1.82112 0.551506 2.27639 0.423248C2.93401 0.243684 4.47691 0.115435 6.90506 0.0384765L10.3576 0L13.8102 0.0384765C16.2383 0.115435 17.7812 0.243684 18.4388 0.423248C18.8941 0.551506 19.2861 0.782368 19.6149 1.11583C19.9437 1.4493 20.1714 1.8469 20.2978 2.30863ZM8.23296 10.5427L13.6583 7.3876L8.23296 4.27095V10.5427Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/culinarydepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99973 0C9.22853 0.0260341 10.3853 0.305893 11.4703 0.839587C12.5552 1.37327 13.4113 2.10873 14.0388 3.04594C14.7185 4.06125 15.0584 5.20022 15.0584 6.46285C15.0584 7.7255 14.8492 8.91654 14.431 10.036C13.9604 11.2596 13.2937 12.2228 12.431 12.9257C11.4637 13.7067 10.3265 14.0972 9.01935 14.0972C8.49648 14.0972 7.97362 13.9736 7.45077 13.7262C6.9279 13.4789 6.54883 13.134 6.31355 12.6914L5.99983 13.941C5.65996 15.2947 5.38546 16.232 5.17632 16.7526C4.86261 17.4556 4.30053 18.3537 3.49009 19.4471L3.33323 19.5252L3.21559 19.4081L3.17637 18.8223C3.09795 18.0934 3.05873 17.5467 3.05873 17.1822C3.05873 16.4012 3.18945 15.3859 3.45088 14.1363C3.60773 13.4073 3.86917 12.3269 4.23517 10.8951L4.70575 9.02061C4.44432 8.52602 4.3136 7.87519 4.3136 7.06814C4.3136 6.31316 4.50967 5.68835 4.90181 5.19371C5.24168 4.77717 5.65996 4.51684 6.15669 4.4127C6.6534 4.30857 7.08476 4.39968 7.45077 4.68606C7.81676 4.97243 7.99973 5.42801 7.99973 6.05282C7.99973 6.39126 7.94752 6.76874 7.84291 7.18528C7.79062 7.41958 7.67298 7.78405 7.48997 8.27873C7.30698 8.77332 7.18934 9.1378 7.13705 9.37207C7.03248 9.78863 6.98019 10.1531 6.98019 10.4655C6.98019 10.9602 7.15665 11.3702 7.50959 11.6956C7.86251 12.021 8.28731 12.1837 8.78406 12.1837C9.62061 12.1837 10.3265 11.8192 10.9016 11.0903C11.3984 10.4915 11.7644 9.68455 11.9996 8.66924C12.2088 7.83613 12.3133 7.01606 12.3133 6.20903C12.3133 4.85527 11.8886 3.80091 11.0389 3.04594C10.1893 2.29096 9.07164 1.91348 7.68605 1.91348C6.66647 1.91348 5.73186 2.14778 4.88221 2.61638C4.03256 3.08498 3.37245 3.72281 2.90187 4.52985C2.43131 5.3369 2.19601 6.26109 2.19601 7.30244C2.19601 7.74499 2.27445 8.17457 2.43131 8.59112C2.50973 8.8254 2.65352 9.11176 2.86267 9.45019C3.01952 9.71051 3.09795 9.87977 3.09795 9.95789C3.09795 10.1661 3.04566 10.4264 2.94109 10.7388C2.81038 11.1294 2.66659 11.3247 2.50973 11.3247C2.16987 11.3247 1.80387 11.1489 1.41173 10.7975C1.01957 10.446 0.692787 9.97091 0.431356 9.37207C0.143787 8.66924 0 7.88821 0 7.02908C0 5.62327 0.392147 4.37365 1.17643 3.28024C1.90844 2.26492 2.8888 1.4644 4.11753 0.878638C5.34625 0.292881 6.64033 0 7.99973 0Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </article>
      </div>

      {/* Mobile view (≤990px) */}
      <div className="block min-[991px]:hidden">
        {/* Section 1 - Logo + Address (not in accordion) */}
        <div className="flex w-full justify-center">
          <article className="flex flex-col items-center text-center">
            <img
              alt="Logo"
              fetchPriority="high"
              width="180"
              height="66"
              decoding="async"
              data-nimg="1"
              className="block"
              style={{ color: 'transparent' }}
              src="https://cdn11.bigcommerce.com/s-raxt2z29l9/product_images/uploaded_images/logo-white-footer.png"
            />

            <div className="font-montserrat mt-[15px] p-[0_0.78571rem_0.78571rem] text-[20px] font-semibold leading-[24.38px] text-white">
              <span className="m-[10px_0_20px_0] block">
                67 Route 59
                <br />
                Spring Valley, NY 10977
              </span>
              <a
                href="tel:888-845-8200"
                className="text-[18px] leading-7 text-white hover:underline"
              >
                (888) 845-8200
              </a>
            </div>
          </article>
        </div>

        {/* Sections 2, 3, 4 - Accordions */}
        <div className="space-y-4">
          {[
            {
              title: 'Services',
              items: ['Equipment Leasing', 'Design Your Kitchen', 'Build Your Own Bar'],
            },
            {
              title: 'Resources',
              items: [
                'About Us',
                'Blog',
                'Visit Our Showroom',
                'Buying Guides',
                'Terms of Use',
                'Privacy Policy',
                'Returns & Exchanges',
              ],
            },
            {
              title: 'Support',
              items: ['Contact Us', 'My Account', 'Chat Online', 'Wishlist', 'Track My Order'],
            },
          ].map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="mb-4 flex w-full items-center justify-between text-lg font-semibold"
              >
                {section.title}
                <span className="text-xl">
                  {openSection === section.title ? (
                    <svg height="24" width="24" viewBox="0 0 48 48" fill="#fff">
                      <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" />
                      <path d="M0 0h48v48h-48z" fill="none" />
                    </svg>
                  ) : (
                    <svg height="24" width="24" viewBox="0 0 48 48" fill="#fff">
                      <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                      <path d="M0-.75h48v48h-48z" fill="none" />
                    </svg>
                  )}
                </span>
              </button>
              <hr />

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openSection === section.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="ml-2 mt-4 space-y-4 text-base">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 - Showroom + Social (not in accordion) */}
        <article className="footer_info_col emd-desktop:p-[0_15px] sm-desktop:w-full sm-desktop:border-r-0 sm-desktop:p-0 sm-desktop:text-center sm-desktop:transition-all sm-desktop:duration-300 sm-desktop:ease-in-out relative mt-8 flex w-[19%] flex-col flex-wrap justify-end border-none pl-0 pr-0 text-right">
          <div className="mt-[15px] flex flex-wrap">
            <a
              href="/pro/"
              className="sm-phone:max-w-full mb-[15px] flex w-full max-w-[223px] cursor-pointer items-center justify-between rounded-[4px] bg-white p-[10px] text-sm font-medium text-black transition-colors duration-300"
            >
              Sign Up with
              <svg
                width="63"
                height="30"
                viewBox="0 0 63 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="63" height="30" fill="url(#pattern0_193_3499)"></rect>
                <defs>
                  <pattern
                    id="pattern0_193_3499"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_193_3499"
                      transform="matrix(0.00403551 0 0 0.00847458 -0.00443906 0)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_193_3499"
                    width="250"
                    height="118"
                    xlinkHref="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
            </a>
            <a
              href="/our-supercenter/"
              className="sm-phone:max-w-full flex w-full max-w-[223px] cursor-pointer items-center justify-between rounded-[4px] bg-black p-[15px_10px] text-sm font-semibold text-white transition-colors duration-300"
            >
              Visit Our Showroom
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className="inline-block h-[17px] w-[17px] flex-shrink-0"
              >
                <path
                  d="M8.50008 15.5832C4.58984 15.5789 1.42104 12.4101 1.41675 8.49985V8.35818C1.49462 4.46556 4.69958 1.36549 8.59264 1.41714C12.4857 1.46879 15.6073 4.65281 15.5818 8.54613C15.5564 12.4395 12.3935 15.5824 8.50008 15.5832ZM8.50008 2.83318C5.37047 2.83318 2.83341 5.37024 2.83341 8.49985C2.83341 11.6295 5.37047 14.1665 8.50008 14.1665C11.6297 14.1665 14.1667 11.6295 14.1667 8.49985C14.1632 5.37169 11.6282 2.8367 8.50008 2.83318ZM7.473 12.0415L6.47141 11.0392L8.97537 8.53527L6.47141 6.03131L7.473 5.02902L10.9792 8.53527L7.47371 12.0415H7.473Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <a
              href="https://www.linkedin.com/company/culinarydepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.31339 5.04873H3.4901V15H0.31339V5.04873ZM1.88205 0C2.94124 0 3.80349 0.80524 3.80349 1.79262C3.80349 2.78 2.94038 3.58524 1.88205 3.58524C0.823718 3.58524 0 2.7808 0 1.79262C0 0.804442 0.823718 0 1.88205 0ZM5.37215 5.04873H8.50947V6.43873C9.17649 5.52404 10.2742 4.93849 11.5286 4.93849H12.3917C14.392 4.93849 15.9991 6.47547 15.9991 8.30404V14.9992H12.8618V14.0845V9.62134C12.8224 8.48698 11.9987 7.60904 10.7837 7.60904C9.5678 7.60904 8.548 8.48698 8.50947 9.62134V14.9992H5.37215V5.04873Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/CulinaryDepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="16"
                height="16"
                viewBox="0 0 320 512"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/culinarydepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.31495 0H11.6851C14.0529 0 16 1.95181 16 4.3253V11.6747C16 14.0482 14.0529 16 11.6851 16H4.31495C1.94714 16 0 14.0482 0 11.6747V4.3253C0 1.95181 1.94714 0 4.31495 0ZM12.2958 2.79442C12.7923 2.79442 13.2123 3.21536 13.2123 3.7131C13.2123 4.21084 12.7923 4.63177 12.2958 4.63177C11.7609 4.63177 11.3793 4.21084 11.3793 3.7131C11.3793 3.21536 11.7609 2.79442 12.2958 2.79442ZM7.98085 3.6363H8.01915C10.387 3.6363 12.3724 5.62651 12.3724 8C12.3724 10.4112 10.387 12.3637 8.01915 12.3637H7.98085C5.61304 12.3637 3.6659 10.4119 3.6659 8C3.6659 5.62651 5.61304 3.6363 7.98085 3.6363ZM7.98085 5.12877H8.01915C9.58468 5.12877 10.8828 6.42998 10.8828 7.99926C10.8828 9.60694 9.58468 10.9082 8.01915 10.9082H7.98085C6.41532 10.9082 5.11723 9.60694 5.11723 7.99926C5.11723 6.42998 6.41532 5.12877 7.98085 5.12877ZM4.35326 1.37801H11.6467C13.2889 1.37801 14.6253 2.71762 14.6253 4.3637V11.6363C14.6253 13.2824 13.2889 14.622 11.6467 14.622H4.35326C2.71112 14.622 1.37471 13.2824 1.37471 11.6363V4.3637C1.37471 2.71762 2.71112 1.37801 4.35326 1.37801Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/culinarydepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2151 0H15.7491L10.1358 6.19364L16.7113 14.577H11.5472L7.50566 9.47815L2.88679 14.577H0.320755L6.28679 7.94538L0 0H5.29245L8.91698 4.66087L13.2151 0ZM12.3491 13.1068H13.7604L4.55472 1.40765H3.04717L12.3491 13.1068Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@CulinaryDepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2978 2.30863C20.4749 3.00121 20.6014 4.05292 20.6772 5.46374L20.7152 7.3876L20.6772 9.31149C20.6014 10.7479 20.4749 11.8125 20.2978 12.505C20.1714 12.9411 19.9437 13.3259 19.6149 13.6593C19.2861 13.9928 18.8941 14.2237 18.4388 14.3519C17.7812 14.5315 16.2383 14.6598 13.8102 14.7367L10.3576 14.7752L6.90506 14.7367C4.47691 14.6598 2.93401 14.5315 2.27639 14.3519C1.82112 14.2237 1.42907 13.9928 1.10026 13.6593C0.771444 13.3259 0.543805 12.9411 0.417339 12.505C0.240286 11.8125 0.11382 10.7479 0.03794 9.31149L0 7.3876C0 6.82327 0.0126464 6.18198 0.03794 5.46374C0.11382 4.05292 0.240286 3.00121 0.417339 2.30863C0.543805 1.8469 0.771444 1.4493 1.10026 1.11583C1.42907 0.782368 1.82112 0.551506 2.27639 0.423248C2.93401 0.243684 4.47691 0.115435 6.90506 0.0384765L10.3576 0L13.8102 0.0384765C16.2383 0.115435 17.7812 0.243684 18.4388 0.423248C18.8941 0.551506 19.2861 0.782368 19.6149 1.11583C19.9437 1.4493 20.1714 1.8469 20.2978 2.30863ZM8.23296 10.5427L13.6583 7.3876L8.23296 4.27095V10.5427Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/culinarydepot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex items-center justify-center rounded-md bg-[#D1093F] p-2 hover:bg-black"
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99973 0C9.22853 0.0260341 10.3853 0.305893 11.4703 0.839587C12.5552 1.37327 13.4113 2.10873 14.0388 3.04594C14.7185 4.06125 15.0584 5.20022 15.0584 6.46285C15.0584 7.7255 14.8492 8.91654 14.431 10.036C13.9604 11.2596 13.2937 12.2228 12.431 12.9257C11.4637 13.7067 10.3265 14.0972 9.01935 14.0972C8.49648 14.0972 7.97362 13.9736 7.45077 13.7262C6.9279 13.4789 6.54883 13.134 6.31355 12.6914L5.99983 13.941C5.65996 15.2947 5.38546 16.232 5.17632 16.7526C4.86261 17.4556 4.30053 18.3537 3.49009 19.4471L3.33323 19.5252L3.21559 19.4081L3.17637 18.8223C3.09795 18.0934 3.05873 17.5467 3.05873 17.1822C3.05873 16.4012 3.18945 15.3859 3.45088 14.1363C3.60773 13.4073 3.86917 12.3269 4.23517 10.8951L4.70575 9.02061C4.44432 8.52602 4.3136 7.87519 4.3136 7.06814C4.3136 6.31316 4.50967 5.68835 4.90181 5.19371C5.24168 4.77717 5.65996 4.51684 6.15669 4.4127C6.6534 4.30857 7.08476 4.39968 7.45077 4.68606C7.81676 4.97243 7.99973 5.42801 7.99973 6.05282C7.99973 6.39126 7.94752 6.76874 7.84291 7.18528C7.79062 7.41958 7.67298 7.78405 7.48997 8.27873C7.30698 8.77332 7.18934 9.1378 7.13705 9.37207C7.03248 9.78863 6.98019 10.1531 6.98019 10.4655C6.98019 10.9602 7.15665 11.3702 7.50959 11.6956C7.86251 12.021 8.28731 12.1837 8.78406 12.1837C9.62061 12.1837 10.3265 11.8192 10.9016 11.0903C11.3984 10.4915 11.7644 9.68455 11.9996 8.66924C12.2088 7.83613 12.3133 7.01606 12.3133 6.20903C12.3133 4.85527 11.8886 3.80091 11.0389 3.04594C10.1893 2.29096 9.07164 1.91348 7.68605 1.91348C6.66647 1.91348 5.73186 2.14778 4.88221 2.61638C4.03256 3.08498 3.37245 3.72281 2.90187 4.52985C2.43131 5.3369 2.19601 6.26109 2.19601 7.30244C2.19601 7.74499 2.27445 8.17457 2.43131 8.59112C2.50973 8.8254 2.65352 9.11176 2.86267 9.45019C3.01952 9.71051 3.09795 9.87977 3.09795 9.95789C3.09795 10.1661 3.04566 10.4264 2.94109 10.7388C2.81038 11.1294 2.66659 11.3247 2.50973 11.3247C2.16987 11.3247 1.80387 11.1489 1.41173 10.7975C1.01957 10.446 0.692787 9.97091 0.431356 9.37207C0.143787 8.66924 0 7.88821 0 7.02908C0 5.62327 0.392147 4.37365 1.17643 3.28024C1.90844 2.26492 2.8888 1.4644 4.11753 0.878638C5.34625 0.292881 6.64033 0 7.99973 0Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </article>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t flex items-center justify-between flex-wrap border-white pt-4 text-sm">
        <p>
          Developed by :{' '}
          <a href="#" className="underline">
            Culinary Depot
          </a>
        </p>
        <p className="mt-1">© 1995 - 2025 Culinary Depot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
