import { data } from "./RecentData";

const RecentPosts = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-3">
        <div className="title">
          <h2 className="text-2xl font-semibold mb-3">Recent Posts</h2>
          <p className="text-[#717578]">
            Nam ut rutrum ex, venenatis sollicitudin urna aliquam erat volutpat.
            Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit.
          </p>
        </div>
        <div className="py-6 md:grid md:grid-cols-4 gap-6 bg-amber-300">
          {data.map((post) => (
            <div
              key={post.id}
              className={`${post.id === 1 ? "md:col-span-3" : ""} mb-5`}
            >
              <div className="image w-full">
                <img
                  className={`w-full object-cover ${
                    post.id === 1
                      ? "h-[230px] md:h-[300px] xl:h-[400px]"
                      : "h-[230px] md:h-[250px] xl:h-[400px]"
                  }`}
                  src={post.img}
                  alt={post.title}
                />
              </div>
              <div className="content mt-5">
                <h3 className="text-2xl mb-3 font-semibold md:max-w-[490px]">
                  {post.title}
                </h3>
                <span className="text-xl">{post.data}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
