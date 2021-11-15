import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import PlaceCard from "../Components/Blogcard";
import Footer from "../Components/Footer";
import Blogcard from "../Components/Blogcard";
import TextEditor from "../Components/TextEditor";

function Blogs() {
  return (
    <div>
      <SpecificPlaceHeader />
      <TextEditor />
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex flex-wrap justify-between md:px-28">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
      <div className="flex flex-wrap justify-between md:px-28">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>

      <div className="flex flex-wrap justify-between md:px-28">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
