import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Box } from 'components/layouts'

import gobbler1 from 'assets/GobblerHappy.png'
import gobbler2 from 'assets/Recs.png'
import gobbler3 from 'assets/Interests.png'

import artMachine1 from 'assets/art-machine-1.png'
import artMachine2 from 'assets/art-machine-2.png'
import artMachine3 from 'assets/art-machine-3.png'
import artMachine4 from 'assets/art-machine-4.png'

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
  grid-gap: 16px;
  @media(max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
  };

  @media (max-width: 1040px) and (min-width: 640px) {
    grid-template-columns: 1fr 1fr
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


const PortfolioView = (props) => (
  <div>
    <Flex wrap>
      <ProjectContainer>
        <Box px={2} mt={1} showMobile w={1}>
          <H1 noMargin>Gobbler</H1>
        </Box>
        <Box py={[0, 3]} pl={[0, 3]} pr={0} w={[1, 1/2]}>
          <Grid>
            <img src={gobbler1}/>
            <img src={gobbler2}/>
            <img src={gobbler3}/>
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
            We were tasked with taking a vague problem and turning it into a fully function prototype in 6 weeks.
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
            <img src={artMachine1}/>
            <img src={artMachine2}/>
            <img src={artMachine3}/>
            <img src={artMachine4}/>
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
            Art Machine is generative art creation tool that allows anyone to create beautify (or not) works of art.
          </Body>
          <Body>
            It let's the computer do the hard work and the user take the role of currator selecting the best permutation of the batch and make high level designs around the arts direction
          </Body>
          <Body>
            It's been my side project for quite a while and assists me in creation of my digital art.
          </Body>
        </Box>
      </ProjectContainer>
    </Flex>
  </div>
)

export default PortfolioView
