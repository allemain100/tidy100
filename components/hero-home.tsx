import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'
import Image from "next/image";
import HeroImage from "@/public/images/lsc-pcr-bkg.jpg"
import AxpHeroThumb from '@/public/images/540x405.svg'
import AxpHeroImage from '@/public/images/lsc-pcr-2025-color.jpg'

export default function HeroHome() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-20 w-full h-full object-cover" src={HeroImage} width={1440} height={497} priority alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-slate-100 mb-4">Philadelphia Cup Regatta 2025</h1>
              <p className="text-xl text-slate-400 mb-8">Liberty Sailing Club is taking the helm as the organizing club, and we would love to
                have you as part of this event.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#sponsor">
                    Sponsor Info <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                <div>
                  <Link className="btn text-white bg-slate-700 hover:bg-slate-800 w-full" href="#details">Regatta Details</Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            {/*<Image className="opacity-20 w-full h-full object-cover" src={HeroImage} width={1440} height={497} priority alt="Hero" />*/}

            {/*<Image className="opacity-20 w-full h-full object-cover" src={AxpHeroImage} width={540} height={405} priority alt="Hero" />*/}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>
                <Image src={AxpHeroImage} width={540} height={405} alt="Hero" />
              </div>
            </div>
            {/*<ModalVideo01*/}
            {/*  thumb={AxpHeroThumb}*/}
            {/*  thumbWidth={540}*/}
            {/*  thumbHeight={405}*/}
            {/*  thumbAlt="Modal video thumbnail"*/}
            {/*  video="/videos/video.mp4"*/}
            {/*  videoWidth={1920}*/}
            {/*  videoHeight={1080} />*/}

          </div>

        </div>
      </div>
    </section>
  )
}