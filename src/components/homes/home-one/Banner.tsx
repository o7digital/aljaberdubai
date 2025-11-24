"use client"
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import DropdownOne from "@/components/search-dropdown/home-dropdown/DropdownOne"
import { useTranslation } from "@/contexts/TranslationContext"

const Banner = () => {
   const sliderRef = useRef<Slider | null>(null)
   const { t } = useTranslation();

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
                        objectPosition: 'center top',
                        transform: 'translateY(-60px)'
                     }}
                  />
               </div>
            </Slider>
         </div>

         <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
               <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto text-center">
                  <p className="fs-24 pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s" style={{
                     backgroundColor: '#ffffff',
                     color: '#1a1a1a',
                     padding: '15px 30px',
                     borderRadius: '8px',
                     display: 'inline-block'
                  }}>{t('banner.title')}</p>
               </div>
            </div>
            
            {/* Search bar - caché par défaut, visible au hover/tap */}
            <div className="row">
               <div className="col-xxl-10 m-auto">
                  <div className="search-wrapper-one layout-one bg position-relative search-hover-container">
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
            
            /* Search bar cachée par défaut */
            .search-hover-container {
               opacity: 0;
               transform: translateY(20px);
               transition: all 0.4s ease;
               pointer-events: none;
            }
            
            /* Search bar visible au survol ou au focus */
            .search-hover-container:hover,
            .search-hover-container:focus-within {
               opacity: 1;
               transform: translateY(0);
               pointer-events: auto;
            }
            
            /* Sur mobile, afficher au tap (touch) */
            @media (max-width: 991px) {
               .search-hover-container {
                  opacity: 0.3;
                  pointer-events: auto;
               }
               
               .search-hover-container:active,
               .search-hover-container:focus-within {
                  opacity: 1;
                  transform: translateY(0);
               }
            }
         `}</style>
      </div>
   )
}

export default Banner
