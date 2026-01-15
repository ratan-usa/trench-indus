import React from 'react'
import PipingRiserFeature from '../components/PipingRiserFeature'
import InfrastructureRisers from '../components/InfrastructureRisers'
import PavingRisersCatalog from '../components/PavingRisersCatalog'
import SolutionsSection from '../components/SolutionsSection'
import IndustrySolutions from '../components/IndustrySolutions'

const Home = () => {
  return (
    <div>
      <PavingRisersCatalog />
      <SolutionsSection />
      <IndustrySolutions />
      <PipingRiserFeature />
      <InfrastructureRisers />
    </div>
  )
}

export default Home
