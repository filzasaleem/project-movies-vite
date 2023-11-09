
import { GoBack } from '../components/GoBack';

export const NotFound = () => {
  return (
    <>
      <GoBack to="/"  />
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className=" text-xl font-bold  ">
          Oh Uh, it seems that the page you are trying to access does not exist.
        </h1>
      </div>
    </>
  );
};
