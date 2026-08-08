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
import PavingPathHero from '../components/mega-taglines'
import ProductInteractiveImage from '../components/ProductInteractiveImage'
import RedesignedSolutionsSection from './RedesignedSolutionsSection'
import PavingRisersHeroSection from '../components/PavingRisersHeroSection'
import ToolsAndAccessoriesCatalog from '../components/ToolsAndAccessoriesCatalog'
import CompleteToolsCatalog from '../components/CompleteToolsCatalog'
import InteractiveProduct from '../components/InteractiveProduct'
import PremiumPavingShowcase from '../components/PremiumPavingShowcase'
import AppleStylePavingShowcase from '../components/AppleStylePavingShowcase'
import PavingRiserClassification from './PavingRiserClassification'
import RiserProductSpecifications from './RiserProductSpecifications'
import CatchBasinSteelRisers from './CatchBasinSteelRisers'
import RiserOrderSpecifications from './RiserOrderSpecifications'
import FabricatedGratesSection from './FabricatedGratesSection'
import RiserAnimationShowcase from '../components/RiserAnimationShowcase'
import InfiniteRiserShowcase from '../components/InfiniteRiserShowcase'
import GratesRacksAndTools from './GratesRacksAndTools'

const HeroCarousel = dynamic(() => import('@/components/ui/sections/HeroCarousel'))
const PavingRisersCatalog = dynamic(() => import('../components/PavingRisersCatalog'))
const OurProducts = dynamic(() => import('../components/ourProduct'))

// 3D Canvas components must be loaded dynamically to avoid SSR ProgressEvent errors and timeouts
const Product3DShowcase = dynamic(() => import('../../components/ui/sections/Product3DShowcase'), { ssr: false })
const Product3DShowcase2 = dynamic(() => import('./Product3DShowcase2'), { ssr: false })
const Interactive3DShowcase = dynamic(() => import('../components/Interactive3DShowcase'), { ssr: false })

const Home = () => {
  return (
    <div>
      {/* <HeroScrollSequence /> */}
      <PavingPathHero />
      <InfiniteRiserShowcase />
      <Product3DShowcase2 />
      <GratesRacksAndTools />
      <Product3DShowcase />
      <Interactive3DShowcase />
      <PavingRisersHeroSection />
      <PavingRiserClassification />
      <RiserProductSpecifications />
      <CatchBasinSteelRisers />
      <FabricatedGratesSection />
      <RiserOrderSpecifications />
      {/* <AppleStylePavingShowcase/> */}
      <ToolsAndAccessoriesCatalog />
      <CompleteToolsCatalog />
      <HeroCarousel />
      <PavingRisersCatalog />
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
      <CombinedRiserSolutions />
      {/* <ProductCatalog /> */}
      <SmartInfraSection />
      <AdjustmentProducts />
      <PremiumPavingShowcase />
      <AdditionalResourcesSlugs />
      <section id='contact-us'>
        <ContactExtraordinary />
      </section>
      <ProductInteractiveImage />
      {/* <InteractiveProduct/> */}


    </div>
  )
}

export default Home
