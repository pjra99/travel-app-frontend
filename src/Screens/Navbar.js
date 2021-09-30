import React from "react"
import {Link} from 'react-router-dom'
function Navbar(){
    return (
<div className="grid grid-cols-10 mt-10 font-body bg-white">
    <div></div>
    <div className="text-green font-heading">Travel Website</div>
    <div></div>
    <div></div>
    {/* <div></div> */}
    <div></div>
    <Link to="/home"><div>Home</div></Link>
    <Link to="/blogs"><div>Blogs</div></Link>
   <Link to="/upload"><div>Upload </div></Link> 
   <Link to="/signin"> <div>Log In</div></Link>
    <div></div>
    {/* <div></div> */}
</div>
    );
}

export default Navbar