import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

import { useGetVideo } from '../../../hooks/query/videos';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
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
import { TranslateText } from './translations';

export default function Video() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
        <VideoTitle>{translations[`video${currVideoId}`]}</VideoTitle>
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
            {translations.previous}
          </ChangeVideoButton>
          <ChangeVideoButton onClick={next}>
            {translations.next}
            <DoubleRightOutlined />
          </ChangeVideoButton>
        </Buttons>
      </VideoBody>
      <VideoFooter>
        <Description>{translations.description}</Description>
        <Text>{currVideo?.description}</Text>
      </VideoFooter>
    </Container>
  );
}
