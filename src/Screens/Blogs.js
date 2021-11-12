import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import PlaceCard from "../Components/Blogcard";
import Footer from "../Components/Footer";
import Blogcard from "../Components/Blogcard";

function Blogs() {
  return (
    <div>
      <SpecificPlaceHeader />

      <h1 class="text-center">text editior</h1>
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>

      <div className="flex flex-row justify-center flex-wrap">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>

      <div className="flex flex-row justify-center flex-wrap">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
