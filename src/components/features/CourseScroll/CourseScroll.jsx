import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import translateText from '../../../utils/translateAPI';
import VideoSelect from '../VideoSelect/VideoSelect';
import {
  GreyLine,
  CourseContent,
  ChapterTitle,
  ChaptersContainer,
  ChaptersContent,
} from './Styles';
import { TranslateTextChapters } from './translationsChapters';

export default function CourseScroll({ chapters = [] }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translationsChapters = TranslateTextChapters({ globalLanguage });
  const [translationsVideos, setTranslationsVideos] = useState({});

  useEffect(() => {
    const translatedVideos = {};
    chapters.forEach((chapter, chapterIndex) => {
      chapter.videos.forEach((video) => {
        translateText(video.title, globalLanguage.toLowerCase())
          .then((translatedTitle) => {
            translatedVideos[video._id] = translatedTitle;
            setTranslationsVideos(translatedVideos);
          })
          .catch((error) => {
            console.error('Translation error:', error);
          });
      });
    });
  }, [chapters, globalLanguage]);

  return (
    <CourseContent>
      {chapters?.map((chapter, index) => (
        <ChaptersContainer key={chapter._id}>
          <ChapterTitle>
            {translationsChapters[`chapter${index + 1}`]}{' '}
          </ChapterTitle>
          <GreyLine />
          <ChaptersContent>
            {chapter.videos?.map((video) => (
              <VideoSelect
                key={video._id}
                video={{
                  ...video,
                  title: translationsVideos[video._id] || video.title,
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
