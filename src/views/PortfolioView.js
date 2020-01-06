import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Box } from 'components/layouts'

import gobbler1 from 'assets/GobblerHappy.png'
import gobbler2 from 'assets/Recs.png'
import gobbler3 from 'assets/Interests.png'

import gobbler1p from 'assets/GobblerHappy.webp'
import gobbler2p from 'assets/Recs.webp'
import gobbler3p from 'assets/Interests.webp'

import artMachine1 from 'assets/art-machine-1.png'
import artMachine2 from 'assets/art-machine-2.png'
import artMachine3 from 'assets/art-machine-3.png'
import artMachine4 from 'assets/art-machine-4.png'

import artMachine1p from 'assets/art-machine-1.webp'
import artMachine2p from 'assets/art-machine-2.webp'
import artMachine3p from 'assets/art-machine-3.webp'
import artMachine4p from 'assets/art-machine-4.webp'

import cogni3 from 'assets/invoicing.png'
import cogni2 from 'assets/cashback.png'
import cogni1 from 'assets/cogni-homescreen.png'


const H1 = styled.h1`
  font-family: rubik;
  font-weight: 700;
  margin-top: 0;
`

const Body = styled.p`
  font-family: rubik;
  font-weight: 100;
  line-height: 1.5;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 32px;
  padding-top: 16px;
  grid-gap: 16px;
  @media(max-width: 640px) {
    grid-template-columns: 1fr;
  };

  @media (max-width: 1040px) and (min-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr
  };

  @media(min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  };
`

const Topic = styled.div`
  padding: 8px 16px;
  font-family: rubik;
  font-size: 0.8em;
  border-radius: 20px;
  border: 1px solid #151515;
  margin-right: 8px;
  margin-bottom: 8px;
  background: #f9f9f7;
`

const ProjectContainer = styled(Flex).attrs({
  px: [2, 0],
  wrap: true,
  mb: 2,
})`
  border-bottom: 1px solid gainsboro;
`

const Label = styled.div`
  font-family: rubik;
  font-weight: 500;
  color: #252525;
`


const Project = ({ image, desciption }) => (
  <Box mb={2}>
    <Box mb={1}>
      <Img style={{ borderRadius: 0, maxHeight: 200, objectFit: 'cover', objectPosition: 'top' }} src={image.png} webp={image.webp}/>
    </Box>
    <Label>{desciption}</Label>
  </Box>

)

const projects = [
  { image: { png: cogni1, webp: null }, desciption: 'MOCingbird' },
  { image: { png: cogni1, webp: null }, desciption: 'Cogni' },
  { image: { png: cogni1, webp: null }, desciption: 'Diligent Login' },
  { image: { png: gobbler1, webp: gobbler1p }, desciption: 'Gobbler' },
  { image: { png: artMachine1, webp: artMachine1p}, desciption: 'Art Machine' },
  { image: { png: artMachine1, webp: artMachine1p}, desciption: 'Glitch Mirror' },
]

const PortfolioView = (props) => (
  <Grid>
    {projects.map(project => (
      <Project {...project}/>
    ))}
  </Grid>
)

const PortfolioView2 = (props) => (
  <div>
    <Flex wrap>
      <ProjectContainer>
        <Box px={2} mt={1} showMobile w={1}>
          <H1 noMargin>MOCingbird</H1>
        </Box>
        <Box py={[0, 3]} pl={[0, 3]} pr={0} w={[1, 1/2]}>
          <Grid>
            <Img src={cogni1}/>
            <Img src={cogni2}/>
            <Img src={cogni3}/>
          </Grid>
        </Box>
        <Box p={[2, 3]} w={[1, 1/2]}>
          <Box hideMobile>
            <H1>MOCingbird</H1>
          </Box>
          <Flex wrap>
            {['User Research', 'UX', 'UI', 'React', 'Strategy'].map(topic =>(
              <Topic>{topic}</Topic>
            ))}
          </Flex>
          <Body>
            The MOCingbird team is working hard to simplify continuing education for doctors and hospital administrators. Their mission is to create the easiest place for medical professionals to monitor their MOC and CME requirements.
          </Body>
          <Body>
            For this whirlwind of a project, I ran usability tests and a hueristic review to evaluate their existing work, proposed some strategic changes to their product, and built an interactive prototype to evolve upon some key areas of the app.
          </Body>
        </Box>
      </ProjectContainer>
      <ProjectContainer>
        <Box px={2} mt={1} showMobile w={1}>
          <H1 noMargin>Cogni</H1>
        </Box>
        <Box py={[0, 3]} pl={[0, 3]} pr={0} w={[1, 1/2]}>
          <Grid>
            <Img src={cogni1}/>
            <Img src={cogni2}/>
            <Img src={cogni3}/>
          </Grid>
        </Box>
        <Box p={[2, 3]} w={[1, 1/2]}>
          <Box hideMobile>
            <H1>Cogni</H1>
          </Box>
          <Flex wrap>
            {['React', 'Redux', 'React Native', 'Design thinking'].map(topic =>(
              <Topic>{topic}</Topic>
            ))}
          </Flex>
          <Body>
            Cogni’s mission was to build a modern bank geared towards today’s lifestyle. They learned that most of the future generation's income was from part-time employment opportunities; that most people had trouble saving for their goals, that it was hard to receive payments from clients, and that their current bank’s cash back solutions left more to be desired.
          </Body>
          <Body>
            For this project I lead the development of an react native teaser app to generate interest in the platform and the development of the first stage of the main banking application.
          </Body>
        </Box>
      </ProjectContainer>

      <ProjectContainer>
        <Box px={2} mt={1} showMobile w={1}>
          <H1 noMargin>Gobbler</H1>
        </Box>
        <Box py={[0, 3]} pl={[0, 3]} pr={0} w={[1, 1/2]}>
          <Grid>
            <Img src={gobbler1} webp={gobbler1p}/>
            <Img src={gobbler2} webp={gobbler2p}/>
            <Img src={gobbler3} webp={gobbler3p}/>
          </Grid>
        </Box>
        <Box p={[2, 3]} w={[1, 1/2]}>
          <Box hideMobile>
            <H1>Gobbler</H1>
          </Box>
          <Flex wrap>
            {['Design Thinking', 'GV Sprint', 'Facial recognition', 'NLP', 'Framer', 'React Prototype', 'UX Research'].map(topic =>(
              <Topic>{topic}</Topic>
            ))}
          </Flex>
          <Body>
            Gobbler is an interactive kiosk that helps users find the best phone plan and accessories for their interests.
          </Body>
          <Body>
            We were tasked with taking a vague problem and turning it into a fully functioning prototype in 6 weeks.
          </Body>
          <Body>
            My coworker Aliya and I defined a core problem to solve, sketched, tested with users, and pulled together technology (facial recognition, natural language processing, svg animation) and created a cohesive experience to delight our users.
          </Body>
        </Box>
      </ProjectContainer>
      <ProjectContainer>
        <Box mt={2} px={2} showMobile w={1}>
          <H1 noMargin>Art Machine</H1>
        </Box>
        <Box py={[0, 3]} pl={[0, 3]} pr={0} w={[1, 1/2]}>
          <Grid>
            <Img src={artMachine1} webp={artMachine1p}/>
            <Img src={artMachine2} webp={artMachine2p}/>
            <Img src={artMachine3} webp={artMachine3p}/>
            <Img src={artMachine4} webp={artMachine4p}/>
          </Grid>
        </Box>
        <Box p={[2, 3]} w={[1, 1/2]}>
          <Box hideMobile>
            <H1>Art Machine</H1>
          </Box>
          <Flex wrap>
            {['Style Transfer', 'Canvas Manipulation', 'Generative Design Tool', 'React', 'Side Project', 'Web Workers'].map(topic =>(
              <Topic>{topic}</Topic>
            ))}
          </Flex>
          <Body>
            Art Machine is generative art creation tool that allows anyone to create beautiful (or not) works of art.
          </Body>
          <Body>
            It lets the computer do the hard work and puts the user in the role of currator, selecting the best permutation of the batch.
          </Body>
          <Body>
            It's been my side project for quite a while and assists me in creation of my digital art.
          </Body>
        </Box>
      </ProjectContainer>
    </Flex>
  </div>
)

const Img = ({ src, webp, ...props }) => (
  <picture>
    <source srcSet={webp} type="image/webp"/>
    <img src={src} {...props}/>
  </picture>
)



export default PortfolioView
