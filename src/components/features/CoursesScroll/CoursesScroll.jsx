import { useState } from 'react';

import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import {
  GreyLine,
  Scroll,
  ScrollIcon,
  SubtitleScroll,
  TopicDiv,
  Topics,
  VideoTime,
} from './Styles';

export default function CoursesScroll({ availableVideos }) {
  const [video, setVideo] = useState('');

  const changeVideo = (newVideo) => {
    setVideo(newVideo);
  };

  return (
    <Scroll id="videoScroll">
      <SubtitleScroll>Introdução</SubtitleScroll>
      <GreyLine />
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
            <Topics id="1" onClick={() => changeVideo(availableVideos[0])}>
              Vídeo 1
            </Topics>
          </div>
          <VideoTime>09:10</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="2" onClick={() => changeVideo(availableVideos[1])}>
              Vídeo 2
            </Topics>
          </div>
          <VideoTime>05:43</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="3" onClick={() => changeVideo(availableVideos[2])}>
              Vídeo 3
            </Topics>
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
            <Topics onClick={() => changeVideo(availableVideos[0])}>
              Introdução
            </Topics>
          </div>
          <VideoTime>15:23</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
            <Topics id="1" onClick={() => changeVideo(availableVideos[0])}>
              Vídeo 1
            </Topics>
          </div>
          <VideoTime>09:10</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="2" onClick={() => changeVideo(availableVideos[1])}>
              Vídeo 2
            </Topics>
          </div>
          <VideoTime>05:43</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="3" onClick={() => changeVideo(availableVideos[2])}>
              Vídeo 3
            </Topics>
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
            <Topics onClick={() => changeVideo(availableVideos[0])}>
              Introdução
            </Topics>
          </div>
          <VideoTime>15:23</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={FinishedVideo} alt="finishedVideo" />
            <Topics id="1" onClick={() => changeVideo(availableVideos[0])}>
              Vídeo 1
            </Topics>
          </div>
          <VideoTime>09:10</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="2" onClick={() => changeVideo(availableVideos[1])}>
              Vídeo 2
            </Topics>
          </div>
          <VideoTime>05:43</VideoTime>
        </TopicDiv>

        <TopicDiv>
          <div>
            <ScrollIcon src={UnfinishedVideo} alt="unfinishedVideo" />
            <Topics id="3" onClick={() => changeVideo(availableVideos[2])}>
              Vídeo 3
            </Topics>
          </div>
          <VideoTime>03:25</VideoTime>
        </TopicDiv>
      </div>
    </Scroll>
  );
}

CoursesScroll.propTypes = {
  availableVideos: PropTypes.isRequired,
};
