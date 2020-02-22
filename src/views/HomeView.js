import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "components/layouts";
import { Hero } from "components/layouts";
import { Link } from "react-router-dom";
import RoomView from "./RoomView";
import cogni1 from "assets/cogni-homescreen.png";
import FadeInBox from "./FadeInBox";
import michael from "assets/michael.JPG";
import me from "assets/me.jpg";
import LazyLoad from "react-lazyload";
import linkedin from "assets/010-linkedin.png";
import instagram from "assets/011-instagram.png";
import twitter from "assets/013-twitter-1.png";

import michaelp from "assets/michael.webp";
import { Flex, Box } from "grid-styled";

import photo1 from "assets/1.jpg";
import photo2 from "assets/2.jpg";
import photo3 from "assets/3.jpg";
import photo4 from "assets/4.jpg";
import photo5 from "assets/5.jpg";
import photo6 from "assets/6.jpg";
import photo7 from "assets/7.gif";
import photo8 from "assets/8.jpg";
import photo10 from "assets/10.png";
import photo11 from "assets/11.jpg";
import photo12 from "assets/12.png";
import photo13 from "assets/13.png";

import photo1p from "assets/1.webp";
import photo2p from "assets/2.webp";
import photo3p from "assets/3.webp";
import photo4p from "assets/4.webp";
import photo5p from "assets/5.webp";
import photo6p from "assets/6.webp";
import photo8p from "assets/8.webp";
import photo10p from "assets/10.webp";
import photo11p from "assets/11.webp";
import photo12p from "assets/12.webp";
import photo13p from "assets/13.webp";

import {
  useViewportScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";
import patientProfile from "assets/patientProfile.png";
import singleBundle from "assets/SingleBundle.png";
import artMachine from "assets/art-machine-5.png";
import yogo from "assets/yogo.png";

const VineEmbed = styled.iframe.attrs({ frameBorder: 0 })`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
  background: #ddd;
  position: relative;
  height: 0;
  padding-top: 100%;
`;

const ArtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 32px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1040px) and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const PortfolioGrid = styled.div`
  width: 100%;
  grid-gap: 32px;
  padding: 32px;
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GridItemContainer = styled.div`
  height 0;
  padding-top: 150%;
  width: 100%;
  position: relative;

`;

const MeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  grid-gap: 1px;
  background: rgb(255, 255, 255, 0.1);
  width: 100%;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  object-position: top;
  object-fit: cover;
  filter: brightness(0.9);
`;

const Title = styled.div`
  font-family: Rubik;
  position: absolute;
  bottom: 0;
  padding: 32px;
  font-size: 24px;
  color: white;
`;

const Label = styled.div`
  font-family: Rubik;
  font-size: 24px;
  color: white;
`;

const H2 = styled.h2`
  font-family: rubik;
  color: rgb(220, 220, 220);
  font-weight: 100;
  font-size: 24px;
  line-height: 1.5;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 7px;
`;

const P = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: open sans;
  font-size: 18px;
  line-height: 1.8;
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
`;

const MeGridItem = ({ color, children }) => (
  <div style={{ background: "black" }}>
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,1)"
      }}
      whileHover={
        {
          //scale: 1,
          //  backgroundColor: color
        }
      }
    >
      {children}
    </motion.div>
  </div>
);

const ListItem = ({ children }) => (
  <FadeInBox>
    <Flex alignItems="center">
      <Box py={3} pl={4} order={1}>
        <H3>{children}</H3>
      </Box>
      <div
        style={{
          order: 0,
          border: "2px solid white",
          width: 30,
          height: 30,
          borderRadius: "50%"
        }}
      />
    </Flex>
  </FadeInBox>
);

const ListItemLeft = ({ children }) => (
  <Flex alignItems="center" justifyContent="center">
    <div
      style={{
        border: "2px solid white",
        width: 40,
        height: 40,
        borderRadius: "50%"
      }}
    />
    <Box p={3}>
      <H3>{children}</H3>
    </Box>
  </Flex>
);

const PortfolioGridItem = ({
  image,
  title,
  description,
  y,
  send,
  setMouseMove,
  setActive
}) => (
  <motion.div
    style={{ x: send, opacity: y }}
    whileHover={{ scale: 0.95 }}
    onHoverStart={() => setActive(true)}
    onHoverEnd={() => setActive(false)}
    onMouseMove={e => setMouseMove && setMouseMove([e.pageX, e.pageY])}
  >
    <GridItemContainer>
      <Image src={image} />
    </GridItemContainer>
    <Box className="u-hideOnDesktop" my={3} display={["block", "none"]}>
      <Label>{title}</Label>
    </Box>
  </motion.div>
);

const FlippableCard = ({ children }) => (
  <motion.div style={{ position: "relative" }}>{children}</motion.div>
);

const Img = ({ src, webp, lazy = false }) => (
  <picture>
    <source srcSet={webp} type="image/webp" />
    <img src={src} />
  </picture>
);
const HomeView = props => {
  const { scrollY } = useViewportScroll();
  const hoverX = useMotionValue(400);
  const [hoverActive, setHoverActive] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const hoverY = useMotionValue(2000);
  const hoverXSpring = useSpring(hoverX, { damping: 10 });
  const hoverYSpring = useSpring(hoverY, { damping: 10 });
  const yRange = useTransform(scrollY, [0, 400], [1, 0]);
  const yInvert = useTransform(scrollY, [0, 700], [0, 1]);
  const yTranslate = useTransform(scrollY, [0, 700], [-200, 0]);
  const yTranslateInveret = useTransform(scrollY, () => scrollY * -1);

  return (
    <div>
      <motion.div
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <motion.div
          style={{
            opacity: yRange
          }}
        >
          <Hero style={{ position: "relative" }}>
            <RoomView />
          </Hero>
        </motion.div>
      </motion.div>
      <PortfolioGrid id="portfolio">
        <Link to="/wework">
          <PortfolioGridItem
            y={yInvert}
            setActive={isActive => {
              setHoverActive(isActive);
              setCurrentItem(
                "https://cdn.theorg.com/74693ee3-9e07-45b2-90d8-506b76cdeb42_medium.jpg"
              );
            }}
            send={yTranslate}
            setMouseMove={coordinates => {
              const [x, y] = coordinates;
              hoverX.set(x - 50);
              hoverY.set(y - 50);
            }}
            title="WeWork Virual Tours"
            image={
              "https://locations-api-production.imgix.net/locations/image/b76c4f76-2fdd-11e9-80e8-1202be33576a/Web_72DPI-20181220_WeWork_Daimyo_-_Common_Areas_-_Couch_Area-2.jpg?auto=format%20compress&fit=crop&q=50&w=1800&h=1013"
            }
          />
        </Link>
        <Link to="/ctca">
          <PortfolioGridItem
            y={yInvert}
            setActive={isActive => {
              setHoverActive(isActive);
              setCurrentItem(
                "https://pbs.twimg.com/profile_images/496312861665148930/-PP0V-KL.png"
              );
            }}
            setMouseMove={coordinates => {
              const [x, y] = coordinates;
              hoverX.set(x - 50);
              hoverY.set(y - 50);
            }}
            send={yTranslate}
            title="CTCA Virtual Clinic"
            image={patientProfile}
          />
        </Link>

        <PortfolioGridItem
          y={yInvert}
          setActive={isActive => {
            setHoverActive(isActive);
            setCurrentItem(
              "data:image/png;base64,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"
            );
          }}
          setMouseMove={coordinates => {
            const [x, y] = coordinates;
            console.log(x, y);
            hoverX.set(x - 50);
            hoverY.set(y - 50);
          }}
          send={yTranslate}
          title="Cogni"
          image={cogni1}
        />
        {false && (
          <React.fragment>
            <PortfolioGridItem
              y={yInvert}
              send={yTranslateInveret}
              title="PwC"
              image={singleBundle}
            />
            <PortfolioGridItem
              y={yInvert}
              send={yTranslateInveret}
              title="Art Machine"
              image={artMachine}
            />
            <PortfolioGridItem
              y={yInvert}
              send={yTranslateInveret}
              title="YOGO"
              image={yogo}
            />
          </React.fragment>
        )}
      </PortfolioGrid>
      <motion.div
        animate={{
          scale: hoverActive ? 1 : 0,
          rotate: [0, "360deg"]
        }}
        transition={{
          duration: 0.6
        }}
        style={{
          position: "absolute",
          pointerEvents: "none",
          transformOrigin: "50% 50%",
          top: 0,
          left: 0,
          x: hoverXSpring,
          y: hoverYSpring,
          overflow: "hidden",
          background: "white",
          borderRadius: "50%",
          //border: "2px dotted white",
          width: 100,
          height: 100
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={currentItem}
        />
      </motion.div>
      <Box style={{ position: "relative" }} id="identity">
        <MeGrid>
          <MeGridItem style={{ position: "relative" }} color="rgba(40,40,40,1)">
            <Box py={4} px={[4, 5]}>
              <FadeInBox>
                <H2>Identity</H2>
              </FadeInBox>
              <FadeInBox>
                <P>
                  I'm a ux strategist, full stack engineer, and surrealist
                  artist using empathy and code to solve challenging problems
                  and help companies learn faster.
                </P>
              </FadeInBox>
              <FadeInBox>
                <P>
                  I like working in highly collaborate groups that care deeply
                  about getting to the truth, priorizing communication over
                  tooling, making over talking, and are crytal clear about what
                  outcomes they are trying to produce.
                </P>
              </FadeInBox>
              <FadeInBox>
                <P>
                  I try to think less about my role and more about what the most
                  valuable activity I could be doing for a customer, user, or
                  business.
                </P>
              </FadeInBox>
              <FadeInBox>
                <P>
                  If you're interested in the type of work I like and don't
                  like, I made a couple lists{" "}
                  <a
                    style={{ color: "white" }}
                    href="https://www.notion.so/lunarmayor/About-Working-f25b562cae714bb099ca4c59d0cfea57"
                  >
                    here.
                  </a>
                </P>
              </FadeInBox>
              <img
                style={{
                  position: "absolute",
                  left: "50%",
                  display: "none",
                  top: "50%",
                  zIndex: 10,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 300,
                  height: 300,
                  border: "10px solid rgba(30,30,30,1)"
                }}
                src={me}
              />
            </Box>
          </MeGridItem>

          <MeGridItem color="rgba(40,40,40,1)">
            <Box pt={4} px={[4, 5]} pb={[4, 5]}>
              <FadeInBox>
                <H2>Key Skills</H2>
              </FadeInBox>
              <ListItem>UX Strategy</ListItem>
              <ListItem>Rapid Prototyping</ListItem>
              <ListItem>UX Design</ListItem>
              <ListItem>Lean UX</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Javascript/CSS</ListItem>
            </Box>
          </MeGridItem>
        </MeGrid>
      </Box>

      <Box style={{ position: "relative", minHeight: "100vh" }} id="art">
        <Box px={4} pt={4}>
          <H2 style={{ margin: 0, textAlign: "center" }}>Weird Art</H2>
        </Box>

        <ArtGrid>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MFOBY11100E/embed/simple" />
            </VideoContainer>
          </FadeInBox>

          <FadeInBox>
            <Img src={photo1} webp={photo1p} />
          </FadeInBox>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MnA0aQtUBPK/embed/simple" />
            </VideoContainer>
          </FadeInBox>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MhAFTJp9XOX/embed/simple" />
            </VideoContainer>
          </FadeInBox>
          <FadeInBox>
            <img src={photo2} webp={photo2p} />
          </FadeInBox>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MxBDDnU3uKz/embed/simple" />
            </VideoContainer>
          </FadeInBox>
          <FadeInBox>
            <Img src={photo3} webp={photo3p} lazy />
          </FadeInBox>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MqDJupFUqFQ/embed/simple" />
            </VideoContainer>
          </FadeInBox>
          <FadeInBox>
            <Img src={photo10} webp={photo10p} lazy />
          </FadeInBox>
          <FadeInBox>
            <VideoContainer>
              <VineEmbed src="https://vine.co/v/MhKYO1xav0E/embed/simple" />
            </VideoContainer>
          </FadeInBox>
          <FadeInBox>
            <Img src={photo4} webp={photo4p} lazy />
          </FadeInBox>
          <FadeInBox>
            <Img src={photo5} webp={photo5p} lazy />
          </FadeInBox>
          <FadeInBox>
            <Img src={photo6} webp={photo6p} lazy />
          </FadeInBox>
        </ArtGrid>
      </Box>
      <Box
        px={4}
        py={4}
        style={{
          background: "black",
          position: "relative",
          textAlign: "center"
        }}
        id="contact"
      >
        <Box my={4}>
          <img
            style={{
              zIndex: 10,
              borderRadius: "50%",
              width: 300,
              height: 300,
              border: "10px solid rgba(30,30,30,1)"
            }}
            src={me}
          />
          <Box mt={4}>
            <Flex justifyContent="center">
              <a href="https://twitter.com/lunarmayor" target="_blank">
                <SocialButton src={twitter} />
              </a>
              <a href="https://instagram.com/lunarmayor" target="_blank">
                <SocialButton src={instagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/mikehmorrissey/"
                target="_blank"
              >
                <SocialButton src={linkedin} />
              </a>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

const SocialButton = styled.img`
  margin-left: 12px;
  margin-right: 12px;
  width: 80px;
`;

const Button = styled.div`
  border: 2px solid white;
  border-radius: 50px;
  color: white;
  font-family: rubik;
  background: gray;
  font-size: 32px;
  padding: 16px 32px;
`;

export default HomeView;
