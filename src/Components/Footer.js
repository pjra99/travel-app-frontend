function Footer() {
  return (
    <div className="flex flex-wrap mt-16 bg-lightgreen text-green py-6 w-screen">
      <div className="w-68 md:ml-32 ml-20">
        <h2 className="text-xl font-heading mb-4">TravelEzy</h2>
        <p className="font-semibold">
          We created a seamless experience for you to help you discover and
          explore this world better.
        </p>
      </div>
      <div className="md:ml-44 ml-20 md:mt-0 mt-5">
        <h2 className="mb-4 font-semibold">About Us</h2>
        <ul>
          <li className="mb-2">What do we do?</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="md:ml-24 ml-20">
        <h2 className="mb-4 font-semibold md:mt-0 mt-5">Legal Stuff</h2>
        <ul>
          <li className="mb-2">Privacy policy</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
      <div className="md:ml-28 ml-20">
        <div className="flex flex-wrap text-sm">
          {" "}
          <div className="md:mt-2 mt-5">Subscribe to our newsletter</div>{" "}
          <button className="text-white bg-green ml-8 md:p-2 px-2 rounded-md">
            <img src="next.svg" />
          </button>
        </div>
        <input
          className="py-1 mt-2 rounded-sm w-60"
          type="text"
          placeholder="  yourmail@xyz.com"
        />
        <div className="flex justify-center mt-2">
          <img src="twitter.svg" className="w-9 mt-2" alt="twitter" />
          <img
            src="facebook icon.svg"
            className="w-9 mt-2 ml-8"
            alt="facebook"
          />
          <img src="googleplus.svg" className="w-9 mt-2 ml-8" alt="Gmail" />
          <img src="youtube.svg" className="w-9 mt-2 ml-8" alt="Youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
