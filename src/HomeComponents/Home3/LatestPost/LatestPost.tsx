import image from "../../../assets/imgs/home3/img.jpg";

const LatestPost = () => {
  return (
    <section className="mt-10 ">
      <div className="container mx-auto  px-5  ">
        <div className="title text-center lg:mb-8">
          <h3 className="text-3xl font-[500] mb-4 lg:text-4xl ">Latest Posts</h3>
          <p className="text-[#717578] lg:max-w-[870px] lg:mx-auto ">
            Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat
            volutpat. Integer eu ipsum semt bibendum lacus vestibulum maximus
            suscipit. Quisque vitae nibh iaculis neque blandit euismod.
          </p>
        </div>
        <div>
          <div className="image mt-4 text-center ">
            <img
              src={image}
              className="lg:h-[500px] object-cover lg:w-full"
              alt=""
            />
            <div className="content my-8 ">
              <h3 className="text-2xl font-[600] my-3  lg:text-[32px] lg:font-[500]">
                Abstract Digital Art in Use: Lisbon School of Design
              </h3>
              <span className="text-[17px]">TRX_admin / June 20, 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
