import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-2xl font-medium text-white mb-8">Lost in the sphere.</p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
