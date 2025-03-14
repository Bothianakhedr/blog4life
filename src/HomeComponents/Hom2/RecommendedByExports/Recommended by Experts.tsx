import { Data } from "./Recommended Data";

const RecommendedByExperts = () => {
  return (
    <section className="my-20 px-4">
      <div className="container mx-auto md:px-10 ">
        <h2 className="my-5 text-2xl font-[500]">Recommended by Experts</h2>
        <div className="items md:grid md:gap-5 md:grid-cols-4">
          {Data.map((item) => {
            return (
              <div
                className={`mt-8 ${
                  item.id === "2"
                    ? "md:col-span-2 md:row-span-3"
                    : " md:col-span-1 "
                }`}
              >
                <img
                  className={`${
                    item.id === "2"
                      ? " h-[200px] md:h-[300px] w-full lg:h-[520px] "
                      : " h-[200px] md:h-[150px] w-full lg:h-[250px]"
                  } "w-full object-cover mb-5`}
                  src={item.img}
                  alt=""
                />
                <h2 className="text-[19px] lg:text-[28px] leading-8 font-[500] lg:mb-2.5">
                  {item.title}
                </h2>
                <span>{item.data}</span>
                <p className="my-5 text-[#717574] ">{item.text}</p>
                <a className="underline  " href="#">
                  {item.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedByExperts;
