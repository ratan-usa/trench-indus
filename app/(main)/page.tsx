import React from 'react'
import PipingRiserFeature from '../components/PipingRiserFeature'
import InfrastructureRisers from '../components/InfrastructureRisers'
import PavingRisersCatalog from '../components/PavingRisersCatalog'
import SolutionsSection from '../components/SolutionsSection'
import IndustrySolutions from '../components/IndustrySolutions'
import Product3DShowcase from '../../components/ui/sections/Product3DShowcase'
import HeroCarousel from '@/components/ui/sections/HeroCarousel'
import ProjectGallery from '@/components/ui/sections/ProjectGallery'
import AdjustmentProducts from '@/components/ui/sections/AdjustmentProducts'
import SmartInfraSection from '../components/SmartInfraSection'
import OurProducts from '../components/ourProduct'
import HeroScrollSequence from '@/components/ui/sections/HeroScrollSequence'

const Home = () => {
  return (
    <div>
      <HeroScrollSequence />
      <HeroCarousel />
      <PavingRisersCatalog />
      <OurProducts />
      <Product3DShowcase />
      {/* <ProjectGallery /> */}
      <SolutionsSection />
      <IndustrySolutions />
      <PipingRiserFeature />
      <InfrastructureRisers />
      {/* <ProductCatalog /> */}
      <AdjustmentProducts />
      <SmartInfraSection />
    </div>
  )
}

export default Home
