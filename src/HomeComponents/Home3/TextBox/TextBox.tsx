import { content, imageContent } from "./content";

const TextBox = () => {
  return (
    <section className="mt-18 mb-12">
      <div className="container mx-auto px-5">
        <div className="all-text md:flex md:flex-wrap md:gap-4 ">
          {content.map((text) => {
            return (
              <div className="bg-[#F7F8FA] pt-8 pb-10 m-6 md:m-0 text-center md:w-[48%] lg:w-[24%] ">
                <h2 className="text-[17px] hover:text-red-500 transition-colors font-[500] mb-3 md:max-w-[275px] md:text-[19px] lg:text-[19px] lg:max-w-[200px] mx-auto">
                  {text.title}
                </h2>
                <span>{text.data}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-5 md:flex md:flex-wrap md:gap-5  mt-8">
        {imageContent.map((post) => {
          return (
            <div className="my-8 md:my-3 md:w-[48.5%] ">
              <div className="image">
                <img
                  className="w-full object-cover h-[250px] lg:h-[370px]"
                  src={post.img}
                  alt=""
                />
              </div>
              <div className="caption my-6 text-center">
                <h3 className="text-[24px] font-[500] mb-3.5 lg:text-[32px] ">
                  {post.title}
                </h3>
                <span>{post.text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container   mx-auto ">
        <button className="bg-red-500 uppercase w-[350px] mx-auto md:w-[280px]   block   lg:w-[250px] tracking-[2px]  text-white text-[18px] font-[400] px-14 py-5 hover:bg-black">
          More Posts{" "}
        </button>
      </div>
    </section>
  );
};

export default TextBox;
