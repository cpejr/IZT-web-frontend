import { useEffect, useRef, useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

import { useGetVideo } from '../../../hooks/query/videos';
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

  const { data: currVideo, isLoading } = useGetVideo({
    videoId: currVideoId,
    onError: (err) => {
      const errorMessage = buildGetVideoErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  useEffect(() => {
    const player = playerRef.current;
    // player?.seekTo(currVideo?.progress, 'seconds');

    console.log(player?.getCurrentTime());
    return () => {
      console.log(player?.getCurrentTime());
    };
  }, [currVideo, videoProgress]);

  if (isLoading)
    return (
      <Container>
        <Loading />;
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
          // onProgress={({ played }) => setVideoProgress(100 * played)} // Turn to a number between 0 and 100
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
