import { Posts } from "./posts";


const LatestPost = () => {
  return (
    <section className="my-12">
      <div className="container  mx-auto">
        <h2 className="text-3xl font-semibold">Latest Post</h2>
        <div className="mt-8 ">
          {Posts.map((post) => {
            return (
              <div className="flex  gap-12 mb-8 ">
                <div className="image w-[35%] ">
                  <img
                    className="w-full h-[270px] object-cover"
                    src={post.image}
                    alt=""
                  />
                </div>
                <div className="caption">
                  <h3 className="text-2xl font-semibold mb-4 max-w-[605px]">
                    {post.title}
                  </h3>
                  <span className="">{post.date}</span>
                  <p className="text-[#717578] my-5 text-[16px] max-w-[655px]">
                    {post.description}
                  </p>
                  <a className="font-[600] underline" href="#">
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

export default LatestPost;
