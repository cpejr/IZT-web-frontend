import { useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

import FinishedVideo from '../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../assets/coursesPage/unfinishedVideo.png';
import Image from '../../assets/coursesPage/womanStudying.png';
// import { CoursesScroll } from '../../components/features';
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
  SubtitleScroll,
  VideoTime,
  Topics,
  ScrollIcon,
  TopicDiv,
  Scroll,
  GreyLineScroll,
  ChangeVideoButton,
  Buttons,
} from './Styles';

export default function Course() {
  const [video, setVideo] = useState('');

  const changeVideo = (newVideo) => {
    setVideo(newVideo);
  };

  const availableVideos = [
    {
      id: 1,
      alt: '4:44 by Jay Z',
      src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
    },
    {
      id: 2,
      alt: 'PRIDE. by Kendrick Lamar',
      src: 'https://www.youtube.com/watch?v=Iy-dJwHVX84',
    },
    {
      id: 3,
      alt: 'Money trees by Kendrick Lamar',
      src: 'https://www.youtube.com/watch?v=pRGmFiEyr0A',
    },
  ];
  return (
    <Container>
      <MainDiv>
        <IntroductionDiv>
          <Title>Treinamento em Retificação Centerless</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed odio eu enim gravida varius quis non orci.
            Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla sed
            sapien.
          </Text>
        </IntroductionDiv>
        <GreyLine />

        <MainSection>
          {/* <CoursesScroll availableVideos={availableVideos} /> */}
          <Scroll id="videoScroll">
            <SubtitleScroll>Introdução</SubtitleScroll>
            <GreyLineScroll />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics onClick={() => setVideo(availableVideos[0])}>
                    Introdução
                  </Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics
                    id="1"
                    onClick={() => changeVideo(availableVideos[0])}
                  >
                    Vídeo 1
                  </Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="2"
                    onClick={() => changeVideo(availableVideos[1])}
                  >
                    Vídeo 2
                  </Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="3"
                    onClick={() => changeVideo(availableVideos[2])}
                  >
                    Vídeo 3
                  </Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>

            <SubtitleScroll>Capítulo 1</SubtitleScroll>
            <GreyLineScroll />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics onClick={() => changeVideo(availableVideos[0])}>
                    Introdução
                  </Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics
                    id="1"
                    onClick={() => changeVideo(availableVideos[0])}
                  >
                    Vídeo 1
                  </Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="2"
                    onClick={() => changeVideo(availableVideos[1])}
                  >
                    Vídeo 2
                  </Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="3"
                    onClick={() => changeVideo(availableVideos[2])}
                  >
                    Vídeo 3
                  </Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>

            <SubtitleScroll>Capítulo 2</SubtitleScroll>
            <GreyLineScroll />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics onClick={() => changeVideo(availableVideos[0])}>
                    Introdução
                  </Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics
                    id="1"
                    onClick={() => changeVideo(availableVideos[0])}
                  >
                    Vídeo 1
                  </Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="2"
                    onClick={() => changeVideo(availableVideos[1])}
                  >
                    Vídeo 2
                  </Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics
                    id="3"
                    onClick={() => changeVideo(availableVideos[2])}
                  >
                    Vídeo 3
                  </Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>
          </Scroll>

          <VideoSectionDiv id="videoSection">
            <Title>Vídeo 2</Title>
            <Video src={Image} alt="CourseVideo" allowfullscreen />
            <Buttons>
              <ChangeVideoButton>
                <DoubleLeftOutlined />
                Anterior
              </ChangeVideoButton>
              <ChangeVideoButton>
                Próximo
                <DoubleRightOutlined />
              </ChangeVideoButton>
            </Buttons>
            <a
              href={video ? video.src : availableVideos[0].src}
              style={{ fontSize: '20px' }}
            >
              video
            </a>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              augue felis, eleifend at nibh a, fringilla iaculis augue. Vivamus
              semper, ligula in mattis porttitor, lacus dui fringilla nibh, a
              consectetur orci dolor vel odio. In hac habitasse platea dictumst.
              Vestibulum cursus lectus id facilisis accumsan. Phasellus molestie
              vitae mauris sed ultricies. Suspendisse gravida a justo eget
              laoreet. Vivamus placerat volutpat odio. Sed mi justo, fringilla
              non neque id, aliquet rhoncus ex.
            </Text>
          </VideoSectionDiv>
        </MainSection>
      </MainDiv>
    </Container>
  );
}
