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

export default function CoursesScroll() {
  return (
    <Scroll id="videoScroll">
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
    </Scroll>
  );
}
