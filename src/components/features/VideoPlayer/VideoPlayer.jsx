import { useEffect, useRef, useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

import { useGetVideo } from '../../../hooks/query/chapters';
import useVideoStore from '../../../stores/video';
import { Loading } from '../../common';
import {
  Container,
  Buttons,
  ChangeVideoButton,
  Player,
  VideoContainer,
  VideoTitle,
  Text,
  VideoSubTitle,
} from './Styles';
import { buildGetVideoErrorMessage, playerConfig } from './utils';

export default function VideoPlayer() {
  const playerRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const currVideoId = useVideoStore((state) => state.currVideoId);
  const previous = useVideoStore((state) => state.previous);
  const next = useVideoStore((state) => state.next);

  const { data: currVideo, isInitialLoading } = useGetVideo({
    videoId: currVideoId,
    onError: (err) => {
      const errorMessage = buildGetVideoErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  useEffect(() => {
    playerRef.current?.seekTo(120.7);

    return () => {
      console.log(videoProgress);
      console.log('UNMOUTEEEEED');
    };
  }, []);

  if (isInitialLoading) return <Loading />;
  if (!currVideo)
    return (
      <Container>
        <h1>Esqueleto</h1>
      </Container>
    );
  return (
    <Container>
      <VideoTitle>{currVideo?.title}</VideoTitle>
      <VideoContainer>
        <Player
          ref={playerRef}
          url={currVideo?.url}
          width="100%"
          height="100%"
          controls
          config={playerConfig}
          onProgress={({ played }) => setVideoProgress(100 * played)}
        />
      </VideoContainer>
      <Buttons>
        <ChangeVideoButton onClick={previous}>
          <DoubleLeftOutlined />
          Anterior
        </ChangeVideoButton>
        <ChangeVideoButton onClick={next}>
          Próximo
          <DoubleRightOutlined />
        </ChangeVideoButton>
      </Buttons>
      <VideoSubTitle>Descrição</VideoSubTitle>
      <Text>{currVideo?.description}</Text>
    </Container>
  );
}
