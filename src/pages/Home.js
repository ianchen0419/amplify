import React from 'react'
import Hero2 from '../ui-components/HeroLayout2'
import Features4x1 from '../ui-components/Features4x1'
import Features2x2  from '../ui-components/Features2x2'
import TallCard  from '../ui-components/TallCard'
import { View, Flex } from '@aws-amplify/ui-react'

const Home = () => {

  const Hero2Overides = {
    "image":{
      alt:"Backpack",
      src:"https://s3-alpha-sig.figma.com/img/ab4d/1c23/1a4dfcbe5d83bc31b937d53da62b602f?Expires=1659312000&Signature=O2PnCpmbm5qUYGdx-f0rvRc0on0eMz68G278mYVAigp8zjD4k9kbwEamQN8jcPxwddLxWYlDGrprmtcEes4jYhTRHDmy-01IXRe0kAMOzQ4Ps7qA5qdKFtYjjxbkvxo6e5tzFqOF~aLX3chVEMIPaLigM9PYyAlykaR61Ckgt4KHbq99EWoD7RBVw6RgoukiCO0qvN12HIdpRvTAnsJdDrxxXfkexSNW~4vovpm3x0LBD7QlqG~Qd-QQyXu3FYfxb-H9XEuPjeObSvX6EgpSENnv8gRG-ppNzZBJqC3Xp97SZ3NsJUcq1wQv~34CJYvfrm1BRAltzfBOwwQJOIPPSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      objectFit:"cover"
    }
  }

  const TallCardOverides = {
    "image": {
      src:"https://s3-alpha-sig.figma.com/img/ab4d/1c23/1a4dfcbe5d83bc31b937d53da62b602f?Expires=1659312000&Signature=O2PnCpmbm5qUYGdx-f0rvRc0on0eMz68G278mYVAigp8zjD4k9kbwEamQN8jcPxwddLxWYlDGrprmtcEes4jYhTRHDmy-01IXRe0kAMOzQ4Ps7qA5qdKFtYjjxbkvxo6e5tzFqOF~aLX3chVEMIPaLigM9PYyAlykaR61Ckgt4KHbq99EWoD7RBVw6RgoukiCO0qvN12HIdpRvTAnsJdDrxxXfkexSNW~4vovpm3x0LBD7QlqG~Qd-QQyXu3FYfxb-H9XEuPjeObSvX6EgpSENnv8gRG-ppNzZBJqC3Xp97SZ3NsJUcq1wQv~34CJYvfrm1BRAltzfBOwwQJOIPPSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }
  }

  const Features2x2Overides = {
    //bolding the headers 
    "Feature A": {
      "fontWeight": "bold"
    },
    "Feature B": {
      "fontWeight": "bold"
    },
    "Feature C": {
      "fontWeight": "bold"
    },
    "Feature D": {
      "fontWeight": "bold"
    },

    //green background 
    "Frame 37429766594": {
      backgroundColor: "#EBFAED"
    },
    "Frame 37329766597": {
      backgroundColor: "#EBFAED"
    },
    "Frame 37429766601": {
      backgroundColor: "#EBFAED"
    }, 
    "Frame 37329766604": {
      backgroundColor: "#EBFAED"
    },

  }

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
            <TallCard isPaginated itemsPerPage={4} overrides={TallCardOverides}/>
        </Flex>
        <Features2x2 overrides={Features2x2Overides}/>
    </View>
  )
}

export default Home