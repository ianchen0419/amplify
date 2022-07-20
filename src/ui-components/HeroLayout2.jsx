/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout2")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        alt="Backpack"
        src="https://s3-alpha-sig.figma.com/img/ab4d/1c23/1a4dfcbe5d83bc31b937d53da62b602f?Expires=1659312000&Signature=O2PnCpmbm5qUYGdx-f0rvRc0on0eMz68G278mYVAigp8zjD4k9kbwEamQN8jcPxwddLxWYlDGrprmtcEes4jYhTRHDmy-01IXRe0kAMOzQ4Ps7qA5qdKFtYjjxbkvxo6e5tzFqOF~aLX3chVEMIPaLigM9PYyAlykaR61Ckgt4KHbq99EWoD7RBVw6RgoukiCO0qvN12HIdpRvTAnsJdDrxxXfkexSNW~4vovpm3x0LBD7QlqG~Qd-QQyXu3FYfxb-H9XEuPjeObSvX6EgpSENnv8gRG-ppNzZBJqC3Xp97SZ3NsJUcq1wQv~34CJYvfrm1BRAltzfBOwwQJOIPPSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        objectFit="cover"

        {...getOverrideProps(overrides, "image")}
      ></Image>
      <HeroLayout3
        display="flex"
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        width="1440px"
        height="858px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      ></HeroLayout3>
    </View>
  );
}
