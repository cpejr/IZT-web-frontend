import PropTypes from 'prop-types';

import VideoSelect from '../VideoSelect/VideoSelect';
import {
  GreyLine,
  CourseContent,
  ChapterTitle,
  ChaptersContainer,
  ChaptersContent,
} from './Styles';

export default function CourseScroll({ chapters = [] }) {
  return (
    <CourseContent>
      {chapters?.map(({ _id, title, videos }) => (
        <ChaptersContainer key={_id}>
          <ChapterTitle>{title}</ChapterTitle>
          <GreyLine />
          <ChaptersContent>
            {videos?.map((video) => (
              <VideoSelect key={video?._id} video={video} />
            ))}
          </ChaptersContent>
        </ChaptersContainer>
      ))}
    </CourseContent>
  );
}

CourseScroll.defaultProps = {
  chapters: [],
};

CourseScroll.propTypes = {
  chapters: PropTypes.array,
};
