import React from 'react'
import dynamic from 'next/dynamic'
import PipingRiserFeature from '../components/PipingRiserFeature'
import InfrastructureRisers from '../components/InfrastructureRisers'
import SolutionsSection from '../components/SolutionsSection'
import IndustrySolutions from '../components/IndustrySolutions'
import Product3DShowcase from '../../components/ui/sections/Product3DShowcase'
import ProjectGallery from '@/components/ui/sections/ProjectGallery'
import AdjustmentProducts from '@/components/ui/sections/AdjustmentProducts'
import SmartInfraSection from '../components/SmartInfraSection'
import HeroScrollSequence from '@/components/ui/sections/HeroScrollSequence'
import ServicesAndSolutions from '../components/ServicesAndSolutions'
import ContractorResources from '../components/ContractorResources'
import AdditionalResourcesSlugs from '../components/AdditionalResourcesSlugs'

const HeroCarousel = dynamic(() => import('@/components/ui/sections/HeroCarousel'))
const PavingRisersCatalog = dynamic(() => import('../components/PavingRisersCatalog'))
const OurProducts = dynamic(() => import('../components/ourProduct'))
const Home = () => {
  return (
    <div>
      {/* <HeroScrollSequence /> */}
      <HeroCarousel />
      <PavingRisersCatalog />
      <OurProducts />
      <Product3DShowcase />
      {/* <ProjectGallery /> */}
      <SolutionsSection />
      <IndustrySolutions />
      <ServicesAndSolutions/>
      <PipingRiserFeature />
      <ContractorResources/>
      <InfrastructureRisers />
      {/* <ProductCatalog /> */}
      <AdjustmentProducts />
      <AdditionalResourcesSlugs/>
      <SmartInfraSection />
    </div>
  )
}

export default Home
