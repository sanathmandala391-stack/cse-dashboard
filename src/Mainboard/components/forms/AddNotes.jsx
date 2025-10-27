 import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";

 function AddNotes(){
    const [subject,setSubject]=useState("");
    const [file,setFile]=useState(null);
    const [semester,setSemester]=useState("");
    const [loading,setLoading]=useState(false);
  
    const handleFileUpload=(e)=>{
        const file=e.target.files[0];
        setFile(file)
    }
    const handleNotes=async(e)=>{
        e.preventDefault();
      setLoading(true);

      try{
   const loginToken=localStorage.getItem('loginToken');
   if(!loginToken){
    console.log("User Not Authenticated");
   }
   const formData=new FormData();
   formData.append("subject",subject);
   formData.append("file",file);
   formData.append("semester",semester);

   const response=await fetch(`${API_URL}/api/notes`,{
    method:"POST",
    headers:{
        'token':`${loginToken}`
    },
    body: formData
   });
   const data= await response.json();
   if(response.ok){
    alert("Notes Added Sucessfully");
    console.log(data);
    setSubject("");
       setFile(null);
    setSemester("");
     alert("Notes Added Sucessfully");
   }
      }
      catch(err){
   console.log("Failed To Add Notes")
      }
      finally{
        setLoading(false);
      }
    
    }
    return(

        
   <div className="firmSection">

    {loading && <div className="loaderSection">
     <InfinitySpin 
                 visible={true}
                 width="200"
                  color="#4fa94d"
                ariaLabel="infinity-spin-loading"  
                  /> 
                  <p>Your Notes Was Adding..</p>
                  </div> 
}

{!loading &&<form className="tableForm" onSubmit={handleNotes}>
<h3>Add Notes</h3>
<label>Subject</label>
<input type="text" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Enter the Subject"></input>
<label>File</label>
<input type="file" onChange={handleFileUpload}></input>
<label>Semester</label>
<input type="text" name="semester" value={semester} onChange={(e)=>setSemester(e.target.value)} placeholder="Enter the Semester"></input>
<br></br>
<div className="btnSubmit">
    <button type="submit">Submit</button>
</div>
<br></br>
</form>}
   </div>

        
    )
 }

 export default AddNotes;