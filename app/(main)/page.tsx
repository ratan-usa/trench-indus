import React from 'react'
import dynamic from 'next/dynamic'
import Product3DShowcase from '../../components/ui/sections/Product3DShowcase'
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
import Interactive3DShowcase from '../components/Interactive3DShowcase'
import PremiumPavingShowcase from '../components/PremiumPavingShowcase'
import AppleStylePavingShowcase from '../components/AppleStylePavingShowcase'
import Product3DShowcase2 from './Product3DShowcase2'
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
