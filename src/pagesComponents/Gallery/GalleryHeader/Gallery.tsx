import GalleryImg from "../../../assets/imgs/post1.jpg";

const Gallery = () => {
  return (
    <section className="md:flex  py-9 lg:gap-12">
      <div className="image bg-red-300  lg:w-1/2 ">
        <img
          className="w-full h-[200px] object-cover md:w-[480px] md:h-[500px] lg:w-full"
          src={GalleryImg}
          alt=""
        />
      </div>
      <div className="content mt-7 px-4 md:px-8   lg:w-1/2">
        <h2 className="text-3xl font-semibold max-[280px] mb-3  md:max-w-[200px] md:text-[34px] lg:text-[55px] lg:max-w-[445px] lg:font-[500]">
          Turning Customer Needs into Product Solutions
        </h2>
        <p className="text-[19px] md:leading-4 lg:text-[18px]">
          Difficulty of being good,new realisations
        </p>
        <button className="py-5 px-8 tracking-[4px] w-full my-5 bg-red-500 hover:bg-black transition-colors text-white md:w-[250px] lg:font-[500] lg:py-[25px]">
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
};

export default Gallery;
