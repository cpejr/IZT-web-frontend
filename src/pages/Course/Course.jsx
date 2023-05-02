import { useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

import { CourseScroll } from '../../components/features';
import { useGetCourseById } from '../../hooks/query/courses';
import useVideoStore from '../../stores/video';
import {
  Container,
  MainDiv,
  IntroductionDiv,
  Title,
  Text,
  MainSection,
  VideoSectionDiv,
  Video,
  GreyLine,
  ChangeVideoButton,
  Buttons,
  Subtitle,
  VideoTitle,
  Player,
} from './Styles';
import { playerConfig } from './utils';

export default function Course() {
  const { currVideo, next, previous } = useVideoStore();
  const [endedVid, setEndedVid] = useState(false);
  const { data: course, isLoading } = useGetCourseById({
    _id: 0,
    onSucess: () => {},
    onError: () => {},
  });

  if (isLoading) return <h1>Carregando...</h1>;
  return (
    <Container>
      <MainDiv>
        <IntroductionDiv>
          <Title>{course?.title}</Title>
          <Text>{course?.description}</Text>
        </IntroductionDiv>
        <GreyLine />
        <MainSection>
          <CourseScroll chapters={course?.chapters} ended={endedVid} />
          <VideoSectionDiv id="videoSection">
            <VideoTitle>{currVideo?.title}</VideoTitle>
            <Video>
              <Player
                url={currVideo?.src}
                width="100%"
                height="100%"
                controls
                config={playerConfig}
                onEnded={() => {
                  setEndedVid(true);
                }}
              />
            </Video>
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
            <Subtitle>Descrição</Subtitle>
            <Text>{currVideo?.description}</Text>
          </VideoSectionDiv>
        </MainSection>
      </MainDiv>
    </Container>
  );
}
