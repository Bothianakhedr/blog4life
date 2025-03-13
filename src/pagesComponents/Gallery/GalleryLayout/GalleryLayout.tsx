import img1 from "../../../assets/imgs/img1.jpg";
import img2 from "../../../assets/imgs/header.jpg";
import img3 from "../../../assets/imgs/img2.jpg";
import img4 from "../../../assets/imgs/bag.jpg";
const GalleryLayout = () => {
  return (
    <section className="my-8">
      <div className="md:container mx-auto md:px-9">
      <div className="images  px-3.5 md:grid md:grid-cols-3 md:gap-7 md:mb-0">
        <img className="object-cover mb-5 h-[350px] w-full md:h-[350px] md:w-full md:mb-0" src={img1} alt="" />
        <img className="object-cover mb-5 col-span-2  md:h-[350px] md:w-full md:mb-0" src={img2} alt="" />
        <img className="object-cover mb-5 col-span-2 md:h-[350px] md:w-full md:mb-0" src={img3} alt="" />
        <img className="object-cover mb-5 h-[350px] w-full  md:h-[350px] md:w-full md:mb-0" src={img4} alt="" />
      </div>
      </div>
    </section>
  );
};

export default GalleryLayout;
