function Dropanddrag() {
  return (
    <div className="flex flex-wrap items-center justify-center border-2 border-lightgrey rounded-lg h-56 md:w-97 w-64 mb:mt-0 mt-3">
      <div class="image-upload flex flex-wrap flex-col items-center">
        <label for="file-input">
          <img src="add.svg" alt="add-icon" />
        </label>

        <input id="file-input" type="file" className="hidden" />
      </div>
    </div>
  );
}

export default Dropanddrag;
