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

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <PavingRisersCatalog />
      <Product3DShowcase />
      {/* <ProjectGallery /> */}
      <SolutionsSection />
      <IndustrySolutions />
      <PipingRiserFeature />
      <InfrastructureRisers />
      {/* <ProductCatalog /> */}
      <AdjustmentProducts />
    </div>
  )
}

export default Home
