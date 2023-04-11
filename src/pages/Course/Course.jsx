import { useState } from 'react';

import Image from '../../assets/coursesPage/womanStudying.png';
import { CoursesScroll } from '../../components/features';
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
} from './Styles';

export default function Course() {
  const [video, setVideo] = useState('');

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
          <CoursesScroll availableVideos={availableVideos} />

          <VideoSectionDiv id="videoSection">
            <Title>Vídeo 2</Title>
            <Video src={Image} alt="CourseVideo" allowfullscreen />
            <a href={availableVideos[0].src} style={{ fontSize: '20px' }}>
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
