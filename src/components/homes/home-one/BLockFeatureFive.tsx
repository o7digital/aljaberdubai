"use client"
import Image from "next/image"
import { useTranslation } from "@/contexts/TranslationContext";

import feature3Icon_1 from "@/assets/images/icon/icon_07.svg";
import feature3Icon_2 from "@/assets/images/icon/icon_08.svg";
import feature3Icon_3 from "@/assets/images/icon/icon_09.svg";
import titleShape from "@/assets/images/shape/title_shape_07.svg";
import featureShape_1 from "@/assets/images/shape/shape_07.svg";
import featureShape_2 from "@/assets/images/shape/shape_08.svg";

const BLockFeatureFive = ({ style }: any) => {
   const { t } = useTranslation();

   const features = [
      {
         id: 1,
         icon: feature3Icon_1,
         titleKey: "stepsSection.createAccount",
         descKey: "stepsSection.createAccountDesc",
      },
      {
         id: 2,
         icon: feature3Icon_2,
         titleKey: "stepsSection.findHome",
         descKey: "stepsSection.findHomeDesc",
         class_name: "arrow position-relative"
      },
      {
         id: 3,
         icon: feature3Icon_3,
         titleKey: "stepsSection.quickProcess",
         descKey: "stepsSection.quickProcessDesc",
      }
   ];
   
   return (
      <div className={`block-feature-five position-relative z-1 pb-130 xl-pb-100 lg-pb-80 ${style ? " pt-170 xl-pt-120" : "bg-pink pt-100 lg-pt-80 mt-225 xl-mt-200 lg-mt-150"}`}>
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto">
                  <div className="title-one text-center mb-35 lg-mb-20">
                     <h3>{t('stepsSection.title')} <br /> {t('stepsSection.subtitle')} <span><Image src={titleShape} alt="" className="lazy-img" /></span></h3>
                     <p className="fs-24 color-dark">{t('stepsSection.easyStart')}</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-between">
               <div className="col-xxl-11 m-auto">
                  <div className="row gx-xl-5 justify-content-center">
                     {features.map((item) => (
                        <div key={item.id} className="col-lg-4 col-sm-6">
                           <div className={`card-style-one text-center wow fadeInUp mt-40 ${item.class_name || ""}`}>
                              <Image src={item.icon} alt="" className="lazy-img m-auto icon" />
                              <h5 className="mt-50 lg-mt-30 mb-15">{t(item.titleKey)}</h5>
                              <p className="pe-xxl-4 ps-xxl-4">{t(item.descKey)}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <Image src={featureShape_1} alt="" className="lazy-img shapes shape_01" />
         <Image src={featureShape_2} alt="" className="lazy-img shapes shape_02" />
      </div>
   )
}

export default BLockFeatureFive
