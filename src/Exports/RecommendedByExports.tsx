import { data } from "./posts";

const RecommendedByExports = () => {
  return (
    <section className="my-12">
      <div className="container mx-auto">
        <h2 className="font-semibold  ps-3 mb-4 text-2xl md:font-bold md:ps-12 md:text-3xl">
          Recommended by Experts
        </h2>
        <div className="md:grid md:grid-cols-4 gap-3  md:p-9 ">
          {data.map((post) => {
            return (
              <div className={`${post.id === 2 ? "md:col-span-2" : " "}`}>
                <div className="image w-[93%] mb-8 object-cover mx-auto ">
                  {post.id === 1 ? (
                    <img
                      className="w-full md:w-[300px] h-[320px] object-cover"
                      src={post.img}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full md:w-[600px] md:h-[650px] object-cover"
                      src={post.img}
                      alt=""
                    />
                  )}
                </div>
                <div className="content mt-5  px-2 ">
                  
                  <h3 className="font-semibold mb-3 md:text-[25px] md:font-bold">{post.title}</h3>
                  <span className="text-[18px] mb-3 block">{post.data}</span>
                  <p className="text-[17px] mb-5 text-[#717578] md:text-[18px]">
                    {post.description}
                  </p>
                  <a className="font-bold underline mb-5 block" href="#">
                    {post.link}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedByExports;
