import React from 'react'
import styled from 'styled-components'
import { position } from 'polished'
import { Flex, Box } from 'grid-styled'

import michael from 'assets/michael.JPG'
import me  from 'assets/me.jpg'
import michaelp from 'assets/michael.webp'

const H1 = styled.h1`
  font-family: rubik;
  font-weight: 700;
`

const SkillName = styled.div`
  flex: 1;
  color: #e46565;
  line-height: 1.4;
  font-family: rubik;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: capitalize;
`

const H2 = styled.h2`
  font-family: rubik;
  font-weight: 100;
  line-height: 1.5;
`

// maybe
//border: 8px solid #252424;
const Avatar = styled.div`
  width: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    ${position('absolute', '-1px', '-1px', '-1px', '-1px')}
    background: black;
    border-radius: 50%;
    transition: opacity 0.4s;
    opacity: 1;
  };
  &:hover::before {
    opacity: 0;
  }
`

const Av = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
`

const SkillHeader = H2.extend`
  font-weight: 500;
  color: #e46565;
  letter-spacing: 7px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 32px;
`


const Skill = styled.div`
  padding: 16px 32px;
  background: rgba(228, 101, 101, 0.95);
  color: #101010;
  font-family: rubik;
  border-radius: 40px;
  font-size: 18px;
  letter-spacing: 3px;
  color: #252424;
  font-weight: 600;
  margin-right: 12px;
  margin-bottom: 12px;
  @media(max-width: 640px) {
    padding: 8px 16px;
    font-size: 12px;
    margin-right: 8px;
    margin-bottom: 8px;
  }
`


const SIdentityView = () => (
  <div>
    <Flex px={[1, 2, 4]} py={[0, 2]} wrap>
      <Box p={2} px={3} w={[1, 1/3]}>
        <Av src={michael}/>
      </Box>
      <Box p={2} w={[1, 2/3]}>
        <H1 style={{ marginTop: 0 }}>Let's gaze into the abyss of my identity together</H1>
        <H2>I'm a <span>full stack developer</span> and <span>ux designer</span></H2>
        <H2 style={{ marginBottom: '2em'}}>I'm happiest when I'm rapidly prototyping for the benefit of human beings</H2>
        <H2>Skills</H2>
        <Flex wrap>
          {['React', 'Javascript', 'Design Thinking', 'Rapid Prototyping', 'Framer', 'CSS', 'UX Research', 'Lean Methodolgies'].map(skill => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Flex>
        <H2>Interests</H2>
        <Flex wrap>
          {['Design Systems', 'Atomic Design', 'Sound Design', 'Generative Design Tools', 'WebVR', 'Mindfullness', 'Generative Art', 'AI Enabled Art', 'Bots'].map(skill => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Flex>
      </Box>
    </Flex>
  </div>
)

const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  @media(max-width: 640px) {
    grid-template-columns: 1fr
  };

  @media (max-width: 1040px) and (min-width: 640px) {
    grid-template-columns: 1fr 1fr
  };

  @media(min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  };
`


const Icon = styled.div`
  width: 20%;
  height: 0;
  padding-top: 10%;
  padding-bottom 10%;
  border: 2px solid rgba(228, 101, 101, 0.95);
  border-radius: 50%;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  color: rgba(228, 101, 101, 0.95);
`

const tools = [
  { name: 'react', icon: 'react' },
  { name: 'redux', icon: 'redux' },
  { name: 'styled-components', icon: 'css3' },
  { name: 'node', icon: 'nodejs_small' },
  { name: 'figma', icon: 'figma' },
  { name: 'sketch', icon: 'sketch' },
  { name: 'framer', icon: 'framer' },
  { name: 'basamiq', icon: 'basamiq' },
  { name: 'vim', icon: 'vim' },
  { name: 'threejs', icon: 'html5_3d_effects' },
  { name: 'moleskin', icon: 'notebook' },
  { name: 'whiteboard', icon: 'whiteboard' },
]

const IdentityView = () => (
  <div>
    <Flex px={[1, 2, 4]} py={[0, 2]} wrap>
      <Flex justify="center" p={2} px={3} w={[1, 1/3]}>
        <div>
          <picture>
            {false &&<source srcSet={michaelp} type="image/webp"/>}
            <Av src={me}/>
          </picture>
        </div>
      </Flex>
      <Box p={2} w={[1, 2/3]}>
        <H1 style={{ marginTop: 0 }}>Let's gaze into the abyss of my identity together</H1>
        <H2>I'm a <span>full stack developer</span> and <span>ux designer</span></H2>
        <H2 style={{ marginBottom: '2em'}}>I'm happiest when I'm rapidly prototyping for the benefit of human beings</H2>
      </Box>
    </Flex>
    <Flex style={{ background: 'rgb(37, 36, 36)'}} px={[2, 4]} py={[2]} wrap>
      <Box px={[2, 3]} py={[2, 3]} w={1} >
        <SkillHeader>Tools</SkillHeader>
        <Grid>
          {tools.map(tool => (
            <Flex align="center">
              <Icon>
                <span className={`devicons devicons-${tool.icon}`}/>
              </Icon>
              <SkillName>{tool.name}</SkillName>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Flex>
    <Flex style={{ background: 'rgb(47, 46, 46)'}} px={[2, 4]} py={[2]} wrap>
      <Box px={[2, 3]} py={[2, 3]} w={1}>
        <SkillHeader>Interests</SkillHeader>
        <Grid>
          {['Design Systems', 'Atomic Design', 'Sound Design', 'Design Thinking', 'Rapid Prototyping', 'Lean Methodolgies', 'Generative Design Tools', 'WebVR', 'Mindfullness', 'Generative Art', 'AI Enabled Art', 'Bots', 'Behaviorial Psychology', 'Systems Thinking'].map(skill => (
            <Flex align="center">
              <Icon/>
              <SkillName>{skill}</SkillName>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Flex>
  </div>
)



export default IdentityView
