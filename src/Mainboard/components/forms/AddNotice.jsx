/*import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";
import { InfinitySpin } from "react-loader-spinner";

function AddNotice() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

   
const handleAddnotice=async(e)=>{
    e.preventDefault();
  setLoading(true);
  try{
    const loginToken=localStorage.getItem("loginToken");

    if(!loginToken){
      console.log("User Not Authenticated");
    }

    const formData=new FormData();
    formData.append("title",title);
    formData.append("message",message);

    const response= await fetch(`${API_URL}/api/notice`,{
  method:"POST",
  headers: {
    "token":`${loginToken}`
  },
  body:formData
    });
    const data=await response.json();

    if(response.ok){
      console.log(data);
      alert("Notice Added Sucessfully");
    }
    setTitle("");
    setMessage("");

 
  }catch(err){
    alert("Failed To add Notice")
}finally{
  setLoading(false);
}
}

  return (
    <div className="firmSection">
      {loading ? (
        <div className="loaderSection">
          <InfinitySpin visible={true} width="200" color="#4fa94d" />
          <p>Your Notice is Being Added...</p>
        </div>
      ) : (
        <form className="tableForm" onSubmit={ handleAddnotice}>
          <h3>Add Notice</h3>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
          />

          <div className="btnSubmit">
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddNotice;
*/

import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";
import { InfinitySpin } from "react-loader-spinner";

function AddNotice() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddNotice = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginToken = localStorage.getItem("loginToken");

      if (!loginToken) {
        alert("Please login first!");
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_URL}/api/notice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: loginToken,
        },
        body: JSON.stringify({ title, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Notice Added Successfully!");
        setTitle("");
        setMessage("");
      } else {
        alert(data.error || "Failed to add notice");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="firmSection">
      {loading ? (
        <div className="loaderSection">
          <InfinitySpin visible={true} width="200" color="#4fa94d" />
          <p>Your notice is being added...</p>
        </div>
      ) : (
        <form className="tableForm" onSubmit={handleAddNotice}>
          <h3>Add Notice</h3>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
          />
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
          />
          <br></br>
          <div className="btnSubmit">
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </div>
          <br></br>
        </form>
      )}
    </div>
  );
}

export default AddNotice;

