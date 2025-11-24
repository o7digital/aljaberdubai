"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/contexts/TranslationContext"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

const BLockFeatureOne = () => {
   const { t } = useTranslation();

   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">{t('aboutUs.subtitle')}</div>
                        <h3>{t('aboutUs.mainTitle')} <span>{t('aboutUs.familyWord')}<Image src={titleShape} alt="" className="lazy-img" /></span> {t('aboutUs.dreamHome')}</h3>
                        <p className="fs-22">{t('aboutUs.intro')}</p>
                     </div>
                     <Link href="/contact" className="btn-two">{t('aboutUs.contactButton')}</Link>
                     <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={15} /></span>+</div>
                                 <span>{t('aboutUs.yearsExperience')}</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={500} /></span>+</div>
                                 <span>{t('aboutUs.propertiesSold')}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>{t('aboutUs.whoWeAre')}</h5>
                        <p className="fs-22 lh-lg mt-20">{t('aboutUs.whoWeAreText')}</p>
                        <h5 className="top-line">{t('aboutUs.ourMission')}</h5>
                        <p className="fs-22 lh-lg mt-20">{t('aboutUs.ourMissionText')}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
