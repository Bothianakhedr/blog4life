import { posts } from "./posts";

const RecentPosts = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="title my-8">
          <h2 className="text-4xl font-medium mb-3">Recent Posts</h2>
          <p className="text-[#717574] lg:text-lg lg:max-w-[768px]">
            Nam ut rutrum ex, venenatis sollicitudin urna aliquam erat volutpat.
            Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`${
                post.id === "1" ? "md:col-span-2" : "md:col-span-1"
              } bg-white  mb-8`}
            >
              <img
                className="h-[200px] md:h-[280px] lg:h-[420px]  w-full object-cover mb-5"
                src={post.img}
                alt={post.text}
              />
              <div className="p-5 lg:p-0">
                <h3 className="text-2xl font-[500] mb-2 lg:text-3xl">{post.text}</h3>
                <span >{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
