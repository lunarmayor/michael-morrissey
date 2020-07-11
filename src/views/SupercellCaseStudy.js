import React from "react";
import { Box, Flex } from "grid-styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import supercell from "assets/brawlstars.png";
import supercell1 from "assets/supercell1.png";
import supercell2 from "assets/supercell2.png";
import supercell3 from "assets/supercell3.png";
import FadeInBox from "./FadeInBox";
import FadeInBox2 from "./FadeInBox2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  position: absolute;
  right: 128px;
  bottom: 128px;

  @media (max-width: 720px) {
    bottom: 32px;
    left: 32px;
    right: 32px;
  }
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 150px;
  font-family: Rubik;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 720px) {
    font-size: 80px;
  }
`;

const H2 = styled(H1)`
  font-size: 60px;
  margin-left: 10px;
  @media (max-width: 720px) {
    font-size: 50px;
    margin-left: 3px;
  }
`;

const H3 = styled.h2`
  font-family: rubik;
  color: rgb(220, 220, 220);
  font-weight: 100;
  font-size: 20px;
  line-height: 1.5;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 7px;
  margin: 0;
`;

const H5 = styled(H1)`
  font-size: 30px;
`;

const P = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 100;
  font-family: open sans;
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
`;

const P2 = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 100;
  font-family: open sans;
  font-size: 18px;
  line-height: 1.8;
`;

const fadeUp = {
  initial: {
    opacity: 0,
    y: 50
  },
  start: {
    opacity: 1,
    y: 0
  }
};

const BackgroundImage = styled(Box)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.55);
  background-image: url(https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9hY2NvdW50c1wvNmJcLzQwMDAxMTFcL3Byb2plY3RzXC8yMlwvYXNzZXRzXC80ZlwvMTI1MjJcLzM4MjZmOTg5NDI0YzA1NWFjNTIzMGFkMzZkZWI1YTBhLTE1ODk4NzU2MDMucHNkIn0:supercell:U3SiGolQHXYLHiWF9_vEaOZ_l72S4qsOBg7ETySKsec?width=2400);
`;

const Img = styled.img`
  margin-bottom: 32px;
`;

const WeWorkCaseStudy = () => (
  <Box>
    <Container>
      <BackgroundImage />
      <TextContainer>
        <Box>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="start"
            transition={{ duration: 1 }}
          >
            <H1>Supercell</H1>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="start"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <H2>Creator Points</H2>
          </motion.div>
        </Box>
      </TextContainer>
    </Container>
    <Box p={[4, 5]} pt={5}>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 3]} mb={4}>
          <Box mb={4}>
            <H3>Role</H3>
            <P>Engagement Lead / UX Designer / Engineer</P>
          </Box>

          <Box mb={4}>
            <H3>Tools</H3>
            <P>Slack Apps, Invision, Node</P>
          </Box>

          <Box mb={4}>
            <H3>Project Length</H3>
            <P>6 months</P>
          </Box>
        </Box>
        <Box width={[1, 2 / 3]} pl={[0, 5]} pr={[0, 4]}>
          <H2
            style={{
              marginTop: -8,
              fontSize: 40,
              marginLeft: 0,
              marginBottom: 0,
              lineHeight: 1.5
            }}
          >
            Created a loyaly program for Supercell's top content creators built
            completly inside of Slack.
          </H2>
          <Box mb={3}>
            <P2>
              In a market where competition for the best creators is fierce and
              creators have a huge amount of games to choose from, Supercell
              wanted be the best company for creators to work with in the world.
              To help them on that journey we interviewed creators, designed,
              built, and iterated a loyalty program called "Creator Points" that
              lives entirely in the creator community slack workspace.
            </P2>
          </Box>

          <Img src={supercell1} />
          <Img src={supercell2} />
          <Img src={supercell3} />
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default WeWorkCaseStudy;
