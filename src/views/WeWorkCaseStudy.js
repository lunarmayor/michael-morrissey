import React from "react";
import { Box, Flex } from "grid-styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import wework1 from "assets/wework1.png";
import wework2 from "assets/wework2.png";
import wework3 from "assets/floorplan.jpg";
import wework4 from "assets/gallery.jpg";
import wework5 from "assets/sketching.png";
import wework6 from "assets/sketching2.png";
import wework7 from "assets/airtable.png";
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
          backgroundImage: `url("https://locations-api-production.imgix.net/locations/image/b76c4f76-2fdd-11e9-80e8-1202be33576a/Web_72DPI-20181220_WeWork_Daimyo_-_Common_Areas_-_Couch_Area-2.jpg?auto=format%20compress&fit=crop&q=50&w=1800&h=1013")`
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
            <H1>WeWork</H1>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="start"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <H2>Virtual Tours</H2>
          </motion.div>
        </Box>
      </TextContainer>
    </Container>
    <Box p={5}>
      <Flex>
        <Box flex={1}>
          <Box mb={4}>
            <H3>Role</H3>
            <P>Engagement Lead, UX Strategiest</P>
          </Box>

          <Box mb={4}>
            <H3>Tools</H3>
            <P>Invision, React, Graphql</P>
          </Box>

          <Box mb={4}>
            <H3>Team</H3>
            <P>
              Product Stategist, UX strategist, UX Researcher, Engineer, Product
              Designer
            </P>
          </Box>

          <Box mb={4}>
            <H3>Project Length</H3>
            <P>1 Year</P>
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
            Helping WeWork salespeople visualize and sell spaces that don't
            exist yet.
          </H2>
          <P2>
            WeWork came to the team with an ambitious goal: Every new building
            needs to open with 80% occupany. WeWork was leaving a lot of money
            on the table by waiting for spaces to open before filling them. It
            also meant that design decision about the space would need to be
            made before knowing what kinds of clients would be in them.
          </P2>

          <P2 style={{ marginBottom: 32 }}>
            We were tasked with building a tool for salespeople that would help
            them visualize unopened spaces and get customers excited about
            offices that in reality were often a white box.
          </P2>

          <Img src={wework1} />

          <Img src={wework2} />
          <Img src={wework3} />
          <Img src={wework4} />
          <Box mt={3} mb={5}>
            <H5>Result</H5>
            <P2>
              As the engagment lead of the project, helped launch a pilot sales
              tool to WeWork salespeople within 3 weeks of the project starting.
              This kicked off a pattern of continuous learning (5 interviews per
              week) and experimentation. A few weeks later the first million
              dollar deal was made with the tool.
            </P2>
            <P2>
              For the next year we continued to grow our user base, iterate our
              product based on user feedback, and show a huge return on
              investment to WeWork.
            </P2>

            <Box pl={4} style={{ borderLeft: "5px solid white" }} mb={5}>
              <Box mb={3} mt={5}>
                <H1 style={{ fontSize: 40, color: "#8edaff" }}>
                  “This is one of the fastest deployments, if not the fastest,
                  in the history of WeWork.”
                </H1>
              </Box>
              <H3 style={{ fontSize: 20 }}>George Valdes</H3>
              <H3 style={{ fontSize: 16, opacity: 0.8, letterSpacing: 0 }}>
                Growth Strategy, WeWork
              </H3>
            </Box>
          </Box>

          <Img src={wework5} />
          <Img src={wework6} />
          <Img src={wework7} />
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default WeWorkCaseStudy;
