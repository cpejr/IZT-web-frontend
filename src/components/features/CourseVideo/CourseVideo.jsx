import { useState } from 'react';

import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import { ScrollIcon, TopicDiv, Topics, VideoTime } from './Styles';

export default function CourseVideo({ video, setVideo }) {
  const [srcIcon, setSrcIcon] = useState(UnfinishedVideo);
  const { duration, name } = video;
  return (
    <TopicDiv>
      <div style={{ flexDirection: 'row-reverse' }}>
        <Topics
          onClick={() => {
            setVideo(video);
            setSrcIcon(FinishedVideo);
          }}
        >
          {name}
        </Topics>
        <ScrollIcon src={srcIcon} alt="videoState" />
      </div>
      <VideoTime>{duration}</VideoTime>
    </TopicDiv>
  );
}

CourseVideo.propTypes = {
  video: PropTypes.object.isRequired,
  setVideo: PropTypes.func.isRequired,
};
