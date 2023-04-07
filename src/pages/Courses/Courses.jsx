import FinishedVideo from '../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../assets/coursesPage/unfinishedVideo.png';
import Image from '../../assets/coursesPage/womanStudying.png';
import {
  Container,
  MainDiv,
  IntroductionDiv,
  Title,
  Text,
  MainSection,
  CoursesScroll,
  SubtitleScroll,
  GreyLine,
  TopicDiv,
  ScrollIcon,
  Topics,
  VideoTime,
  VideoSectionDiv,
  Picture,
} from './Styles';

export default function Courses() {
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

        <MainSection>
          <CoursesScroll>
            <SubtitleScroll>Introdução</SubtitleScroll>
            <GreyLine />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Introdução</Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Vídeo 1</Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 2</Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 3</Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>

            <SubtitleScroll>Capítulo 1</SubtitleScroll>
            <GreyLine />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Introdução</Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Vídeo 1</Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 2</Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 3</Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>

            <SubtitleScroll>Capítulo 2</SubtitleScroll>
            <GreyLine />
            <div>
              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Introdução</Topics>
                </div>
                <VideoTime>15:23</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
                  <Topics>Vídeo 1</Topics>
                </div>
                <VideoTime>09:10</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 2</Topics>
                </div>
                <VideoTime>05:43</VideoTime>
              </TopicDiv>

              <TopicDiv>
                <div>
                  <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
                  <Topics>Vídeo 3</Topics>
                </div>
                <VideoTime>03:25</VideoTime>
              </TopicDiv>
            </div>

            <SubtitleScroll>Capítulo 3</SubtitleScroll>
          </CoursesScroll>

          <VideoSectionDiv>
            <Title>Vídeo 2</Title>
            <Picture src={Image} alt="WomanStudyingImage" />
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
