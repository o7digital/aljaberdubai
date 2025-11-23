"use client"
import Image from "next/image"
import Link from "next/link"
import SocialIcon from "@/components/common/SocialIcon"
import { useTranslation } from "@/contexts/TranslationContext"

import titleShape from "@/assets/images/shape/title_shape_04.svg"

const FancyBannerOne = ({ style }: any) => {
   const { t } = useTranslation();
   
   return (
      <div className={`fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100 ${style ? "mt-200 xl-mt-150 lg-mt-120" : ""}`}>
         <div className={`container ${style ? "container-large" : ""}`}>
            <div className="row">
               <div className={`col-lg-6 wow fadeInLeft ${style ? "col-xxl-5" : ""}`}>
                  <div className="title-one mb-45 lg-mb-30">
                     <h3 className="text-white">{t('fancyBanner.exclusive')} <span>{t('fancyBanner.monthly')} {style ? "" : <Image src={titleShape} alt="" className="lazy-img" />}</span>{t('fancyBanner.deal')}</h3>
                     <p className="fs-24 text-white pe-xl-5 me-xxl-5">{t('fancyBanner.subtitle')}</p>
                  </div>
                  <Link href="/listing_details_02" className="btn-six">{t('fancyBanner.moreDetails')}</Link>
               </div>

               <div className={`col-lg-6 wow fadeInRight ${style ? "ms-auto" : ""}`}>
                  <div className={`property-item md-mt-60 position-relative z-1 ${style ? "rounded-0" : ""}`}>
                     <div className="row gx-0">
                        <div className="col-md-5 d-flex">
                           <div className="gutter border-right w-100 h-100">
                              <div className="tag mb-20">{t('fancyBanner.forSell')}</div>
                              <h4 className="mb-70 sm-mb-40">Luxury fisa orkit villa.</h4>
                              <ul className="style-none d-flex action-icons">
                                 <SocialIcon />
                              </ul>
                           </div>
                        </div>

                        <div className="col-md-7 d-flex">
                           <div className="gutter w-100 h-100">
                              <p>Mirpur 10, National Stadium, 1210, Dhaka, BD</p>
                              <h2 className="price text-center">$28,100.00</h2>
                              <ul className="style-none d-flex feature">
                                 <li>
                                    <strong className="d-block color-dark fw-500 fs-20">2137</strong>
                                    <span className="fs-16">{t('property.sqft')}</span>
                                 </li>
                                 <li className="text-center">
                                    <strong className="d-block color-dark fw-500 fs-20">03</strong>
                                    <span className="fs-16">{t('property.bed')}</span>
                                 </li>
                                 <li className="text-end">
                                    <strong className="d-block color-dark fw-500 fs-20">02</strong>
                                    <span className="fs-16">{t('property.bath')}</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     <div className="button-group gutter d-flex justify-content-between align-items-center">
                        <Link href="/listing_details_02" className="btn-three"><span>{t('fancyBanner.checkFullDetails')}</span></Link>
                        <Link href="/listing_details_02" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBannerOne
