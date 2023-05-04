import PropTypes from 'prop-types';

import CourseVideo from '../CourseVideo/CourseVideo';
import { GreyLine, Scroll, SubtitleScroll } from './Styles';

export default function CourseScroll({ chapters }) {
  return (
    <Scroll>
      {chapters?.map(({ _id, title, videos }) => (
        <div key={_id}>
          <SubtitleScroll>{title}</SubtitleScroll>
          <GreyLine />
          {videos?.map((video) => (
            <CourseVideo key={video?._id} video={video} />
          ))}
        </div>
      ))}
    </Scroll>
  );
}

CourseScroll.propTypes = {
  chapters: PropTypes.array.isRequired,
};
