import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import useVideoStore from '../../../stores/video';
import { ScrollIcon, TopicDiv, Topics, VideoTime } from './Styles';

export default function CourseVideo({ video }) {
  const currVideoId = useVideoStore((state) => state.currVideoId);
  const setCurrVideoId = useVideoStore((state) => state.setCurrVideoId);

  return (
    <TopicDiv active={video._id === currVideoId} title={video.title}>
      <div>
        <Topics
          onClick={() => {
            setCurrVideoId(video._id);
          }}
        >
          {video.title}
        </Topics>
        <ScrollIcon
          src={video.isCompleted ? FinishedVideo : UnfinishedVideo}
          alt="video state"
        />
      </div>
      <VideoTime>{video.formatedDuration}</VideoTime>
    </TopicDiv>
  );
}

CourseVideo.propTypes = {
  video: PropTypes.object.isRequired,
};
