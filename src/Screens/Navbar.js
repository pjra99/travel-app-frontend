import React from "react"
import {Link} from 'react-router-dom'
function Navbar(){
    return (
<div className="grid grid-cols-10 absolute mt-10 w-screen font-body bg-white">
    <div></div>
    <div className="text-green font-heading">Travel Website</div>
    <div></div>
    <div></div>
    <div></div>
    <Link to="/home"><div id="home"  >Home</div></Link>
    <Link to="/blogs"><div id="blogs"   >Blogs</div></Link>
   <Link to="/upload"><div id="upload"  >Upload </div></Link> 
   <Link to="/signin"> <div id="login"  >Log In</div></Link>
    <div></div>
</div>
    );
}

export default Navbar