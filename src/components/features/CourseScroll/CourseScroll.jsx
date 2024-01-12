import PropTypes from 'prop-types';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import VideoSelect from '../VideoSelect/VideoSelect';
import {
  GreyLine,
  CourseContent,
  ChapterTitle,
  ChaptersContainer,
  ChaptersContent,
} from './Styles';
import { TranslateTextChapters } from './translationsChapters';
import { TranslateTextVideos } from './translationsVideos';

export default function CourseScroll({ chapters = [] }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translationsChapters = TranslateTextChapters({ globalLanguage });
  const translationsVideos = TranslateTextVideos({ globalLanguage });

  return (
    <CourseContent>
      {chapters?.map(({ _id, videos }, index) => (
        <ChaptersContainer key={_id}>
          <ChapterTitle>
            {translationsChapters[`chapter${index + 1}`]}{' '}
          </ChapterTitle>
          <GreyLine />
          <ChaptersContent>
            {videos?.map((video) => (
              <VideoSelect
                key={video?._id}
                video={{
                  ...video,
                  title: translationsVideos[`video${video?._id}`],
                }}
              />
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
