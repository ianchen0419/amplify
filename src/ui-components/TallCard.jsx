/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function TallCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="320px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TallCard")}
    >
      <Image
        height="400px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://s3-alpha-sig.figma.com/img/ab4d/1c23/1a4dfcbe5d83bc31b937d53da62b602f?Expires=1659312000&Signature=O2PnCpmbm5qUYGdx-f0rvRc0on0eMz68G278mYVAigp8zjD4k9kbwEamQN8jcPxwddLxWYlDGrprmtcEes4jYhTRHDmy-01IXRe0kAMOzQ4Ps7qA5qdKFtYjjxbkvxo6e5tzFqOF~aLX3chVEMIPaLigM9PYyAlykaR61Ckgt4KHbq99EWoD7RBVw6RgoukiCO0qvN12HIdpRvTAnsJdDrxxXfkexSNW~4vovpm3x0LBD7QlqG~Qd-QQyXu3FYfxb-H9XEuPjeObSvX6EgpSENnv8gRG-ppNzZBJqC3Xp97SZ3NsJUcq1wQv~34CJYvfrm1BRAltzfBOwwQJOIPPSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 8px 0px 8px"
        {...getOverrideProps(overrides, "Text Grouping")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Classic Long Sleeve T-Shirt"
          {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$99"
          {...getOverrideProps(overrides, "$99")}
        ></Text>
      </Flex>
    </Flex>
  );
}
