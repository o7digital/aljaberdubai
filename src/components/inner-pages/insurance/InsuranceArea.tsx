"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/contexts/TranslationContext"

import titleShape from "@/assets/images/shape/title_shape_06.svg"

const InsuranceArea = () => {
   const { t } = useTranslation();

   const services = [
      {
         id: 1,
         icon: "🏠",
         title: t('insurance.propertyInsurance'),
         description: t('insurance.propertyInsuranceDesc')
      },
      {
         id: 2,
         icon: "🔑",
         title: t('insurance.homeInsurance'),
         description: t('insurance.homeInsuranceDesc')
      },
      {
         id: 3,
         icon: "💼",
         title: t('insurance.investmentProtection'),
         description: t('insurance.investmentProtectionDesc')
      },
      {
         id: 4,
         icon: "⚡",
         title: t('insurance.liabilityInsurance'),
         description: t('insurance.liabilityInsuranceDesc')
      }
   ];

   return (
      <div className="insurance-section mt-150 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            {/* Hero Section */}
            <div className="row mb-80 xl-mb-60">
               <div className="col-lg-8 m-auto text-center">
                  <div className="title-one">
                     <h2>{t('insurance.mainTitle')} <span>{t('insurance.titleHighlight')}<Image src={titleShape} alt="" className="lazy-img" /></span></h2>
                     <p className="fs-22 mt-30">{t('insurance.subtitle')}</p>
                  </div>
               </div>
            </div>

            {/* Services Grid */}
            <div className="row gx-xxl-5">
               {services.map((service) => (
                  <div key={service.id} className="col-lg-6 mb-40">
                     <div className="card-style-sixteen text-center position-relative h-100">
                        <div className="icon d-flex align-items-center justify-content-center m-auto" style={{ fontSize: '60px', marginBottom: '20px' }}>
                           {service.icon}
                        </div>
                        <h4 className="mb-20">{service.title}</h4>
                        <p className="fs-20">{service.description}</p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="row mt-80 xl-mt-60">
               <div className="col-lg-10 m-auto">
                  <div className="bg-wrapper rounded-4 p-50 xl-p-40">
                     <h3 className="mb-40 text-center">{t('insurance.whyChooseUs')}</h3>
                     <div className="row">
                        <div className="col-md-6 mb-30">
                           <div className="d-flex align-items-start">
                              <div className="me-3" style={{ fontSize: '30px' }}>✓</div>
                              <div>
                                 <h5 className="mb-10">{t('insurance.benefit1Title')}</h5>
                                 <p>{t('insurance.benefit1Desc')}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 mb-30">
                           <div className="d-flex align-items-start">
                              <div className="me-3" style={{ fontSize: '30px' }}>✓</div>
                              <div>
                                 <h5 className="mb-10">{t('insurance.benefit2Title')}</h5>
                                 <p>{t('insurance.benefit2Desc')}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 mb-30">
                           <div className="d-flex align-items-start">
                              <div className="me-3" style={{ fontSize: '30px' }}>✓</div>
                              <div>
                                 <h5 className="mb-10">{t('insurance.benefit3Title')}</h5>
                                 <p>{t('insurance.benefit3Desc')}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 mb-30">
                           <div className="d-flex align-items-start">
                              <div className="me-3" style={{ fontSize: '30px' }}>✓</div>
                              <div>
                                 <h5 className="mb-10">{t('insurance.benefit4Title')}</h5>
                                 <p>{t('insurance.benefit4Desc')}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* CTA Section */}
            <div className="row mt-60">
               <div className="col-lg-8 m-auto text-center">
                  <h3 className="mb-30">{t('insurance.ctaTitle')}</h3>
                  <p className="fs-20 mb-40">{t('insurance.ctaSubtitle')}</p>
                  <Link href="/contact" className="btn-two">{t('insurance.ctaButton')}</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InsuranceArea
