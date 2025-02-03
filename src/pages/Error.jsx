import { useNavigate } from 'react-router-dom';
import notFound from '../assets/5203299.jpg';

const Error = () => {
  const navigate = useNavigate();

  const homeHandelar = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-7">
      <h2 className="text-7xl font-bold">SORRY</h2>
      <h4 className="text-4xl font-bold">We couldn&apos;t find that page</h4>
      <p className="text-2xl font-medium">
        Try searching or go to{' '}
        <span className="text-[#FFC311] cursor-pointer" onClick={homeHandelar}>
          home page
        </span>
      </p>
      <img src={notFound} className="max-w-sm" alt="" />
    </div>
  );
};

export default Error;
