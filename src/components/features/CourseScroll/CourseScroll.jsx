import PropTypes from 'prop-types';

import CourseVideo from '../CourseVideo/CourseVideo';
import { GreyLine, Scroll, SubtitleScroll } from './Styles';

export default function CourseScroll({ availableChapters, setVideo }) {
  return (
    <Scroll>
      {availableChapters?.map(({ _id, name, videos }) => (
        <div key={_id}>
          <SubtitleScroll>{name}</SubtitleScroll>
          <GreyLine />
          {videos?.map((video) => (
            <CourseVideo key={video._id} setVideo={setVideo} video={video} />
          ))}
        </div>
      ))}
    </Scroll>
  );
}

CourseScroll.propTypes = {
  availableChapters: PropTypes.array.isRequired,
  setVideo: PropTypes.func.isRequired,
};
