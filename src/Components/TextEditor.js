import { useState } from "react";

function TextEditor({ title }) {
  const [fontStyle, setFontStyle] = useState("normal");
  const [alignment, setAlignment] = useState("left");
  const [textDecoration, setTextDecoration] = useState("none");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontSize, setFontSize] = useState("16px");
  // const[fontFamily, setFontFamily] = useState("IBM Pl")

  function setStyle(clickStatus) {
    if (clickStatus === 1)
      setFontSize(document.getElementById("font-size").value);

    // if (clickStatus === 2) s;

    if (clickStatus === 3) setAlignment("left");
    if (clickStatus === 4) setAlignment("center");
    if (clickStatus === 5) setAlignment("right");
    if (clickStatus === 6)
      textDecoration === "underline"
        ? setTextDecoration("none")
        : setTextDecoration("underline");
    if (clickStatus === 7)
      fontStyle === "italic" ? setFontStyle("") : setFontStyle("italic");
    if (clickStatus === 8)
      fontWeight === "normal" ? setFontWeight("900") : setFontWeight("normal");
  }
  return (
    <div className="flex-col justify-between mt-16 rounded-md border-2 border-lightgrey md:mx-36 mx-1">
      <div className="flex justify-center h-12 pt-3 mb-2 bg-black text-white rounded-t-md font-heading text-xl">
        {title}
      </div>
      <div className="px-2">
        <textarea
          className="w-full h-10 border-2 border-lightgrey "
          placeholder="   Title"
        />
        <textarea
          className="w-full h-68 border-2 border-lightgrey "
          placeholder="  (Body)"
          style={{
            textAlign: alignment,
            fontStyle: fontStyle,
            textDecoration: textDecoration,
            fontWeight: fontWeight,
            fontSize: fontSize,
          }}
        />
      </div>
      <div className="md:h-12 h-36 md:pb-0 pb-2  bg-lightgreen flex flex-wrap  md:pr-0 pr-4 justify-between pl-4 rounded-b-md">
        <div className="pt-3 ">
          Font Size
          <select
            name="font-size"
            id="font-size"
            className="ml-2"
            id="font-size"
            onClick={() => setStyle(1, 16)}
          >
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="22px">22</option>
          </select>
        </div>
        <div className="pt-3">
          Font Family{" "}
          <select name="font-style" id="font-style" className="ml-1">
            <option value="IBM Plex Sans">IBM Plex Sans</option>
            <option value="Mono">Mono</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Comfortaa">Comfortaa</option>
          </select>
        </div>
        <div className="flex md:w-36 w-24 ml-10 flex-wrap justify-between">
          <button onClick={() => setStyle(3)}>
            <img src="leftalign.svg" className="h-6" />
          </button>
          <button onClick={() => setStyle(4)}>
            <img src="centeralign.svg" className="h-6" />
          </button>
          <button onClick={() => setStyle(5)}>
            <img src="rightalign.svg" className="h-6" />
          </button>
        </div>
        <div className="flex md:w-36 w-24 ml-10 flex-wrap justify-between mr-10">
          <button onClick={() => setStyle(6)}>
            <img src="underlineicon.svg" className="h-6" />
          </button>
          <button>
            <img
              src="italicsicon.svg"
              className="h-5"
              onClick={() => setStyle(7)}
            />
          </button>
          <button>
            <img
              src="boldicon.svg"
              className="h-6"
              onClick={() => setStyle(8)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TextEditor;
