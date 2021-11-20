function TextEditor({ title }) {
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
        />
      </div>
      <div className="md:h-12 h-36 md:pb-0 pb-2  bg-lightgreen flex flex-wrap  md:pr-0 pr-4 justify-between pl-4 rounded-b-md">
        <div className="pt-3 ">
          Font Size
          <select name="font-size" id="font-size" className="ml-2">
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
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
          <button>
            <img src="leftalign.svg" className="h-6" />
          </button>
          <button>
            <img src="centeralign.svg" className="h-6" />
          </button>
          <button>
            <img src="rightalign.svg" className="h-6" />
          </button>
        </div>
        <div className="flex md:w-36 w-24 ml-10 flex-wrap justify-between mr-10">
          <button>
            <img src="underlineicon.svg" className="h-6" />
          </button>
          <button>
            <img src="italicsicon.svg" className="h-5" />
          </button>
          <button>
            <img src="boldicon.svg" className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TextEditor;
