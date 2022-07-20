import React from 'react'
import Hero2 from '../ui-components/HeroLayout2'
import Features4x1 from '../ui-components/Features4x1'
import Features2x2  from '../ui-components/Features2x2'
import TallCard  from '../ui-components/TallCard'
import { View, Flex } from '@aws-amplify/ui-react'

const Home = () => {
  return (
    <View
      as="div"
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
        <Hero2 />
        <Features4x1 />
        <Flex>
            <TallCard />
            <TallCard />
            <TallCard />
            <TallCard />
        </Flex>
        <Features2x2 />
    </View>
  )
}

export default Home