import { useState } from 'react';

import ReactPlayer from 'react-player';

import imageLogo from '../../assets/IZTLogo.svg';
import { Container, VideoContainer, WaterMark } from './Styles';

export default function TestPage() {
  const [percentage, setPercentage] = useState('');

  async function handleProgress(progress) {
    setPercentage(String(progress.played * 100));
  }
  const playerConfig = {
    file: {
      attributes: {
        controlsList: 'nodownload', // desativa o botão de download
      },
    },
  };

  return (
    <Container>
      <VideoContainer>
        <ReactPlayer
          url="../../../Public/TudoJunto.mp4"
          controls
          download="false"
          onProgress={(progress) => handleProgress(progress)}
          onEnded={() => console.log('Deu Por hoji')}
          width="100%"
          height="100%"
          config={playerConfig}
        />
        <WaterMark>
          <img src={imageLogo} alt="Logo Izt" />
        </WaterMark>
        <p>{percentage}</p>
      </VideoContainer>
    </Container>
  );
}
