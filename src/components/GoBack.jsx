import { Link } from "react-router-dom";
export const GoBack = ({to}) => {
  return (
    <div className="z-10 bg-black p-6 text-2xl font-bold underline opacity-60">
      <Link to={to}>Back</Link>
    </div>
  );
};
