 import React from "react";
 

 function NavBar({showLoginHandler,showRegisterHandler,showLogout,logoutHandler}){
    return(
        <>
        <div className="navbar">
            <h1>SGM CSE</h1>
            <div className="userAuth">
               {!showLogout ? <>
             <span onClick={showLoginHandler}>Login/ </span>
             <span onClick={showRegisterHandler}>Register</span>
             </>:<span onClick={logoutHandler} className="logout">Logout</span>}
 
            </div>
                
        </div>
        <br>
        </br>
       <marquee behaviour="scroll" scrollamount="7">Welcome to Admin Dashboard CSE 2025</marquee>
        </>
    )
 }

 export default NavBar;
