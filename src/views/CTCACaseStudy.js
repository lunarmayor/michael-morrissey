import React from "react";
import { Box, Flex } from "grid-styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import ctca1 from "assets/patientProfile.png";
import ctca2 from "assets/ctca2.png";
import ctca3 from "assets/ctca3.png";
import ctca4 from "assets/ctca4.png";
import ctca5 from "assets/ctca5.png";
import ctca6 from "assets/ctca6.png";
import ctca7 from "assets/ctca7.png";
import ctca8 from "assets/ctca8.png";
import ctca9 from "assets/ctca9.png";
import ctca10 from "assets/ctca10.png";
import ctca11 from "assets/ctca11.png";
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
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 150px;
  font-family: Rubik;
  color: rgba(255, 255, 255, 0.9);
`;

const H2 = styled(H1)`
  font-size: 60px;
  margin-left: 10px;
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

const Img = styled.img`
  margin-bottom: 32px;
`;

const WeWorkCaseStudy = () => (
  <Box>
    <Container>
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          filter: "brightness(0.75)",
          backgroundImage: `url("https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/d/f0/df0c082a-f188-11e8-8acc-df5781ccc40c/5bfc0547755a6.image.jpg?resize=1200%2C800")`
        }}
      ></Box>
      <TextContainer>
        <Box>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="start"
            transition={{ duration: 1 }}
          >
            <H1>CTCA</H1>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="start"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <H2>Virtual Clinic MVP</H2>
          </motion.div>
        </Box>
      </TextContainer>
    </Container>
    <Box p={5}>
      <Flex>
        <Box flex={1}>
          <Box mb={4}>
            <H3>Role</H3>
            <P>UX Strategiest / Prototyper</P>
          </Box>

          <Box mb={4}>
            <H3>Tools</H3>
            <P>Invision, React</P>
          </Box>

          <Box mb={4}>
            <H3>Project Length</H3>
            <P>2 month</P>
          </Box>
        </Box>
        <Box flex={2} pl={5} pr={4}>
          <H2
            style={{
              marginTop: -8,
              fontSize: 40,
              marginLeft: 0,
              marginBottom: 0,
              lineHeight: 1.5
            }}
          >
            Creating a cancer care platform connecting dots of oncology
            ecosystem to provide 24/7 end-to-end patient care.
          </H2>
          <Box mb={3}>
            <P2>
              The current healthcare system is broken for navigating cancer care
              journey and CTCA aimed to create a cancer care tech platform
              connecting dots of oncology ecosystem to provide 24/7 end-to-end
              patient care. Over 10 weeks, we helped CTCA focus on chat and
              symptom management for the MVP, validate our assumptions and
              design sprints with 3 rounds of research.
            </P2>
          </Box>

          <Flex>
            <Box width={1 / 2} mr={3}>
              <Img src={ctca1} />
            </Box>
            <Box width={1 / 2}>
              <Img src={ctca2} />
            </Box>
          </Flex>

          <Flex>
            <Box width={1 / 2} mr={3}>
              <Img src={ctca3} />
            </Box>
            <Box width={1 / 2}>
              <Img src={ctca4} />
            </Box>
          </Flex>
          <Flex>
            <Box width={1 / 2} mr={3}>
              <Img src={ctca5} />
            </Box>
            <Box width={1 / 2}>
              <Img src={ctca6} />
            </Box>
          </Flex>

          <Box mt={3} mb={5}>
            <H5>Result</H5>
            <P2>
              Launched MVP with chat functionality that connects to a live nurse
              admin backend they can pilot with their partner cancer treatment
              clinics. This also allowed CTCA to successfully raise more money
              from investors for a series A.
            </P2>

            <Box pl={4} style={{ borderLeft: "5px solid white" }} mb={5}>
              <Box mb={3} mt={5}>
                <H1 style={{ fontSize: 40, color: "#8edaff" }}>
                  “Validating, and critically invalidating, [..] our thesis
                  could have only been done with a team deeply experienced in
                  the prototyping process"
                </H1>
              </Box>
              <H3 style={{ fontSize: 20 }}>Nick Aubin</H3>
              <H3 style={{ fontSize: 16, opacity: 0.8, letterSpacing: 0 }}>
                Head of Product, CTCA
              </H3>
            </Box>
          </Box>
          <Img src={ctca7} />
          <Img src={ctca8} />
          <Img src={ctca10} />
          <Img src={ctca11} />
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default WeWorkCaseStudy;
