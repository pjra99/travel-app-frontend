import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Blogcard from "../Components/Blogcard";
import TextEditor from "../Components/TextEditor";

function BlogsForSpecificDest() {
  return (
    <div>
      <SpecificPlaceHeader />
      <TextEditor title="Been to this place? Write a Blog!" />
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
      </div>
      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
      </div>

      <div className="flex flex-wrap justify-between md:px-28 md:mt-7">
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default BlogsForSpecificDest;
