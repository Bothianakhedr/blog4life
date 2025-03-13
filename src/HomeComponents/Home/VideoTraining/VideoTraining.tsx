import { FaPlay } from "react-icons/fa";

const VideoTraining = () => {
  return (
    <section className=" my-12">
      <div className="content-box flex  gap-15 ">
        <div className="image w-1/2  ">
          <img
            className="w-full h-[580px] object-cover"
            src="/src/assets/imgs/alex.jpg"
            alt="alex"
          />
        </div>
        <div className="content mt-15 ">
          <span className="bg-gray-100 size-18 cursor-pointer hover:bg-red-500 group transition-colors flex items-center justify-center p-4 rounded-[50%]">
            <FaPlay className="group-hover:text-white transition-colors" />
          </span>
          <h4 className="font-bold text-4xl max-w-[320px] mb-10  mt-7 cursor-pointer  ">
            Go from Beginner to Pro with this Video Training
          </h4>
          <p className="max-w-[395px]  text-[17px] text-[#717578]">
            Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat
            volutpat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTraining;
