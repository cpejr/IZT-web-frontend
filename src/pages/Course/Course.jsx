import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loading } from '../../components/common';
import { CourseScroll, Video } from '../../components/features';
import { useGetUserCourse } from '../../hooks/query/courses';
import useAuthStore from '../../stores/auth';
import useVideoStore from '../../stores/video';
import {
  Container,
  CourseHeader,
  Title,
  Description,
  CourseBody,
  GreyLine,
} from './Styles';
import { buildGetCourseInfoErrorMessage } from './utils';

export default function Course() {
  const { courseId } = useParams(); // This is were in the future will be getting the course id
  const currVideoId = useVideoStore((state) => state.currVideoId);
  const user = useAuthStore((state) => state.auth?.user);
  const userHasAccess = user?.courses?.includes(
    '649b66dd090a10350f3e341b' || courseId
  );

  const { data: course, isLoadingCourse } = useGetUserCourse({
    user: user?._id,
    course: '649b66dd090a10350f3e341b' || courseId,
    userHasAccess, // For enabiling the request or not
    onError: (err) => {
      const errorMessage = buildGetCourseInfoErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  if (!userHasAccess) return <Navigate to="/acesso-negado-curso" />;
  if (isLoadingCourse)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <CourseHeader>
        <Title>{course?.title}</Title>
        <Description>{course?.description}</Description>
      </CourseHeader>
      <GreyLine />
      <CourseBody>
        <CourseScroll chapters={course?.chapters} />
        {!currVideoId ? <h1>Nenhum vídeo</h1> : <Video />}
      </CourseBody>
    </Container>
  );
}
