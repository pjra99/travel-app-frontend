import Footer from "../Components/Footer";
import Blogcard from "../Components/Blogcard";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function Blogs() {
  function MyEditor() {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );

    return <Editor editorState={editorState} onChange={setEditorState} />;
  }
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
      <MyEditor className="h-96" />
      <div className="text-center font-heading text-3xl mt-16 mb-10">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex flex-wrap md:justify-between justify-center md:px-28 md:mt-7">
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
      <div className="flex flex-wrap md:justify-between justify-center md:px-28 md:mt-7">
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
      <div className="flex flex-wrap md:justify-between justify-center md:px-28 md:mt-7">
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

      <Footer />
    </div>
  );
}

export default Blogs;
