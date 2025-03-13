import { posts } from "./post";

const RecentPost = () => {
  return (
    <section className="py-5 ">
      <div className="  ml-auto  w-[80%] ">
      <h3 className="font-semibold mb-8 text-[42px]">Recent Posts</h3>
        <div className="content gap-10 flex">
        {posts.map((post) => {
          return (
            <div>
              {post.id === 1 ? (
                <img src={post.img} className="w-[468px] h-[300px]" alt="" />
              ) : (
                <img src={post.img} className="w-[800px] h-[300px]" alt="" />
              )}

              <h4 className="text-3xl font-semibold pb-4 pt-8">{post.title}</h4>
              <span className="text-[17px] ">{post.data}</span>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
