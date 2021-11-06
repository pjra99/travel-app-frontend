function Footer(){
    return (
        <div className="flex flex-wrap mt-16 bg-lightgreen text-green py-6 w-screen">
            <div className="w-68 ml-32">
                <h2 className="text-xl font-heading mb-4">TravelEzy</h2>
                <p className="font-semibold">We created a seamless experience for you 
to help you discover and explore this world better.</p>
            </div>
            <div className="ml-44">
                <h2 className="mb-4 font-semibold">About Us</h2>
                <ul>
                    <li className="mb-2">What do we do?</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="ml-24">
                <h2 className="mb-4 font-semibold">Legal Stuff</h2>
                <ul>
                    <li className="mb-2">Privacy policy</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
            <div className="ml-28">
               <div className="flex text-sm"> <div className="mt-2">Subscribe to our newsletter</div> <button className="text-white bg-green ml-3 p-2 rounded-md"><img src="next.svg" /></button></div>
                <input className="py-1 mt-2 rounded-sm w-60" type="text" placeholder="  yourmail@xyz.com"/>
                <div className="flex justify-center mt-2">
                    <img src="twitter.svg" className="w-9 mt-2" />
                    <img src="facebook icon.svg" className="w-9 mt-2 ml-8" />
                    <img src="googleplus.svg" className="w-9 mt-2 ml-8" />
                    <img src="youtube.svg" className="w-9 mt-2 ml-8" />
                </div>
            </div>
        </div>
    );
}

export default Footer