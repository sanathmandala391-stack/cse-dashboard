 import React, { useState } from "react";
import { API_URL } from "../data/apiPath";
import {InfinitySpin} from 'react-loader-spinner'
 function Register({showLoginHandler}){
    const [name,setName]=useState("");
    const [pinNumber,setPinNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const [showPassword,setShowPassword]=useState(false)
    
    const handleShowPassword=()=>{
setShowPassword(!showPassword);
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);

        try{
       const response=await fetch(`${API_URL}/api/register`,{
        method:'POST',
       headers:{
        'Content-Type':'application/json'
       
       },
       body:JSON.stringify({name,pinNumber,email,password})
         });

         const data= await response.json();
         if(response.ok){
            console.log(data);
             setName("");
             setPinNumber("");
             setEmail("");
             setPassword("");
             alert("Admin Registered Sucessfull");
             showLoginHandler();
         }
        else{
            setError(data.error);
            alert("Admin Registration Failed");
        }
         
        }
        catch(err){
         console.error("Registrtaion Failed",err);
         alert("Registrtaion Failed");
        }
        finally{
            setLoading(false);
        }
    };
    
    return(
        
        <div className="registerSection">
{loading &&

<div className="loaderSection">
    <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
    <p>Your Registration Under Process...</p>
    </div>
}

  {!loading &&  <form  className="authForm" onSubmit={handleSubmit} autoComplete="off">
      <h3>Admin Register</h3>
      <label>Username</label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/><br></br>
      <label>Pin-Number</label>
      <input type="text" name="pinNumber" value={pinNumber} onChange={(e)=>setPinNumber(e.target.value)} placeholder="Enter Your Pin"/><br></br>
    <label>Email</label>
    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br></br>
    <label>Password</label>
    <input type={showPassword ? "text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter Your Password"/><br></br>
  <span className="showPassword" onClick={handleShowPassword}>
  {showPassword ? "Hide" :"show"}</span><br></br>
    <div className="btnSubmit">
<button type="submit">Submit</button>
    </div>
    <br></br>
        </form>}
         </div>
    
    );
 }

 export default Register;