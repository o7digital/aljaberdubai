"use client"
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import DropdownOne from "@/components/search-dropdown/home-dropdown/DropdownOne"
import { useTranslation } from "@/contexts/TranslationContext"

const Banner = () => {
   const sliderRef = useRef<Slider | null>(null)
   const { t } = useTranslation();
   const [showSearch, setShowSearch] = useState(false);

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
            {/* Bouton pour afficher la search bar sur mobile */}
            <div className="row d-lg-none mb-3">
               <div className="col-12 text-center">
                  <button 
                     onClick={() => setShowSearch(!showSearch)}
                     className="btn btn-primary"
                     style={{
                        backgroundColor: '#ff5722',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '500'
                     }}
                  >
                     {showSearch ? '✕ Fermer la recherche' : '🔍 Rechercher un bien'}
                  </button>
               </div>
            </div>
            
            {/* Search bar - visible sur desktop, collapsible sur mobile */}
            <div className={`row ${showSearch ? 'd-block' : 'd-none d-lg-block'}`}>
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
