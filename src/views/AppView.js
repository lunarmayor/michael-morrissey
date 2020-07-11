import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { palette, spacing } from "theme";
import lunar from "assets/lunar3.png";
import ScrollToTop from "./ScrollToTop";
import {
  useViewportScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";
import animateScrollTo from "animated-scroll-to";

import {
  Grid,
  Section,
  Hero,
  AbsoluteFill,
  Distribute,
  FlexContainer,
  Box
} from "components/layouts";
import { Link, withRouter } from "react-router-dom";
import RoomView from "./RoomView";
import { Flex } from "grid-styled";

const StyledAbsoluteFill = styled.div`
  background: ${props => props.background || palette.canvas};
  min-height: 100vh;
`;

const DistributedSection = Section.withComponent(Distribute);

const Logo = styled.img`
  width: 50px;
`;
const Name = styled.div`
  font-family: rubik;
  font-size: 20px;
  position: relative;
  bottom: 3px;
  color: ${props => (props.light ? "white" : "black")};
`;

const Title = styled(Name)`
  font-size: 16px;
  color: ${props =>
    !props.light ? lighten(0.13, "#000") : darken(0.13, "white")};
  margin-top: 4px;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-family: rubik;
  font-size: 18px;
  position: relative;
  top: 13px;
  text-decoration: none;
  color: ${props => (props.light ? "#e2e2e2" : "black")};
  margin-left: ${spacing * 2}px;
`;

const PageLink = NavLink.withComponent("div");

const ExternalLink = NavLink.withComponent("a");

const getBackground = path => {
  switch (path) {
    case "/projects":
      return "rgb(245, 245, 245)";
    case "/we":
      return "#191919";
    default:
      return "#191919";
  }
};

const animateToId = id =>
  animateScrollTo(document.getElementById(id), {
    verticalOffset: -100
  });

const isDark = path => {
  return true;
  return path !== "/wework";
};

const AppView = ({ children, location }) => {
  const isDarkBackground = isDark(location.pathname);
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(
    scrollY,
    [0, 600, 800],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );

  const [shrink, setShrink] = useState(false);
  useEffect(
    () =>
      scrollY.onChange(latest => {
        if (latest > 200) {
          setShrink(true);
        } else {
          setShrink(false);
        }
      }),
    []
  );

  return (
    <StyledAbsoluteFill background={getBackground(location.pathname)}>
      <motion.div
        style={{
          background: yRange,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 10
        }}
      >
        <ScrollToTop />
        <Box
          px={4}
          py={!shrink ? 4 : 3}
          style={{ transition: "padding 300ms ease-in-out" }}
        >
          <Flex justifyContent="space-between">
            <FlexContainer style={{ alignItems: "center" }}>
              <div
                onClick={() => animateScrollTo(0)}
                style={{ marginRight: spacing }}
              >
                <Link to="">
                  <picture>
                    <Logo src={lunar} />
                  </picture>
                </Link>
              </div>
              <Box
                style={{
                  opacity: shrink ? 0 : 1,
                  transition: "opacity 300ms ease-in-out"
                }}
                hideMobile
              >
                <Name light={isDarkBackground}>Lunar Mayor</Name>
                <Title light={isDarkBackground}>UX Strategist / Engineer</Title>
              </Box>
            </FlexContainer>
            <nav>
              {location.pathname === "/" ? (
                <FlexContainer>
                  <PageLink
                    onClick={() => {
                      animateToId("portfolio");
                    }}
                    light={isDarkBackground}
                    to="projects"
                  >
                    Projects
                  </PageLink>
                  <PageLink
                    onClick={() => {
                      animateToId("identity");
                    }}
                    light={isDarkBackground}
                    to="identity"
                  >
                    Identity
                  </PageLink>
                  <PageLink
                    onClick={() => {
                      animateToId("art");
                    }}
                    light={isDarkBackground}
                    to="art"
                  >
                    Art
                  </PageLink>
                  <PageLink
                    onClick={() => {
                      animateToId("contact");
                    }}
                    light={isDarkBackground}
                    to="art"
                  >
                    Contact
                  </PageLink>
                </FlexContainer>
              ) : (
                <FlexContainer>
                  <NavLink to="/wework" light={true}>
                    WeWork
                  </NavLink>
                  <NavLink to="/ctca" light={true}>
                    CTCA
                  </NavLink>
                  <NavLink to="/supercell" light={true}>
                    Supercell
                  </NavLink>
                  <NavLink to="/" light={true}>
                    Home
                  </NavLink>
                </FlexContainer>
              )}
            </nav>
          </Flex>
        </Box>
      </motion.div>
      {children}
    </StyledAbsoluteFill>
  );
};

export default withRouter(AppView);
