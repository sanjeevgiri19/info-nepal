import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center mt-44 ">
      <BounceLoader color="#D3D3D3" size={150} />
    </div>
  );
};

export default Loader;
