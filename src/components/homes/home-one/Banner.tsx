"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Slider from "react-slick"
import DropdownOne from "@/components/search-dropdown/home-dropdown/DropdownOne"
import titleShape from "@/assets/images/shape/shape_01.svg"

const Banner = () => {
   const sliderRef = useRef<Slider | null>(null)

   const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   }

   useEffect(() => {
      const slider = sliderRef.current
      if (slider) {
         slider.slickPlay()
      }
   }, [])

   return (
      <div className="hero-banner-one z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative" style={{ overflow: 'hidden', minHeight: '800px' }}>
         {/* Background Slider */}
         <div className="hero-slider-wrapper position-absolute" style={{ 
            top: 0, 
            left: 0, 
            width: '100%',
            height: '100%',
            zIndex: 0
         }}>
            <Slider ref={sliderRef} {...settings}>
               <div style={{ height: '100%', width: '100%' }}>
                  <img 
                     src="/slider/dubai1.jpg"
                     alt="Dubai"
                     style={{
                        width: '100%',
                        height: '800px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                     }}
                  />
               </div>
               <div style={{ height: '100%', width: '100%' }}>
                  <img 
                     src="/slider/dubai2.jpg"
                     alt="Dubai"
                     style={{
                        width: '100%',
                        height: '800px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                     }}
                  />
               </div>
            </Slider>
         </div>

         <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
               <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto">
                  <h1 className="hero-heading text-center wow fadeInUp">ALJABER <span className="d-inline-block position-relative">DUBAI <Image src={titleShape} alt="" className="lazy-img" /></span></h1>
                  <p className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">We've more than 745,000 apartments, place & plot.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-xxl-10 m-auto">
                  <div className="search-wrapper-one layout-one bg position-relative">
                     <div className="bg-wrapper">
                        <DropdownOne style={false} />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            .hero-slider-wrapper :global(.slick-slider),
            .hero-slider-wrapper :global(.slick-list),
            .hero-slider-wrapper :global(.slick-track) {
               height: 100% !important;
            }
            .hero-slider-wrapper :global(.slick-slide) {
               height: 100% !important;
            }
            .hero-slider-wrapper :global(.slick-slide) > div {
               height: 100% !important;
               display: block !important;
            }
         `}</style>
      </div>
   )
}

export default Banner
