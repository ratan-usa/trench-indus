import React from 'react'
import PipingRiserFeature from '../components/PipingRiserFeature'
import InfrastructureRisers from '../components/InfrastructureRisers'
import PavingRisersCatalog from '../components/PavingRisersCatalog'
import SolutionsSection from '../components/SolutionsSection'
import IndustrySolutions from '../components/IndustrySolutions'
import Product3DShowcase from '../../components/ui/sections/Product3DShowcase'

const Home = () => {
  return (
    <div>
      <PavingRisersCatalog />
      <Product3DShowcase />
      <SolutionsSection />
      <IndustrySolutions />
      <PipingRiserFeature />
      <InfrastructureRisers />
    </div>
  )
}

export default Home
