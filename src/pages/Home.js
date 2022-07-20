import React from 'react'
import Hero2 from '../ui-components/HeroLayout2'
import Features4x1 from '../ui-components/Features4x1'
import Features2x2  from '../ui-components/Features2x2'
import TallCard  from '../ui-components/TallCard'

const Home = () => {
  return (
    <div>
        <Hero2 />
        <Features4x1 />
        <TallCard />
        <TallCard />
        <TallCard />
        <TallCard />
        <Features2x2 />
    </div>
  )
}

export default Home