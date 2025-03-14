import header from "../../../assets/imgs/home2/jonathan-borba-i2gom1zDv5Y-unsplash.jpg";
const HomeHeader = () => {
  return (
    <section>
      <div
        className="h-[600px] bg-cover bg-center relative my-6 "
        style={{ backgroundImage: `URL(${header})` }}
      >
     
        <div className=" layer absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 flex items-center">
        <div className="content px-5 lg:px-12">
       <h2 className="text-4xl text-white mb-5 md:text-5xl">How will Politics Impact the Design?</h2>
       <span className="text-white text-[18px]">TRX_admin / December 24, 2021</span>
       </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
