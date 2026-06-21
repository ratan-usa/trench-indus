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

const HeroCarousel = dynamic(() => import('@/components/ui/sections/HeroCarousel'))
const PavingRisersCatalog = dynamic(() => import('../components/PavingRisersCatalog'))
const OurProducts = dynamic(() => import('../components/ourProduct'))

const Home = () => {
  return (
    <div>
      {/* <HeroScrollSequence /> */}
      <PavingPathHero />
      <Product3DShowcase />
      <PavingRisersHeroSection />
      <ToolsAndAccessoriesCatalog />
      <CompleteToolsCatalog />
      <HeroCarousel />
      <PavingRisersCatalog />
      <RedesignedSolutionsSection />
      <section className='our-product' id='our-product'>
        <OurProducts />
      </section>
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
      <AdditionalResourcesSlugs />
      <ContactExtraordinary />
      <ProductInteractiveImage />
      {/* <InteractiveProduct/> */}
      <Interactive3DShowcase />


    </div>
  )
}

export default Home
