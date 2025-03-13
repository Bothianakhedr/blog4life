import HeaderImg from "../assets/imgs/header.jpg";
const Header = () => {
  return (
    <header className="my-8">
      <div
        className="image   "
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.308)  ) , url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "520px",
        }}
      >
        <div className=" flex flex-col h-full justify-center px-4 md:ps-14 lg:ps-18">
          <h2 className="text-4xl font-semibold mb-8 text-white  md:text-[50px] ">
            How will Politics Impact the Design?
          </h2>
          <p className="text-[19px] md:text-white text-[#000000cb]">
            TRX_admin <span className="text-white ">/</span> December 24, 2021
          </p>
        </div>
      </div>
    </header>
  ); 
};

export default Header;
