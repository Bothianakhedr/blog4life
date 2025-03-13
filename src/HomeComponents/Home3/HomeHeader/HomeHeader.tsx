import header from "../../../assets/imgs/home3/brandon-leclaire-S0ehguTNWzg-unsplash.jpg"
import { items } from "./items";
function HomeHeader() {
  return (
   <section>
     <div
      className="h-[460px] w-full bg-cover bg-center relative my-8"
      style={{
        backgroundImage: `url(${header})`,
      }}
    >
      <div className="content text-[#131517]  container h-[300px] mx-auto md:w-[1200px] md:py-18 md:px-9 text-center  left-1/2 top-[60%] -translate-x-1/2 absolute   bg-white">
        <h2 className=" text-5xl md:text-[50px]  my-4 font-[500] md:max-w-[850px] mx-auto">
          Brand Illustration Systems: Drawing a Strong Visual Identity
        </h2>
        <span>TRX_admin / June 21, 2018</span>
      </div>
    </div>
   <div className="container mx-auto md:px-10 md:my-30">
   <div className="header-layout items md:flex md:gap-10">
     {items.map((item)=>{return <div className="item md:w-1/2 relative my-8">
        <img src={item.img} alt="" />
        <span className="bg-red-500 py-1.5 px-3 text-white text-[20px] tracking-[1px] absolute left-1/2 -translate-x-1/2 hover:bg-black     ">{item.text}</span>
        <p className="mt-12 text-2xl font-[500] text-center mx-auto text-[#131517] md:max-w-[300px]">{item.title}</p>
      </div>})}
     </div>
   </div>
    

   </section>

    
  );
}

export default HomeHeader;
