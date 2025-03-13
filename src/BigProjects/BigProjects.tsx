import { imgBox, project } from "./data";

function BigProjects() {
  return (
    <>
      {" "}
      <div className="flex gap-10 my-5 ">
        <img
          className="w-[750px] h-[500px] object-cover"
          src={project.image}
          alt=""
        />
        <div className="content mt-12">
          <h2 className="font-bold text-5xl max-w-[400px] mb-12">
            {project.title}
          </h2>
          <span className="text-[18px]">{project.date}</span>
        </div>
      </div>
      <div className="img-box w-3/4 flex my-6  mx-auto gap-5">
        {imgBox.map((item) => {
          return (
            <div className="w-[33.333%]  relative">
              <img className="w-full h-[200px] " src={item.image} alt="" />
              <span className="absolute hover:bg-black transition-colors top-1/2 left-1/2 text-white -translate-1/2    bg-red-500 px-4 py-2">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BigProjects;
