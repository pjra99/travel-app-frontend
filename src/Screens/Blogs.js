import Footer from "../Components/Footer";
import Blogcard from "../Components/Blogcard";
import TextEditor from "../Components/TextEditor";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Blogs() {
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
      <TextEditor title="Write a Blog." />
      <div className="text-center font-heading text-3xl mt-16 mb-10">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Link to="/specificblogscreen">
          {" "}
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />
        </Link>
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

export default Blogs;
