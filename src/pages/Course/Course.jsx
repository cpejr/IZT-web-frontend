import { useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

import Image from '../../assets/coursesPage/womanStudying.png';
import { CourseScroll } from '../../components/features';
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
  const [video, setVideo] = useState('');

  const availableChapters = [
    {
      name: 'Introdução',
      _id: 0,
      videos: [
        {
          _id: 0,
          name: '4:44 by Jay Z',
          src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
          description: '4:44 by Jay Z',
          duration: '3:33',
        },
        {
          _id: 1,
          name: 'PRIDE.',
          src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
          description: 'PRIDE. by Kendrick Lamar',
          duration: '5:43',
        },
        {
          _id: 2,
          name: 'Money trees',
          src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
          description: 'Money trees by Kendrick Lamar',
          duration: '3:10',
        },
        {
          _id: 3,
          name: 'Alright',
          src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
          description: 'Alright by Kendrick Lamar',
          duration: '7:43',
        },
      ],
    },
    {
      name: 'Capítulo 1',
      _id: 1,
      videos: [
        {
          _id: 0,
          name: '4:44 by Jay Z',
          src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
          description: '4:44 by Jay Z',
          duration: '3:33',
        },
        {
          _id: 1,
          name: 'PRIDE.',
          src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
          description: 'PRIDE. by Kendrick Lamar',
          duration: '5:43',
        },
        {
          _id: 2,
          name: 'Money trees',
          src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
          description: 'Money trees by Kendrick Lamar',
          duration: '3:10',
        },
        {
          _id: 3,
          name: 'Alright',
          src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
          description: 'Alright by Kendrick Lamar',
          duration: '7:43',
        },
      ],
    },
    {
      name: 'Capítulo 2',
      _id: 2,
      videos: [
        {
          _id: 0,
          name: '4:44 by Jay Z',
          src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
          description: '4:44 by Jay Z',
          duration: '3:33',
        },
        {
          _id: 1,
          name: 'PRIDE.',
          src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
          description: 'PRIDE. by Kendrick Lamar',
          duration: '5:43',
        },
        {
          _id: 2,
          name: 'Money trees',
          src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
          description: 'Money trees by Kendrick Lamar',
          duration: '3:10',
        },
        {
          _id: 3,
          name: 'Alright',
          src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
          description: 'Alright by Kendrick Lamar',
          duration: '7:43',
        },
      ],
    },
  ];

  const nextVideo = (currentVideo) => {
    let newId = currentVideo._id;
    if (currentVideo._id < 3) {
      newId = currentVideo._id + 1;
      const newVideo = availableChapters[0].videos[newId];
      setVideo(newVideo);
    } else {
      setVideo(currentVideo);
    }
  };

  const previousVideo = (currentVid) => {
    let newId = currentVid._id;
    if (newId > 0) {
      newId = currentVid._id - 1;
      const newVideo = availableChapters[0].videos[newId];
      setVideo(newVideo);
    } else {
      setVideo(currentVid);
    }
  };

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
          <CourseScroll
            availableChapters={availableChapters}
            setVideo={setVideo}
          />

          <VideoSectionDiv id="videoSection">
            <VideoTitle>{video.name}</VideoTitle>
            <Video src={Image} alt="CourseVideo" />
            <Buttons>
              <ChangeVideoButton onClick={() => previousVideo(video)}>
                <DoubleLeftOutlined />
                Anterior
              </ChangeVideoButton>
              <ChangeVideoButton onClick={() => nextVideo(video)}>
                Próximo
                <DoubleRightOutlined />
              </ChangeVideoButton>
            </Buttons>
            <a
              href={video ? video.src : availableChapters[0].videos[0].src}
              style={{ fontSize: '20px' }}
            >
              video
            </a>
            <Subtitle>Descrição</Subtitle>
            <Text>{video.description}</Text>
          </VideoSectionDiv>
        </MainSection>
      </MainDiv>
    </Container>
  );
}
