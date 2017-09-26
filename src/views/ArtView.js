import React from 'react'
import styled from 'styled-components'

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
      <img src={photo1}/>
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
      <img src={photo2}/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MxBDDnU3uKz/embed/simple"
        />
      </VideoContainer>
      <img src={photo3}/>
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
      <img src={photo10}/>
      <VideoContainer>
        <VineEmbed
          src="https://vine.co/v/MhKYO1xav0E/embed/simple"
        />
      </VideoContainer>
      <img src={photo4}/>
      <img src={photo5}/>
      <img src={photo6}/>
      <img src={photo7}/>
      <img src={photo8}/>
      <img src={photo11}/>
      <img src={photo12}/>
      <img src={photo13}/>
    </Grid>
    <a href="https://vine.co/lunarmayor?mode=tv">
      More Vines
    </a>
    <a href="https://instagram.com/lunarmayor">
      More Algorithmic Art
    </a>
  </div>
)

export default ArtView
