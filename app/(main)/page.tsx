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
import ContactExtraordinary from './ContactExtraordinary'
import CombinedRiserSolutions from '../components/CombinedRiserSolutions'
import PavingPathHero from '../components/mega-taglines'
import ProductInteractiveImage from '../components/ProductInteractiveImage'
import InteractiveProduct from '../components/InteractiveProduct'

const HeroCarousel = dynamic(() => import('@/components/ui/sections/HeroCarousel'))
const PavingRisersCatalog = dynamic(() => import('../components/PavingRisersCatalog'))
const OurProducts = dynamic(() => import('../components/ourProduct'))
const riser_point = [
  { id: 1, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
  { id: 2, x: '45%', y: '70%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
  { id: 3, x: '65%', y: '60%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
];
const Home = () => {
  return (
    <div>
      {/* <HeroScrollSequence /> */}
      <Product3DShowcase />
      <PavingPathHero />
      <HeroCarousel />
      <PavingRisersCatalog />
      <section className='our-product' id='our-product'>
        <OurProducts />
      </section>
      {/* <ProjectGallery /> */}
      <SolutionsSection />
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
    </div>
  )
}

export default Home
