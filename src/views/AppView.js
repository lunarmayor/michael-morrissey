import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { palette, spacing } from "theme";
import lunar from "assets/lunar.png";
import {
  useViewportScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";

import lunarp from "assets/lunar.webp";
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
  color: ${props => (props.light ? "#e2e2e2" : "black")};
`;

const Title = styled(Name)`
  font-size: 16px;
  color: ${props =>
    !props.light ? lighten(0.13, "#000") : darken(0.13, "#e2e2e2")};
  margin-top: 4px;
`;

const NavLink = styled(Link)`
  font-family: rubik;
  font-size: 18px;
  position: relative;
  top: 13px;
  text-decoration: none;
  color: ${props => (props.light ? "#e2e2e2" : "black")};
  margin-left: ${spacing * 2}px;
`;

const ExternalLink = NavLink.withComponent("a");

const getBackground = path => {
  switch (path) {
    case "/projects":
      return "rgb(245, 245, 245)";
    case "/art":
      return "#191919";
    default:
      return "#191919";
  }
};

const isDark = path => true;

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
        <Box
          px={4}
          py={!shrink ? 4 : 3}
          style={{ transition: "padding 300ms ease-in-out" }}
        >
          <Flex justifyContent="space-between">
            <FlexContainer style={{ alignItems: "center" }}>
              <div style={{ marginRight: spacing }}>
                <Link to="">
                  <picture>
                    <source srcSet={lunarp} type="image/webp" />
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
              <FlexContainer>
                <NavLink light={isDarkBackground} to="projects">
                  Projects
                </NavLink>
                <NavLink light={isDarkBackground} to="identity">
                  Identity
                </NavLink>
                <NavLink light={isDarkBackground} to="art">
                  Art
                </NavLink>
                <NavLink light={isDarkBackground} to="art">
                  Contact
                </NavLink>
              </FlexContainer>
            </nav>
          </Flex>
        </Box>
      </motion.div>
      {children}
    </StyledAbsoluteFill>
  );
};

export default withRouter(AppView);
