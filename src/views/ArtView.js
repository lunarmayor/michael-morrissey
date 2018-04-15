import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import { Flex } from 'grid-styled'
import { Box } from 'components/layouts'

import photo1 from 'assets/1.jpg'
import photo2 from 'assets/2.jpg'
import photo3 from 'assets/3.jpg'
import photo4 from 'assets/4.jpg'
import photo5 from 'assets/5.jpg'
import photo6 from 'assets/6.jpg'
import photo7 from 'assets/7.gif'
import photo8 from 'assets/8.jpg'
import photo10 from 'assets/10.png'
import photo11 from 'assets/11.jpg'
import photo12 from 'assets/12.png'
import photo13 from 'assets/13.png'


import photo1p from 'assets/1.webp'
import photo2p from 'assets/2.webp'
import photo3p from 'assets/3.webp'
import photo4p from 'assets/4.webp'
import photo5p from 'assets/5.webp'
import photo6p from 'assets/6.webp'
import photo8p from 'assets/8.webp'
import photo10p from 'assets/10.webp'
import photo11p from 'assets/11.webp'
import photo12p from 'assets/12.webp'
import photo13p from 'assets/13.webp'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 32px;
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

const VideoContainer = styled.div`
  width: 100%;
  background: #ddd;
  position: relative;
  height: 0;
  padding-top: 100%;
`

const VineEmbed = styled.iframe.attrs({ frameBorder: 0 })`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const Button = styled.div`
  padding: 12px 24px;
  background: black;
  border: 1px solid #e2e2e2;
  color: #e2e2e2;
  font-family: rubik;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 43px;
  display: inline-block;
  transition: background 300ms;
  position: relative;
`


const ArtView = () => (
  <div>
    <Grid>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MFOBY11100E/embed/simple"
        />
      </VideoContainer>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/M57e1YHzDgh/embed/simple"
        />
      </VideoContainer>
      <Img src={photo1} webp={photo1p}/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MnA0aQtUBPK/embed/simple"
        />
      </VideoContainer>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MhAFTJp9XOX/embed/simple"
        />
      </VideoContainer>
      <img src={photo2} webp={photo2p}/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MxBDDnU3uKz/embed/simple"
        />
      </VideoContainer>
      <Img src={photo3} webp={photo3p} lazy/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MqDJupFUqFQ/embed/simple"
        />
      </VideoContainer>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/OWLeMmQvBUh/embed/simple"
        />
      </VideoContainer>
      <Img src={photo10} webp={photo10p} lazy/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MhKYO1xav0E/embed/simple"
        />
      </VideoContainer>
      <Img src={photo4} webp={photo4p} lazy/>
      <Img src={photo5} webp={photo5p} lazy/>
      <Img src={photo6} webp={photo6p} lazy/>
      <img src={photo7} />
      <Img src={photo8} webp={photo8p} lazy/>
      <Img src={photo11} webp={photo11p} lazy/>
      <Img src={photo12} webp={photo12p} lazy/>
      <Img src={photo13} webp={photo13p} lazy/>
    </Grid>
    <Flex p={3} pt={0} wrap>
      <Box style={{ }} mr={1} mb={[2, 0]}>
        <a href="https://vine.co/lunarmayor?mode=tv">
          <Button>
            More Vines
          </Button>
        </a>
      </Box>
      <a href="https://instagram.com/lunarmayor">
        <Button>
          More Algorithmic Art
        </Button>
      </a>
    </Flex>
  </div>
)

const Img = ({ src, webp, lazy = false }) => (
  <picture>
    <source srcSet={webp} type="image/webp"/>
    <img src={src}/>
  </picture>
)

export default ArtView
