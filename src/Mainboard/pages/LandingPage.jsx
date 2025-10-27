/*import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Login from "../components/Login";
import Register from "../components/Register";
import AddTimetable from "../components/forms/AddTimetable";
import Addnotice from "../components/forms/Addnotice";
import AddNotes from "../components/forms/AddNotes";
import AddComplaint from "../components/forms/AddComplaint";
import Welcome from "../components/Welcome";

function LandingPage(){
 const [showLogin,setShowLogin]=useState(false);
 const [showRegister,setShowRegister]=useState(false);
 const [showtimetable,setShowtimetable]=useState(false);
 const [shownotice,setShownotice]=useState(false);
 const [shownotes,setShownotes]=useState(false);
 const[showcomplaint,setShowcomplaint]=useState(false);
 const [showwelcome,setShowwelcome]=useState(false);
 const[showLogout,setShowLogout]=useState(false);


 useEffect(()=>{
    const loginToken=localStorage.getItem("loginToken");
    if(loginToken){
        setShowLogout(true);
        setShowwelcome(true)
    }
 },[])

const logoutHandler=()=>{
    confirm("Are You Sure To Logout?")
    localStorage.removeItem("loginToken");
    setShowLogout(false);
    setShowwelcome(false);
}

    const showLoginHandler =()=>{
        setShowLogin(true);
        setShowRegister(false);
        setShowtimetable(false);
        setShownotice(false);
        setShownotes(false);
        setShowcomplaint(false);
        setShowwelcome(false);
    }
    const showRegisterHandler=()=>{
        setShowRegister(true);
        setShowLogin(false);
        setShowtimetable(false);
        setShownotice(false);
        setShownotes(false);
        setShowcomplaint(false);
        setShowwelcome(false);
    }

    const showTimetableHandler=()=>{
        if(showLogout){
        setShowtimetable(true);
        setShowLogin(false);
        setShowRegister(false);
        setShownotice(false);
        setShownotes(false);
        setShowcomplaint(false);
        setShowwelcome(false);
        }else{
            alert("Please Login");
            setShowLogin(true);
        }
        }
    const showNoticeHandler=()=>{
        if(showLogout){
        setShownotice(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowtimetable(false);
        setShownotes(false);
        setShowcomplaint(false);
        setShowwelcome(false);
    }else{
        alert("Please Login");
        setShowLogin(true);
    }
}

    const showNotesHandler=()=>{
        if(showLogout){
        setShownotes(true);
          setShownotice(false);
        setShowLogin(false);
        setShowRegister(false);
        setShowtimetable(false);
        setShowcomplaint(false);
        setShowwelcome(false);
    }else{
        alert("Please Login");
        setShowLogin(true);
    }
}
    const showcomplaintHandler=()=>{
        if(showLogout){
        setShowcomplaint(true);
           setShownotes(false);
          setShownotice(false);
        setShowLogin(false);
        setShowRegister(false);
        setShowtimetable(false);
        setShowwelcome(false);
    }else{
        alert("Please Login");
        setShowLogin(true);
    }
    }
    const showWelcomeHandler=()=>{
        setShowwelcome(true);
        setShowcomplaint(false);
        setShownotes(false);
        setShownotice(false);
        setShowLogin(false);
        setShowRegister(false);
        setShowtimetable(false);
    }
    return(

        <>
        <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}
        showLogout={showLogout}
        logoutHandler={logoutHandler}
        />
        <div className="collectionSection">
      {showtimetable && showLogout && <AddTimetable/>}
      {shownotice &&<Addnotice/>}
      { shownotes && showLogout && <AddNotes/>}
      {showcomplaint && <AddComplaint/>}
      {showwelcome&&<Welcome/>}
      {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
      {showRegister &&  <Register showLoginHandler={showLoginHandler}/>}
    { <SideBar showTimetableHandler={showTimetableHandler} showNoticeHandler={showNoticeHandler} showNotesHandler={showNotesHandler} showcomplaintHandler={showcomplaintHandler}/>}
</div>
        </>
    )
}

export default LandingPage;

*/
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Login from "../components/Login";
import Register from "../components/Register";
import AddTimetable from "../components/forms/AddTimetable";
import Addnotice from "../components/forms/AddNotice";
import AddNotes from "../components/forms/AddNotes";
import AddComplaint from "../components/forms/AddComplaint";
import Welcome from "../components/Welcome";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showTimetable, setShowTimetable] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showComplaint, setShowComplaint] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLogout, setShowLogout] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      setShowLogout(true);
      setShowWelcome(true);
    }
  }, []);

  
  const logoutHandler = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("loginToken");
      setShowLogout(false);
      setShowWelcome(false);
      setShowLogin(false);
      alert("Logged out successfully!");
    }
  };

  
  const resetViews = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowTimetable(false);
    setShowNotice(false);
    setShowNotes(false);
    setShowComplaint(false);
    setShowWelcome(false);
  };

  const showLoginHandler = () => {
    resetViews();
    setShowLogin(true);
  };

  const showRegisterHandler = () => {
    resetViews();
    setShowRegister(true);
  };

  const showTimetableHandler = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      resetViews();
      setShowLogout(true);
      setShowTimetable(true);
    } else {
      alert("Please Login first!");
      setShowLogin(true);
    }
  };

  const showNoticeHandler = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      resetViews();
      setShowLogout(true);
      setShowNotice(true);
    } else {
      alert("Please Login first!");
      setShowLogin(true);
    }
  };

  const showNotesHandler = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      resetViews();
      setShowLogout(true);
      setShowNotes(true);
    } else {
      alert("Please Login first!");
      setShowLogin(true);
    }
  };

  const showComplaintHandler = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      resetViews();
      setShowLogout(true);
      setShowComplaint(true);
    } else {
      alert("Please Login first!");
      setShowLogin(true);
    }
  };

  const showWelcomeHandler = () => {
    resetViews();
    setShowWelcome(true);
  };

  return (
    <>
      <NavBar
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
        showLogout={showLogout}
        logoutHandler={logoutHandler}
      />

      <div className="collectionSection">
        {showTimetable && showLogout && <AddTimetable />}
        {showNotice && showLogout && <Addnotice />}
        {showNotes && showLogout && <AddNotes />}
        {showComplaint && showLogout && <AddComplaint />}
        {showWelcome && <Welcome />}
        
        {showLogin && (
          <Login
            showWelcomeHandler={showWelcomeHandler}
            onLoginSuccess={() => {
              setShowLogout(true);
              setShowWelcome(true);
              setShowLogin(false);
            }}
          />
        )}

        {showRegister && <Register showLoginHandler={showLoginHandler} />}

        <SideBar
          showTimetableHandler={showTimetableHandler}
          showNoticeHandler={showNoticeHandler}
          showNotesHandler={showNotesHandler}
          showcomplaintHandler={showComplaintHandler}
        />
      </div>
    </>
  );
}

export default LandingPage;
