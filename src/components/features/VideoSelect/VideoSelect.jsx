import PropTypes from 'prop-types';

import FinishedVideo from '../../../assets/coursesPage/finishedVideo.png';
import UnfinishedVideo from '../../../assets/coursesPage/unfinishedVideo.png';
import useVideoStore from '../../../stores/video';
import {
  ScrollIcon,
  Container,
  Title,
  Duration,
  TitleContainer,
} from './Styles';

export default function VideoSelect({ video }) {
  const currVideoId = useVideoStore((state) => state.currVideoId);
  const setCurrVideoId = useVideoStore((state) => state.setCurrVideoId);

  return (
    <Container
      active={video._id === currVideoId}
      title={video.title}
      onClick={() => {
        setCurrVideoId(video._id);
      }}
    >
      <TitleContainer>
        <ScrollIcon
          src={video.isCompleted ? FinishedVideo : UnfinishedVideo}
          alt="Video state"
        />
        <Title active={video._id === currVideoId}>{video.title}</Title>
      </TitleContainer>
      <Duration>{video.formatedDuration}</Duration>
    </Container>
  );
}

VideoSelect.propTypes = {
  video: PropTypes.object.isRequired,
};
