import img1 from '../../../assets/imgs/home2/woman-in-rustic-dress-and-hat-enjoying-peaceful-su-Q9VDD3Y.jpg'
import img2 from '../../../assets/imgs/home2/lucija-ros-Un3pQ5zb000-unsplash-100x100.jpg'
import img3 from '../../../assets/imgs/home2/taisiia-shestopal-AclxFgBjeD0-unsplash-scaled.jpg'
import img4 from '../../../assets/imgs/home2/ellieelien-efVwtODKNhM-unsplash.jpg'
import img5 from '../../../assets/imgs/home2/pexels-mathias-pr-reding-7664068.jpg'
import img6 from '../../../assets/imgs/home2/juliet-furst-MISKObMT6TA-unsplash.jpg'
const OurGallery = () => {
  return (
    <section className='my-12'>
      <div className="container px-5 mx-auto">
        <div className="title mb-9">
          <span>our projects</span>
          <h3 className='text-3xl font-[500]'>From the Gallery</h3>
        </div>
        <div className="images mt-6 grid grid-cols-3 md:grid-cols-6">
            <img className=' h-[150px] object-cover w-full' src={img1} alt="" />
            <img className=' h-[150px] object-cover w-full' src={img2} alt="" />
            <img className=' h-[150px] object-cover w-full' src={img3} alt="" />
            <img className=' h-[150px] object-cover w-full' src={img4} alt="" />
            <img className=' h-[150px] object-cover w-full' src={img5} alt="" />
            <img className=' h-[150px] object-cover w-full' src={img6} alt="" />

        </div>
      </div>
    </section>
  );
};

export default OurGallery;
