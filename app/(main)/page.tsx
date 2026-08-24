'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import AdjustmentProducts from '@/components/ui/sections/AdjustmentProducts'
import SmartInfraSection from '../components/SmartInfraSection'
import ServicesAndSolutions from '../components/ServicesAndSolutions'
import ContractorResources from '../components/ContractorResources'
import AdditionalResourcesSlugs from '../components/AdditionalResourcesSlugs'
import ContactExtraordinary from './ContactExtraordinary'
import CombinedRiserSolutions from '../components/CombinedRiserSolutions'
import ProductInteractiveImage from '../components/ProductInteractiveImage'
import RedesignedSolutionsSection from './RedesignedSolutionsSection'
import trenchingRisersHeroSection from '../components/trenchingRisersHeroSection'
import ToolsAndAccessoriesCatalog from '../components/ToolsAndAccessoriesCatalog'
import CompleteToolsCatalog from '../components/CompleteToolsCatalog'
import InteractiveProduct from '../components/InteractiveProduct'
import PremiumtrenchingShowcase from '../components/PremiumtrenchingShowcase'
import AppleStyletrenchingShowcase from '../components/AppleStyletrenchingShowcase'
import trenchingRiserClassification from './trenchingRiserClassification'
import RiserProductSpecifications from './RiserProductSpecifications'
import CatchBasinSteelRisers from './CatchBasinSteelRisers'
import RiserOrderSpecifications from './RiserOrderSpecifications'
import FabricatedGratesSection from './FabricatedGratesSection'
import RiserAnimationShowcase from '../components/RiserAnimationShowcase'
import InfiniteRiserShowcase from '../components/InfiniteRiserShowcase'
import GratesRacksAndTools from './GratesRacksAndTools'
import trenchingProductsTable from '../components/trenchingProductsTable'
import SaferRoadsCTA from '../components/SaferRoadsCTA'
import UltimateResultsPattern from '../components/UltimateResultsPattern'
import StandardsMarquee from './StandardsMarquee';
import Preloader from '../components/Preloader';

const HeroCarousel = dynamic(() => import('@/components/ui/sections/HeroCarousel'))
const trenchingRisersCatalog = dynamic(() => import('../components/trenchingRisersCatalog'))
const OurProducts = dynamic(() => import('../components/ourProduct'))
const trenchingPathHero = dynamic(() => import('../components/trenching-taglines'))

// 3D Canvas components must be loaded dynamically to avoid SSR ProgressEvent errors and timeouts
const Product3DShowcase = dynamic(() => import('../../components/ui/sections/Product3DShowcase'), { ssr: false })
const Product3DShowcase2 = dynamic(() => import('./Product3DShowcase2'), { ssr: false })
const Interactive3DShowcase = dynamic(() => import('../components/Interactive3DShowcase'), { ssr: false })

const Home = () => {
  return (
    <div>
      {/* <Preloader /> */}
      {/* <HeroScrollSequence /> */}
      <trenchingPathHero />
      <Product3DShowcase2 />
      <UltimateResultsPattern />
      <StandardsMarquee/>
      <trenchingRiserClassification />
      <SaferRoadsCTA />
      <InfiniteRiserShowcase />
      <CombinedRiserSolutions />
      <ProductInteractiveImage />
      <GratesRacksAndTools />
      {/* <Product3DShowcase /> */}
      <trenchingRisersHeroSection />
      {/* <Interactive3DShowcase /> */}
      <RiserProductSpecifications />
      <CatchBasinSteelRisers />
      <FabricatedGratesSection />
      <RiserOrderSpecifications />
      {/* <AppleStyletrenchingShowcase/> */}
      <ToolsAndAccessoriesCatalog />
      <CompleteToolsCatalog />
      <HeroCarousel />
      <trenchingRisersCatalog />
      <RedesignedSolutionsSection />
      <section className='our-product' id='our-product'>
        <OurProducts />
      </section>
      {/* <RiserAnimationShowcase/> */}
      {/* <ProjectGallery /> */}
      {/* <IndustrySolutions /> */}
      <ServicesAndSolutions />
      {/* <PipingRiserFeature /> */}
      <ContractorResources />
      {/* <InfrastructureRisers /> */}
      {/* <ProductCatalog /> */}
       <trenchingProductsTable />  
      <SmartInfraSection />
      <AdjustmentProducts />
      <PremiumtrenchingShowcase />
      <AdditionalResourcesSlugs />
      <section id='contact-us'>
        <ContactExtraordinary />
      </section>
      {/* <InteractiveProduct/> */}


    </div>
  )
}

export default Home
