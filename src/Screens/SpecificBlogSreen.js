import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Blogcard from "../Components/Blogcard";
function SpecificBlogSreen() {
  return (
    <div className="container-fluid">
      <div
        className="h-80"
        style={{
          backgroundImage: "url(/writeblogsheaderimage.svg)",
          backgroundSize: "100%",
        }}
      >
        <Navbar />
      </div>
      <div className="md:h-99 border border-grey flex flex-col md:mx-32 mx-2 py-10 mt-16 px-8">
        <div className="flex flex-wrap justify-between px-8 ">
          <img src="user-male.svg" className="h-24 -m" />
          <div>
            <div className="font-heading text-2xl">Nainital was great.</div>
            <img src="4star.svg" className="md:-ml-2 ml-10" />
          </div>
          <div className="flex flex-wrap">
            <img src="likeicon.svg" className="-mt-14" />
            <span className="mt-2 ml-1 ">101</span>
          </div>
          <div className="flex flex-wrap">
            <img src="comment.svg" className="h-5 w-8 mt-3" />
            <span className="mt-2 ml-1">101</span>
          </div>
          {/* <img src="comment.svg" className="h-5 w-8 mt-2 ml-6" /> */}
          {/* </div> */}
          <div className="flex flex-wrap pl-2 mt-2">
            <img
              src="view more.svg"
              className="transform rotate-90 w-5 h-2 mt-2"
              alt="Up vote"
            />
            <p>237</p>
            <img
              src="view more.svg"
              className="transform -rotate-90 w-5 h-2 mt-2"
              alt="Up vote"
            />{" "}
            <p>11</p>
          </div>
        </div>
        <div className="p-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris..Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris...Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris...Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris...Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </div>
      </div>
      <div className="text-center text-3xl font-heading mt-16 mb-10">
        <span className="text-green">O</span>ther Blogs
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
      <Footer />
    </div>
  );
}
export default SpecificBlogSreen;
