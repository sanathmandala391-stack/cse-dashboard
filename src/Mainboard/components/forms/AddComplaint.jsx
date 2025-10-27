 import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";
import { InfinitySpin } from "react-loader-spinner";

 function AddComplaint(){
    
    const [name,setName]=useState("");
    const [pinNumber,setPinNumber]=useState("");
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);

    const handleComplaint=async(e)=>{
        e.preventDefault();
        setLoading(true);

        try{
  const loginToken=localStorage.getItem('loginToken');
  if(!loginToken){
    alert("Please LogIn to continue");
    setLoading(false);
  }

  const response=await fetch(`${API_URL}/api/complaint`,{
    method:"POST",
    headers:{
                  "Content-Type": "application/json",
          token: loginToken,
    },
    body:JSON.stringify({name,pinNumber,message})
  })

  const data=await response.json();

  if(response.ok){
    alert("Complaint Added Sucessfully");
    setName("");
    setPinNumber("");
    setMessage("");
  }
 }
        catch(err){
  console.log("Failed To Add Complaint");
        }
        finally{
            setLoading(false);
        }
    }

    return(

        
        <div className="firmSection">

            {loading&& <div className="loaderSection">
               <InfinitySpin visible={true} width="200" color="#4fa94d" />
                         <p>Your Complaint is being added...</p> 
                         </div>
                
                 }

       {!loading && <form className="tableForm" onSubmit={handleComplaint}>
           <h3>Add Complaint</h3>
           <label>Name</label>
           <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the Name"></input>
           <label>Pin-Number</label>
           <input type="text" name="pinNumber" value={pinNumber} onChange={(e)=>setPinNumber(e.target.value)} placeholder="Enter the Pin-Number"></input>
           <label>Message</label>
           <input type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter the Message"></input>

           <div className="btnSubmit">
<button type="submit">Submit</button>

           </div>
           <br></br>
        </form>}

        </div>
    
    )
 }

 export default AddComplaint;