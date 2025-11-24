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
            
            {/* Search bar avec effet hover/touch - transparent par défaut */}
            <div className="row">
               <div className="col-xxl-10 m-auto">
                  <div 
                     className="booking-hover-zone" 
                     tabIndex={0} 
                     style={{ outline: 'none' }}
                     id="booking-hover-container"
                  >
                     <div 
                        className="search-wrapper-one layout-one bg position-relative booking-bar-inner"
                        id="booking-bar-container"
                     >
                        <div className="bg-wrapper">
                           <DropdownOne style={false} />
                        </div>
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

            /* Technique d'affichage au survol/touch */
            .booking-hover-zone {
               cursor: pointer;
            }

            .booking-bar-inner {
               opacity: 0.15;
               pointer-events: none;
               transform: scale(0.98);
               transition: opacity 0.4s ease, transform 0.4s ease, backdrop-filter 0.4s ease;
               backdrop-filter: blur(2px);
            }

            .booking-bar-inner :global(.bg-wrapper) {
               background: rgba(255, 255, 255, 0.7) !important;
               transition: background 0.4s ease;
            }

            /* États hover et focus pour desktop */
            .booking-hover-zone:hover .booking-bar-inner,
            .booking-hover-zone:focus-within .booking-bar-inner {
               opacity: 1;
               pointer-events: auto;
               transform: scale(1);
               backdrop-filter: blur(8px);
            }

            .booking-hover-zone:hover .booking-bar-inner :global(.bg-wrapper),
            .booking-hover-zone:focus-within .booking-bar-inner :global(.bg-wrapper) {
               background: rgba(255, 255, 255, 0.95) !important;
            }

            /* Support mobile/tablette */
            @media (max-width: 991px) {
               .booking-bar-inner {
                  opacity: 0.2;
                  transform: scale(0.97);
               }

               .booking-hover-zone:active .booking-bar-inner,
               .booking-hover-zone:focus-within .booking-bar-inner {
                  opacity: 1;
                  pointer-events: auto;
                  transform: scale(1);
               }
            }
         `}</style>

         <script dangerouslySetInnerHTML={{
            __html: `
               // Support tactile/mobile
               if (typeof window !== 'undefined') {
                  setTimeout(() => {
                     const box = document.getElementById('booking-hover-container');
                     const barContainer = document.getElementById('booking-bar-container');
                     
                     if (box && barContainer) {
                        let hideTimeout;
                        
                        box.addEventListener('touchstart', () => {
                           barContainer.style.opacity = '1';
                           barContainer.style.pointerEvents = 'auto';
                           barContainer.style.transform = 'scale(1)';
                           barContainer.style.backdropFilter = 'blur(8px)';
                           
                           clearTimeout(hideTimeout);
                           
                           hideTimeout = setTimeout(() => {
                              barContainer.style.opacity = '0.2';
                              barContainer.style.pointerEvents = 'none';
                              barContainer.style.transform = 'scale(0.97)';
                              barContainer.style.backdropFilter = 'blur(2px)';
                           }, 3000);
                        });
                     }
                  }, 100);
               }
            `
         }} />
      </div>
   )
}

export default Banner
