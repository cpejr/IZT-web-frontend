import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import useVideoStore from '../../../stores/video';
import { ScrollIcon, TopicDiv, Topics, VideoTime } from './Styles';

export default function CourseVideo({ video }) {
  const setCurrVideoId = useVideoStore((state) => state.setCurrVideoId);
  const isCompleted = video.progress === 100;

  return (
    <TopicDiv>
      <div style={{ flexDirection: 'row-reverse' }}>
        <Topics
          onClick={() => {
            setCurrVideoId(video._id);
          }}
        >
          {video.title}
        </Topics>
        <ScrollIcon
          src={isCompleted ? FinishedVideo : UnfinishedVideo}
          alt="videoState"
        />
      </div>
      <VideoTime>{video.formatedDuration}</VideoTime>
    </TopicDiv>
  );
}

CourseVideo.propTypes = {
  video: PropTypes.object.isRequired,
};
