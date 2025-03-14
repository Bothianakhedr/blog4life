import image from "../../../assets/imgs/home2/the-tonik-4x1AyuOTIgo-unsplash-1200x1367.jpg";

const BrandOfDream = () => {
  return (
    <section className="my-10">
      <div className="container  lg:flex ms-auto lg:items-center lg:justify-between">
        <div className="content  mb-8">
          <h2 className="text-[40px] font-[500] lg:max-w-[365px] leading-10 mb-5 ">Helping You Create the Brand of Your Dreams</h2>
          <span>TRX_admin / June 21, 2018</span>
        </div>
        <div
          style={{ backgroundImage: `URL(${image})` }}
          className="image h-[200px] w-full  lg:h-[500px] lg:w-[65%] bg-center bg-cover"
        ></div> 
      </div>
    </section>
  );
};

export default BrandOfDream;
