import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CourseScroll, VideoPlayer } from '../../components/features';
import { useGetUserCourse } from '../../hooks/query/courses';
import useAuthStore from '../../stores/auth';
import useVideoStore from '../../stores/video';
import {
  Container,
  MainDiv,
  IntroductionDiv,
  Title,
  Text,
  MainSection,
  GreyLine,
} from './Styles';
import { buildGetCourseInfoErrorMessage } from './utils';

export default function Course() {
  const { courseId } = useParams();
  const currVideoId = useVideoStore((state) => state.currVideoId);
  const userId = useAuthStore((state) => state.auth?.user?._id);

  const {
    data: course,
    isError,
    isLoadingCourse,
  } = useGetUserCourse({
    user: userId,
    course: '645548677d3184e5b411a08f' || courseId,
    onError: (err) => {
      const errorMessage = buildGetCourseInfoErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  if (isLoadingCourse) return <h1>Carregando...</h1>;
  if (isError) return <Navigate to="/acesso-negado-curso" />;

  return (
    <Container>
      <MainDiv>
        <IntroductionDiv>
          <Title>{course?.title}</Title>
          <Text>{course?.description}</Text>
        </IntroductionDiv>
        <GreyLine />
        <MainSection>
          <CourseScroll chapters={course?.chapters} />
          {!currVideoId ? <h1>Nenhum vídeo</h1> : <VideoPlayer />}
        </MainSection>
      </MainDiv>
    </Container>
  );
}
