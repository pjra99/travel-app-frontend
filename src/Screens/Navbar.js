import React from "react"
import {Link} from 'react-router-dom'
function Navbar(){

    function changeBackground(num){
        console.log("Clicked")
        document.getElementById("home").style.background = "white"
       document.getElementById("home").style.color = 'black'
       document.getElementById("blogs").style.background = "white"
       document.getElementById("blogs").style.color = 'black'
       document.getElementById("upload").style.background = "white"
        document.getElementById("upload").style.color = 'black'
        document.getElementById("login").style.background = "white"
        document.getElementById("login").style.color = 'black'

     if(num==1){
       document.getElementById("home").style.background = "black"
       document.getElementById("home").style.color = 'white'
     }
     if(num==2){
        document.getElementById("blogs").style.background = "black"
        document.getElementById("blogs").style.color = 'white'
     }
     if(num==3){
        document.getElementById("upload").style.background = "black"
        document.getElementById("upload").style.color = 'white'
     }
     if(num==4){
        document.getElementById("login").style.background = "black"
        document.getElementById("login").style.color = 'white'
     }
    // alert("hi")
    }
    return (
<div className="grid grid-cols-10 absolute mt-10 w-screen font-body bg-white">
    <div></div>
    <div className="text-green font-heading">Travel Website</div>
    <div></div>
    <div></div>
    <div></div>
    <Link to="/home" onClick={()=>changeBackground(1)}><div id="home"  >Home</div></Link>
    <Link to="/blogs" onClick={()=>changeBackground(2)}><div id="blogs"   >Blogs</div></Link>
   <Link to="/upload" onClick={()=>changeBackground(3)}><div id="upload"  >Upload </div></Link> 
   <Link to="/signin" onClick={()=>changeBackground(4)}> <div id="login"  >Log In</div></Link>
    <div></div>
</div>
    );
}

export default Navbar