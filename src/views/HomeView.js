import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "components/layouts";
import { Hero } from "components/layouts";
import { Link } from "react-router-dom";
import RoomView from "./RoomView";
import cogni1 from "assets/cogni-homescreen.png";
import supercell from "assets/brawlstars.png";
import supercellLogo from "assets/supercell-logo.png";
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

  ${p =>
    p.disabled &&
    `
    filter: brightness(0.9)grayscale(1);
    `}
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
  setActive,
  disabled
}) => (
  <motion.div
    style={{ opacity: y }}
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
            send={yInvert}
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

        <Link to="/supercell">
          <PortfolioGridItem
            y={yInvert}
            disabled
            setActive={isActive => {
              setHoverActive(isActive);
              setCurrentItem(supercellLogo);
            }}
            setMouseMove={coordinates => {
              const [x, y] = coordinates;
              console.log(x, y);
              hoverX.set(x - 50);
              hoverY.set(y - 50);
            }}
            send={yTranslate}
            title="Supercell"
            image={supercell}
          />
        </Link>
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
                  I like working in highly collaborative groups that care deeply
                  about getting to the truth, prioritizing communication over
                  tooling, making over talking, and are crystal clear about what
                  outcomes they are trying to produce.
                </P>
              </FadeInBox>
              <FadeInBox>
                <P>
                  I have a large diversity of skills so I try to think less
                  about my role and more about the value that i'm bringing to a
                  customer, user, or business.
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
