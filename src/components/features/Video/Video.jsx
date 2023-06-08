import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

import { useGetVideo } from '../../../hooks/query/videos';
import useVideoStore from '../../../stores/video';
import { Loading } from '../../common';
import Player from '../Player/Player';
import {
  Container,
  Buttons,
  ChangeVideoButton,
  VideoBody,
  VideoFooter,
  VideoTitle,
  Text,
  Description,
} from './Styles';
import { buildGetVideoErrorMessage, playerConfig } from './utils';

export default function Video() {
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

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <VideoBody>
        <VideoTitle>{currVideo?.title}</VideoTitle>
        <Player
          videoId={currVideoId}
          url={currVideo?.url}
          initialProgress={currVideo?.progress}
          duration={currVideo?.duration}
          config={playerConfig}
        />
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
      </VideoBody>
      <VideoFooter>
        <Description>Descrição</Description>
        <Text>{currVideo?.description}</Text>
      </VideoFooter>
    </Container>
  );
}
