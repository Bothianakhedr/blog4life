import img1 from "../../../assets/imgs/gallery/alex-azabache-Sl-5extHin0-unsplash-scaled-ovsbgk86rspock1sk7.jpg"
import image from "../../../assets/imgs/gallery/brandon-leclaire-S0ehguTNWzg-unsplash-ovsbgk86rsmc1e2zgvu92v.jpg";
import img3 from "../../../assets/imgs/posts2.jpg";
import img4 from "../../../assets/imgs/brandon-leclaire-S0ehguTNWzg-unsplash-ovsbgk86rsmc1e2zgvu92v.jpg";
import img5 from "../../../assets/imgs/apothecary-87-0541KesIb00-unsplash-ovsbgk86rsnei6on7wk2puj86.jpg";
import img6 from "../../../assets/imgs/allison-christine-vPrqHSLdF28-unsplash-scaled-ovsbgk86rspock.jpg";
// import img7 from "../../../assets/imgs/juliet-furst-4Y2wkBirOfQ-unsplash-200x300.jpg";
import img8 from "../../../assets/imgs/marya_volk-ZcU6eBGSg1U-unsplash-scaled-ovsbgk86rspock1sk79wu.jpg";
import img9 from "../../../assets/imgs/img1.jpg";

const AllPhotos = () => {
 return (
 <section className="p-5">
 <div className="container mx-auto">
 <h2 className="text-3xl font-semibold text-center mb-6">Our Gallery</h2>
 <div className="grid grid-cols-3 md:grid-cols-3 gap-4 grid-auto-rows">
 <img src={img1} alt="" className="w-full object-cover row-span-2" />
 <img src={image} alt="" className="w-full object-cover" />
 <img src={img3} alt="" className="w-full object-cover" />
 <img src={img4} alt="" className="w-full object-cover row-span-2" />
 <img src={img5} alt="" className="w-full object-cover" />
 <img src={img6} alt="" className="w-full object-cover" />
 <img src={img7} alt="" className="w-full object-cover" />
 <img src={img8} alt="" className="w-full object-cover" />
 <img src={img9} alt="" className="w-full object-cover row-span-2" />
 </div>
 </div>
 </section>
 );
};

export default AllPhotos;

