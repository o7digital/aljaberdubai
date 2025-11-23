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
      <div className="hero-banner-one z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative" style={{ overflow: 'hidden' }}>
         {/* Background Slider */}
         <div className="hero-slider-wrapper position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
            <Slider ref={sliderRef} {...settings}>
               <div className="slider-item">
                  <div className="slider-bg" style={{
                     backgroundImage: 'url(/slider/dubai1.jpg)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     width: '100%',
                     height: '100%',
                     position: 'absolute',
                     top: 0,
                     left: 0
                  }} />
               </div>
               <div className="slider-item">
                  <div className="slider-bg" style={{
                     backgroundImage: 'url(/slider/dubai2.jpg)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     width: '100%',
                     height: '100%',
                     position: 'absolute',
                     top: 0,
                     left: 0
                  }} />
               </div>
            </Slider>
         </div>

         {/* Overlay pour améliorer la lisibilité du texte */}
         <div className="position-absolute w-100 h-100" style={{ 
            top: 0, 
            left: 0, 
            background: 'rgba(255, 255, 255, 0.85)',
            zIndex: 1 
         }} />

         <div className="container position-relative" style={{ zIndex: 2 }}>
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
      </div>
   )
}

export default Banner
