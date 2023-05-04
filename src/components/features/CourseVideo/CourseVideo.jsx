import { useState } from 'react';

import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import useVideoStore from '../../../stores/video';
import { ScrollIcon, TopicDiv, Topics, VideoTime } from './Styles';

export default function CourseVideo({ video }) {
  const [srcIcon, setSrcIcon] = useState(UnfinishedVideo);
  const { setCurrVideo } = useVideoStore();
  const { duration, title } = video;

  return (
    <TopicDiv>
      <div style={{ flexDirection: 'row-reverse' }}>
        <Topics
          onClick={() => {
            setCurrVideo(video);
            setSrcIcon(FinishedVideo);
          }}
        >
          {title}
        </Topics>
        <ScrollIcon src={srcIcon} alt="videoState" />
      </div>
      <VideoTime>{duration}</VideoTime>
    </TopicDiv>
  );
}

CourseVideo.propTypes = {
  video: PropTypes.object.isRequired,
};
