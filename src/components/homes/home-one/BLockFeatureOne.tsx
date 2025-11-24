"use client"
import Image from "next/image"
import { useTranslation } from "@/contexts/TranslationContext"

import featureIcon_1 from "@/assets/images/icon/icon_01.svg";
import featureIcon_2 from "@/assets/images/icon/icon_02.svg";
import featureIcon_3 from "@/assets/images/icon/icon_03.svg";
import titleShape from "@/assets/images/shape/title_shape_01.svg"

const BLockFeatureOne = () => {
   const { t } = useTranslation();

   const features = [
      {
         id: 1,
         icon: featureIcon_1,
         titleKey: "features.buyHome",
         descKey: "features.buyHomeDesc",
         btnKey: "features.findHome"
      },
      {
         id: 2,
         icon: featureIcon_2,
         titleKey: "features.rentHome",
         descKey: "features.rentHomeDesc",
         btnKey: "features.rentHomeBtn"
      },
      {
         id: 3,
         icon: featureIcon_3,
         titleKey: "features.sellProperty",
         descKey: "features.sellPropertyDesc",
         btnKey: "features.sellPropertyBtn"
      }
   ];
   
   return (
      <div className="block-feature-one mt-130 xl-mt-100 lg-mt-80 mb-150 xl-mb-100 lg-mb-80">
         <div className="container">
            <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
               <h3>{t('features.title')} <span>{t('features.titleHighlight')} <Image src={titleShape} alt="" className="lazy-img" /></span></h3>
               <p className="fs-24">{t('features.subtitle')}</p>
            </div>

            <div className="row gx-xl-5">
               {features.map((item) => (
                  <div key={item.id} className="col-md-4">
                     <div className="card-style-one text-center wow fadeInUp mt-40">
                        <Image src={item.icon} alt="" className="lazy-img m-auto icon" />
                        <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">{t(item.titleKey)}</div>
                        <p className="fs-24 ps-xxl-4 pe-xxl-4">{t(item.descKey)}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
