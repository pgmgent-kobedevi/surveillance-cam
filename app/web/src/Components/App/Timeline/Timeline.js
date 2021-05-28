import { Link } from 'react-router-dom';
import { route, Routes } from '../../../core/routing';
import useMotionMoments from '../../../hooks/queries/useMotionMoments';
import Alert from '../../Design/Alert';
import Spinner from '../../Design/Spinner/Spinner';

const Timeline = () => {
  const { data: motionMoments, ...query } = useMotionMoments();

  if (query.isLoading) {
    return <Spinner />;
  }

  if (query.isError) {
    return <Alert color="danger">{query.error.message}</Alert>;
  }

  console.log(motionMoments);

  return (
    <>
      <h1>Timeline</h1>

      <ul>
        {motionMoments.map((mm) => (
          <li key={mm.id}>
            <Link to={route(Routes.TimelineDetail, { id: mm.id })}>
              {mm.id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Timeline;