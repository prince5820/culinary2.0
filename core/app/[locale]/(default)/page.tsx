import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import CustomCarousel from '~/components/custom-carousal';
import { ProductCardCarousel } from '~/components/product-card-carousel';
import { ProductCardCarouselFragment } from '~/components/product-card-carousel/fragment';
import { Slideshow } from '~/components/slideshow';

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('Home');
  const customerAccessToken = await getSessionCustomerAccessToken();

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerAccessToken,
    fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  const newestProducts = removeEdgesAndNodes(data.site.newestProducts);

  const recentlyViewed = [
    {
      name: 'Turbo Air TMF-85SDW',
      price: '$17,391.65',
      image:
        'https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/carousal-image-1.png?t=1745322960',
    },
    {
      name: 'Migali C-72FM',
      price: '$5,991.00',
      image:
        'https://cdn11.bigcommerce.com/s-5jvmldvpnc/images/stencil/original/image-manager/carousal-image-2.png?t=1745322961',
    },
    {
      name: 'Turbo Air TOM-60DXB',
      price: '$12,410.66',
      image: '/images/product3.jpg',
    },
    {
      name: 'Atosa MCF8720GR',
      price: '$2,780.00',
      image: '/images/product4.jpg',
    },
    {
      name: 'Turbo Air TMF-85SDW',
      price: '$17,391.65',
      image: '/images/product1.jpg',
    },
    {
      name: 'Migali C-72FM',
      price: '$5,991.00',
      image: '/images/product2.jpg',
    },
    {
      name: 'Turbo Air TOM-60DXB',
      price: '$12,410.66',
      image: '/images/product3.jpg',
    },
    {
      name: 'Atosa MCF8720GR',
      price: '$2,780.00',
      image: '/images/product4.jpg',
    },
  ];

  const commercialRefrigeration = [
    {
      name: 'Kalvinator KCHCM72F',
      price: '$6,913.23',
      image: '/images/product1.png',
    },
    {
      name: 'Turbo Air TGF-10SD-N',
      price: '$4,695.64',
      image: '/images/product2.png',
    },
    {
      name: 'True GDM-49F-HC-TSL01',
      price: '$7,861.43',
      image: '/images/product3.png',
    },
    {
      name: 'Howard McCray GF75-FF-B',
      price: '$8,260.00',
      image: '/images/product4.png',
    },
    {
      name: 'Atosa MCF8728GR',
      price: '$6,379.00',
      image: '/images/product5.png',
    },
    {
      name: 'Turbo Air TGF-49FB-N',
      price: '$7,206.68',
      image: '/images/product6.png',
    },
  ];

  const topSelling = [
    {
      name: 'Flash Furniture LE-3',
      desc: 'WHITE-GANG-GG White Heavy Duty Plastic',
      price: '$1.33',
      img: '/images/p1.png', // Replace with actual image paths
    },
    {
      name: 'Cambro SFC2452',
      desc: '2 & 4 qt Green Square Food Pan Seal Cover',
      price: '$1.82',
      img: '/images/p2.png',
    },
    {
      name: 'Hoshizaki HS-5226',
      desc: 'Prep Guard',
      price: '$120.78',
      img: '/images/p3.png',
    },
    {
      name: 'Winco DDSE-101S',
      desc: '12 Oz. Mint Julep Cup',
      price: '$4.20',
      img: '/images/p4.png',
    },
    {
      name: 'Winco TNS-4',
      desc: '4" Stainless Steel Bakery Spatula',
      price: '$1.40',
      img: '/images/p5.png',
    },
    {
      name: 'Chef Master 40062',
      desc: '8 Oz. Butane Fuel',
      price: '$1.67',
      img: '/images/p6.png',
    },
  ];

  return (
    <>
      <Slideshow />

      <div className="my-10">
        <CustomCarousel products={recentlyViewed} title="Your recently viewed Items" />
        <CustomCarousel products={commercialRefrigeration} title="Commercial Refrigeration" />
        <div className="container mx-auto w-full max-w-[1570px] px-4">
          <div className="mb-6 flex flex-col items-start gap-8 rounded-lg bg-[#c91926] px-6 py-6 text-white lg:flex-row lg:items-center lg:justify-between lg:py-8">
            <div className="w-full md:w-auto md:pr-8">
              <svg
                width="246"
                height="45"
                viewBox="0 0 246 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M245.817 8.12886C245.817 8.05224 245.808 7.97827 245.806 7.90254C244.206 7.68409 242.721 6.94803 241.579 5.80663C240.437 4.66524 239.7 3.18128 239.48 1.58154C239.404 1.58154 239.33 1.57001 239.255 1.57001C239.179 1.57001 239.104 1.57886 239.028 1.58154C238.809 3.18063 238.073 4.66401 236.931 5.80533C235.79 6.94665 234.306 7.68319 232.707 7.90254C232.707 7.97827 232.696 8.05224 232.696 8.12886C232.696 8.20548 232.705 8.27858 232.707 8.35431C234.306 8.57366 235.79 9.3102 236.931 10.4515C238.073 11.5928 238.809 13.0762 239.028 14.6753C239.104 14.6753 239.178 14.6868 239.255 14.6868C239.331 14.6868 239.404 14.678 239.48 14.6753C239.7 13.0756 240.437 11.5916 241.579 10.4502C242.721 9.30882 244.206 8.57276 245.806 8.35431C245.808 8.27858 245.817 8.20459 245.817 8.12886Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.6503 11.24L46.7348 23.9311C46.2653 26.782 44.691 28.4862 42.1359 28.4862C39.9202 28.4862 38.7709 26.9111 39.1121 24.5262L41.1131 11.24H33.5796L31.7087 23.8019C30.5594 31.2561 34.434 35.3427 41.2904 35.3427C48.8282 35.3427 53.1714 31.4679 54.32 23.7181L56.191 11.24H48.6503Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M60.3612 2.25418L55.5503 34.7467H63.0447L67.9001 2.25418H60.3612Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M73.946 9.1526C75.0872 9.14632 76.1882 8.73015 77.0482 7.98001C77.9082 7.22988 78.4701 6.1957 78.6313 5.06594C78.7472 4.50332 78.7327 3.92159 78.5888 3.36547C78.4449 2.80934 78.1756 2.29366 77.8014 1.85781C77.4272 1.42196 76.9582 1.07758 76.4303 0.851178C75.9023 0.624777 75.3295 0.522304 74.7559 0.55167C73.6157 0.554306 72.5137 0.962897 71.6475 1.70425C70.7813 2.4456 70.2074 3.47125 70.0287 4.59732C69.9133 5.16542 69.9294 5.75241 70.0756 6.31335C70.2218 6.8743 70.4943 7.39433 70.8723 7.83385C71.2502 8.27336 71.7237 8.62062 72.2564 8.84918C72.7891 9.07773 73.3671 9.18157 73.946 9.1526Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.7311 11.24L66.2378 34.7467H73.7758L77.2673 11.24H69.7311Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M93.1516 34.7467H100.69L102.775 20.8637C103.286 17.5005 102.775 14.9836 101.244 13.241C100.499 12.3751 99.5681 11.6881 98.5212 11.2311C97.4742 10.7741 96.3378 10.5588 95.1962 10.6012C93.6622 10.5662 92.1421 10.8999 90.7638 11.5743C89.3854 12.2487 88.189 13.244 87.2751 14.4766L87.7856 11.24H80.4195L76.9263 34.7467H84.4206L86.0831 23.3332C86.6363 19.5861 88.8503 17.4532 91.703 17.4532C94.2162 17.4532 95.4929 19.072 95.0243 22.0957L93.1516 34.7467Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M124.494 11.24L124.152 13.4102C123.307 12.4901 122.272 11.7657 121.117 11.2877C119.963 10.8098 118.719 10.5897 117.471 10.643C114.24 10.6054 111.112 11.7752 108.699 13.9234C106.161 16.1527 104.551 19.2513 104.184 22.6089C103.675 26.1859 104.313 29.2097 106.144 31.6802C107.057 32.889 108.253 33.8551 109.626 34.4937C110.999 35.1323 112.509 35.4239 114.021 35.3427C116.678 35.359 119.257 34.4389 121.303 32.7439L121.005 34.7466H128.074L131.608 11.24H124.494ZM122.623 22.8646C122.415 24.4105 121.66 25.8307 120.494 26.8674C119.395 27.9191 117.928 28.5 116.406 28.4862C115.7 28.5278 114.995 28.3985 114.349 28.1093C113.704 27.82 113.138 27.3793 112.7 26.8247C112.273 26.2443 111.975 25.5788 111.828 24.8733C111.681 24.1678 111.688 23.4389 111.848 22.7363C112.088 21.2849 112.845 19.9693 113.979 19.0319C115.086 18.0291 116.53 17.4814 118.024 17.4986C118.702 17.476 119.376 17.6061 119.997 17.8794C120.618 18.1527 121.17 18.5622 121.611 19.0775C122.052 19.5927 122.372 20.2006 122.546 20.8561C122.721 21.5117 122.746 22.1981 122.619 22.8646H122.623Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M174.827 11.2409H166.649L159.968 24.6936L159.87 24.2775L156.821 11.2381H149.805C149.773 11.2203 149.74 11.2168 149.708 11.2007C149.36 11.0222 148.995 10.8818 148.617 10.782C148.558 10.766 148.499 10.7526 148.439 10.7393C148.078 10.6574 147.709 10.6134 147.339 10.6082C147.317 10.6082 147.297 10.6012 147.276 10.6012C147.218 10.6012 147.161 10.6109 147.102 10.6127C146.958 10.6171 146.816 10.6253 146.674 10.6413C146.585 10.6511 146.49 10.6635 146.398 10.6777C146.259 10.6991 146.123 10.7268 145.986 10.758C145.897 10.7785 145.808 10.798 145.719 10.822C145.58 10.8604 145.446 10.905 145.311 10.9522C145.229 10.9807 145.147 11.0065 145.067 11.0413C144.923 11.0983 144.783 11.1624 144.644 11.2284C144.578 11.2586 144.511 11.2853 144.447 11.3174C144.25 11.4172 144.058 11.525 143.873 11.6417C143.817 11.6765 143.766 11.7157 143.711 11.7522C143.584 11.8369 143.457 11.9224 143.336 12.0132C143.257 12.0738 143.183 12.1371 143.106 12.1994C143.03 12.2618 142.928 12.3428 142.848 12.4177C142.768 12.4925 142.693 12.5639 142.617 12.6378C142.541 12.7118 142.478 12.7749 142.413 12.8444C142.38 12.8792 142.343 12.9131 142.311 12.9479V12.9594C142.008 13.2916 141.746 13.6586 141.53 14.0526L142 11.2417H134.761L131.269 34.7485H138.763L140.212 24.9965C140.39 23.0338 141.176 21.1757 142.461 19.6814C142.628 19.5119 142.804 19.3524 142.989 19.2038C143.131 19.0871 143.267 18.9632 143.416 18.8626C143.616 18.7338 143.825 18.6182 144.04 18.5161C144.189 18.4403 144.335 18.3521 144.491 18.2898C144.731 18.2012 144.976 18.1283 145.226 18.0715C145.371 18.035 145.509 17.9823 145.659 17.9538C146.025 17.891 146.397 17.8577 146.769 17.8541C146.813 17.8541 146.858 17.8434 146.9 17.8434C147.382 17.8431 147.864 17.8848 148.339 17.9682L149.238 14.7252L154.945 34.1943L154.733 34.5356C153.201 36.7914 151.752 38.0261 149.497 38.027C148.466 38.0355 147.452 37.7711 146.557 37.2608L144.298 43.2228C145.014 43.7399 145.815 44.1288 146.664 44.3722C147.6 44.6365 148.568 44.7659 149.54 44.7562C154.863 44.7562 158.653 41.2629 162.783 33.7275L173.247 14.204L174.835 11.2426L174.827 11.2409Z"
                  fill="black"
                ></path>
                <path
                  d="M186.612 10.9442C192.769 10.9442 197.611 15.6998 197.611 22.9189C197.611 30.1379 192.769 35.1049 186.612 35.1049C185.059 35.1119 183.524 34.777 182.115 34.1238C180.706 33.4706 179.458 32.5153 178.46 31.3256V44.4506H173.62V22.8334L178.46 14.7661C179.436 13.5481 180.678 12.5703 182.092 11.9077C183.505 11.2451 185.052 10.9155 186.612 10.9442ZM185.552 15.1484C181.942 15.1484 178.46 17.9922 178.46 23.0027C178.46 28.0569 181.942 30.9007 185.552 30.9007C189.205 30.9007 192.684 27.9712 192.684 22.9189C192.684 17.8665 189.203 15.1457 185.552 15.1457V15.1484Z"
                  fill="white"
                ></path>
                <path
                  d="M204.278 34.72H199.439V11.3237H204.278V14.7207C204.985 13.5062 206.013 12.5105 207.249 11.8435C208.486 11.1766 209.883 10.8643 211.285 10.9414V15.9519H210.053C206.49 15.9519 204.278 17.438 204.278 22.4057V34.72Z"
                  fill="white"
                ></path>
                <path
                  d="M222.925 35.1022C216.257 35.1022 211.205 30.3465 211.205 23C211.205 15.6535 216.471 10.9415 223.137 10.9415C229.802 10.9415 235.069 15.6544 235.069 23C235.069 30.3456 229.633 35.1022 222.925 35.1022ZM222.925 30.898C226.534 30.898 230.101 28.309 230.101 23C230.101 17.6911 226.661 15.1457 223.051 15.1457C219.398 15.1457 216.13 17.6928 216.13 23C216.13 28.3072 219.272 30.9007 222.925 30.9007V30.898Z"
                  fill="white"
                ></path>
                <path
                  d="M9.00375 18.394C8.97853 18.7652 8.97318 19.1376 8.98771 19.5095C9.01107 20.5438 9.2397 21.5631 9.66035 22.5082C9.66461 22.5082 9.66868 22.5099 9.67169 22.5129C9.6747 22.5159 9.67639 22.52 9.67639 22.5242C9.94483 23.1348 10.3054 23.7007 10.7455 24.2019C10.9248 24.4173 11.1234 24.6159 11.3388 24.7952C12.8346 26.1453 14.8014 26.8528 16.8144 26.765C20.1054 26.765 23.1675 25.2861 26.0558 22.3425L29.8538 26.6625C28.7109 29.6663 26.4228 32.0938 23.4918 33.4122C23.1852 33.5494 22.8707 33.6684 22.5501 33.7685L21.6806 34.0616C21.3082 34.1721 20.9046 34.2835 20.509 34.3859C20.2319 34.4492 19.9549 34.5125 19.6626 34.5757C19.0693 34.6871 18.4759 34.7895 17.8585 34.8527C17.5856 34.8897 17.3107 34.9109 17.0353 34.916C16.5534 34.9632 16.0705 34.9793 15.5876 34.9793C10.5317 34.9793 6.51988 33.3649 3.5763 30.1051C2.40738 28.7997 1.50004 27.2821 0.903558 25.6345C0.00585081 22.9976 -0.23872 20.1823 0.190827 17.4301C0.492192 14.9686 1.27181 12.5897 2.48582 10.4274C2.88522 9.72879 3.32643 9.05502 3.80705 8.40958C4.29309 7.76541 4.81603 7.14987 5.37327 6.5662C5.91271 5.99637 6.48889 5.46251 7.09808 4.96795C8.27742 3.99554 9.57182 3.17175 10.9522 2.51522C13.7403 1.19401 16.7922 0.523839 19.8774 0.555249C22.0423 0.494933 24.1975 0.8662 26.2175 1.64736C28.2375 2.42852 30.0817 3.60388 31.6428 5.10509C31.8486 5.32603 32.0775 5.55589 32.2833 5.77773C32.7155 6.23007 33.11 6.71697 33.4629 7.23351L33.4469 7.24961L27.2675 12.7794C26.9904 12.44 26.7213 12.1229 26.4443 11.8307C25.1753 10.3862 23.4977 9.36092 21.6333 8.8906C20.8954 8.7106 20.138 8.62294 19.3784 8.62959C19.0541 8.62959 18.7459 8.64477 18.4207 8.6608C17.5077 8.73591 16.6088 8.93275 15.748 9.24612C15.1722 9.44311 14.62 9.70334 14.1016 10.0221C14.1016 10.0381 14.1016 10.0381 14.0864 10.0221C13.5448 10.3362 13.0313 10.6962 12.5514 11.0983C10.8549 12.5091 9.69303 14.4585 9.25944 16.6219C9.19619 16.9382 9.13293 17.2786 9.08572 17.6189C9.05097 17.8799 9.01979 18.1329 9.00375 18.394Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div className="flex-1 lg:px-6">
              <div className="mb-6 md:mb-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Save more with Pro</h3>
                <p className="text-sm md:text-base">
                  Get exclusive savings, free shipping and so much more when you sign up.
                </p>
              </div>
              <div className="flex md:flex-row md:flex-wrap md:gap-4">
                <div className="mb-3 flex flex-col gap-3 md:order-1 md:mb-0 md:flex-row">
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px] shrink-0"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12.2626C2 6.73973 6.47715 2.26257 12 2.26257C17.5228 2.26257 22 6.73973 22 12.2626C22 17.7854 17.5228 22.2626 12 22.2626C6.47715 22.2626 2 17.7854 2 12.2626ZM15.7071 10.9697C16.0976 10.5792 16.0976 9.94599 15.7071 9.55547C15.3166 9.16494 14.6834 9.16494 14.2929 9.55547L11 12.8484L9.70711 11.5555C9.31658 11.1649 8.68342 11.1649 8.29289 11.5555C7.90237 11.946 7.90237 12.5792 8.29289 12.9697L10.2929 14.9697C10.6834 15.3602 11.3166 15.3602 11.7071 14.9697L15.7071 10.9697Z"
                        fill="black"
                      ></path>
                    </svg>
                    <span className="whitespace-wrap text-sm">Exclusive savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px] shrink-0"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12.2626C2 6.73973 6.47715 2.26257 12 2.26257C17.5228 2.26257 22 6.73973 22 12.2626C22 17.7854 17.5228 22.2626 12 22.2626C6.47715 22.2626 2 17.7854 2 12.2626ZM15.7071 10.9697C16.0976 10.5792 16.0976 9.94599 15.7071 9.55547C15.3166 9.16494 14.6834 9.16494 14.2929 9.55547L11 12.8484L9.70711 11.5555C9.31658 11.1649 8.68342 11.1649 8.29289 11.5555C7.90237 11.946 7.90237 12.5792 8.29289 12.9697L10.2929 14.9697C10.6834 15.3602 11.3166 15.3602 11.7071 14.9697L15.7071 10.9697Z"
                        fill="black"
                      ></path>
                    </svg>
                    <span className="whitespace-wrap text-sm">Free shipping</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:order-3 md:flex-row">
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px] shrink-0"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12.2626C2 6.73973 6.47715 2.26257 12 2.26257C17.5228 2.26257 22 6.73973 22 12.2626C22 17.7854 17.5228 22.2626 12 22.2626C6.47715 22.2626 2 17.7854 2 12.2626ZM15.7071 10.9697C16.0976 10.5792 16.0976 9.94599 15.7071 9.55547C15.3166 9.16494 14.6834 9.16494 14.2929 9.55547L11 12.8484L9.70711 11.5555C9.31658 11.1649 8.68342 11.1649 8.29289 11.5555C7.90237 11.946 7.90237 12.5792 8.29289 12.9697L10.2929 14.9697C10.6834 15.3602 11.3166 15.3602 11.7071 14.9697L15.7071 10.9697Z"
                        fill="black"
                      ></path>
                    </svg>
                    <span className="whitespace-wrap text-sm">24-Month Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px] shrink-0"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12.2626C2 6.73973 6.47715 2.26257 12 2.26257C17.5228 2.26257 22 6.73973 22 12.2626C22 17.7854 17.5228 22.2626 12 22.2626C6.47715 22.2626 2 17.7854 2 12.2626ZM15.7071 10.9697C16.0976 10.5792 16.0976 9.94599 15.7071 9.55547C15.3166 9.16494 14.6834 9.16494 14.2929 9.55547L11 12.8484L9.70711 11.5555C9.31658 11.1649 8.68342 11.1649 8.29289 11.5555C7.90237 11.946 7.90237 12.5792 8.29289 12.9697L10.2929 14.9697C10.6834 15.3602 11.3166 15.3602 11.7071 14.9697L15.7071 10.9697Z"
                        fill="black"
                      ></path>
                    </svg>
                    <span className="whitespace-wrap text-sm">Design services</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 rounded-lg bg-black px-6 py-3 text-center font-bold text-white transition hover:bg-gray-900 md:mt-0 md:w-[160px] md:whitespace-nowrap"
            >
              Join Now
            </a>
          </div>
        </div>
        <section className="py-2">
          <div className="container relative clear-both mx-auto w-full max-w-[1570px] px-[15px]">
            <h2 className="mb-4 w-[70%] !text-left text-[32px] font-semibold text-[#000000] sm:w-full md:!text-center">
              Explore our supply &amp; equipment categories
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Restaurant Equipment"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Restaurant Equipment
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Refrigeration Equipment"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Refrigeration Equipment
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Kitchen Supplies"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Kitchen Supplies
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Restaurant Furniture"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Restaurant Furniture
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Restaurant Flatware"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Restaurant Flatware
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Utility Carts"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Utility Carts
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Janitorial Supplies"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Janitorial Supplies
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Restaurant Disposables"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Restaurant Disposables
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Smallwares"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Smallwares
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Storage and Transport"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Storage and Transport
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Tabletop"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Tabletop
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Kitchen Essentials"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Kitchen Essentials
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="School Furniture"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    School Furniture
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Disposable Baking Supplies"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Disposable Baking Supplies
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Cleaning Supplies"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Cleaning Supplies
                  </h3>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex flex-row items-center gap-6 rounded-lg bg-[#f5f5f5] p-4 transition-all duration-300 sm:w-full md:flex-col md:bg-transparent">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#F5F5F5] p-2 transition-all duration-300 md:h-32 md:w-32 md:p-6 xl:h-44 xl:w-44 xl:p-8">
                    <img
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/restaurantequipment.png?t=1744015337"
                      alt="Beverage Equipment"
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium transition-all duration-300 group-hover:text-[#e80a4d] md:text-base">
                    Beverage Equipment
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>
        <CustomCarousel products={topSelling} title="Top Selling Products" />
        <section className="py-2">
          <div className="container mx-auto w-full max-w-[1570px] px-4 sm:px-[15px]">
            <h3 className="font-montserrat mb-6 text-2xl font-semibold leading-[120%] text-black sm:text-[32px] md:mb-8">
              Additional services
            </h3>
            <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
              <div className="flex flex-col gap-4 md:gap-6 lg:order-2 lg:w-1/2">
                <div className="flex flex-col overflow-hidden rounded-lg border-2 border-[#efefef] bg-white lg:flex-row-reverse">
                  <div className="relative h-40 w-full sm:h-48 lg:h-auto lg:w-[30%] xl:w-[25%]">
                    <img
                      alt="Bulk Orders"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: 'transparent',
                      }}
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/bulkorderscard.png?t=1744014942"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-between p-4 sm:p-6 lg:w-[70%] xl:w-[75%]">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-[#000000] sm:mb-3">
                        Bulk orders
                      </h3>
                      <p className="text-sm font-normal text-[#000000]">
                        Need a large order? Contact us for a free quote and enjoy special pricing
                        with personalized service.
                      </p>
                    </div>
                    <a
                      className="mt-4 self-start rounded bg-[#C91926] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-gray-900 sm:mt-6 sm:px-6 sm:py-2 sm:text-base lg:mt-10"
                      href="/contact-us/"
                    >
                      Request a Quote
                    </a>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-lg border-2 border-[#efefef] bg-white lg:flex-row-reverse">
                  <div className="relative h-40 w-full sm:h-48 lg:h-auto lg:w-[30%] xl:w-[25%]">
                    <img
                      alt="Equipment Rental"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: 'transparent',
                      }}
                      src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/equipmentrentalcard.png?t=1744015127"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-between p-4 sm:p-6 lg:w-[70%] xl:w-[75%]">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-[#000000] sm:mb-3">
                        Equipment rental &amp; leasing
                      </h3>
                      <p className="text-sm font-normal text-[#000000]">
                        Get the best competitive rates and options to fit your business needs.
                      </p>
                    </div>
                    <a
                      className="mt-4 self-start rounded bg-[#C91926] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-gray-900 sm:mt-6 sm:px-6 sm:py-2 sm:text-base lg:mt-10"
                      href="/commercial-kitchen-equipment-leasing/"
                    >
                      Request a Quote
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border-2 border-[#efefef] bg-white lg:order-1 lg:w-1/2">
                <div className="relative h-40 sm:h-48 md:h-52 lg:h-60">
                  <img
                    alt="Design, Supply, &amp; Install Service"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://cdn11.bigcommerce.com/s-raxt2z29l9/images/stencil/original/image-manager/designsupplycard.png?t=1744014945"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#000000] sm:mb-3">
                    Design, Supply, &amp; Install
                  </h3>
                  <p className="mb-3 text-sm font-normal text-[#000000] sm:mb-4">
                    Discover a whole new degree of kitchen customization with our proven
                    idea-through-installation model.
                  </p>
                  <a
                    className="rounded bg-[#C91926] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-gray-900 sm:px-6 sm:py-2 sm:text-base"
                    href="/commercial-kitchen-design/"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12 mt-4 pb-[25px]">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right ml-1 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid lg:grid-cols-8">
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/vollrath/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="vollrath"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/vollrath.91d3c390.jpg"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/hobart/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="hobarat"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/hobart-change.9d6e50a5.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/krowne/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="krowne"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/krowne.61c70fd7.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/scotsman/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="scotsman"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/scotsman.b3bf94b3.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/true-manufacturing-co-inc/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="trolle"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/trolle.98dbe483.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/turbo-air/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="lurboair"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/truboair.86e0d7ed.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/vulcan/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="vulcan"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/vulcan.d8f65eb9.png"
                  />
                </div>
              </a>
              <a
                className="group flex h-full flex-col items-center justify-center rounded-lg bg-[#F5F5F5] p-4 transition-all hover:bg-gray-100 hover:shadow-md"
                href="/manitowoc/"
              >
                <div className="relative h-32 w-full">
                  <img
                    alt="manitowoc"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center mix-blend-darken"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="https://www.culinarydepotinc.com/_next/static/media/manitowoc.e652376f.png"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const runtime = 'edge';
