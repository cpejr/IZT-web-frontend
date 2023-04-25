import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

import Image from '../../assets/coursesPage/womanStudying.png';
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
} from './Styles';

export default function Course() {
  const { currVideo, next, previous } = useVideoStore();
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
          <CourseScroll chapters={course?.chapters} />
          <VideoSectionDiv id="videoSection">
            <VideoTitle>{currVideo?.title}</VideoTitle>
            <Video src={Image} alt="CourseVideo" />
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
            <a href={currVideo?.src} style={{ fontSize: '20px' }}>
              Link do vídeo
            </a>
            <Subtitle>Descrição</Subtitle>
            <Text>{currVideo?.description}</Text>
          </VideoSectionDiv>
        </MainSection>
      </MainDiv>
    </Container>
  );
}
