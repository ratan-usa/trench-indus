import React from 'react'
import PipingRiserFeature from '../components/PipingRiserFeature'
import InfrastructureRisers from '../components/InfrastructureRisers'
import PavingRisersCatalog from '../components/PavingRisersCatalog'
import SolutionsSection from '../components/SolutionsSection'

const Home = () => {
  return (
    <div>
      {/* <PipingRiserFeature /> */}
      {/* <InfrastructureRisers/> */}
      <SolutionsSection/>
      <PavingRisersCatalog/>
    </div>
  )
}

export default Home
