import image from "../../../assets/imgs/home3/the-tonik-4x1AyuOTIgo-unsplash.jpg";
const CreativeDesign = () => {
  return (
    <section className="my-8">
      <div className="container  md:flex lg:gap-9">
        <div className="image my-9  md:w-[60%] lg:w-1/2 ">
          <img className="w-full h-[220px] object-cover md:h-auto lg:h-[550px]" src={image} alt="" />
        </div>
        <div className="content pe-8 ps-7  md:w-[40%] md:ps-12 md:pt-20   ">
          <h3 className="text-[30px] text-[#131517] font-[500] leading-[30px] my-5 md:max-w-[210px] md:leading-[1.2] lg:max-w-[375px] lg:text-[42px]">
            Creative Designs Brand Identity and Packaging
          </h3>
          <span className="my-5 block text-[18px]">
            TRX_admin / June 21, 2018
          </span>
          <p className="text-[#717578] text-[18px] mb-3">
            Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat
            volutpat.
          </p>
          <a className="underline text-[16px] font-[500]" href="#">
            Read Article
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativeDesign;
