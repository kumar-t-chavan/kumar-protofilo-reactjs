import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState(""); // state for username
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [message,setmeeage] = useState("");

  const e = (event)=>{
    setemail(event.target.value);
  }

  const ale = () => {
    // optional popup alert
    if(data===""){
      alert("Fill the Username...❌")
    }
      else if(email===""){
      alert("Fill the Email...❌");
    }
    else if(password===""){
      alert("Fill the Password...❌");
    }

    else if(message===""){
      alert("Fill the Password...❌");
    }
    else{  
    alert(`Message Succesfully... ${data} 📩🚀✅`)
    
    setData("");
    setemail("");
    setpassword("");
    setmeeage("");
  
    }
   
  };

 
  const change = (event) => {
    setData(event.target.value); // capture username input
  };

  const p = (event)=>{
    setpassword(event.target.value);

  }
  const m = (event)=>{
    setmeeage(event.target.value)
  }

  return (
    <div>
      <div className='contact-container'>
        <div className='form'>
          <div>
            <label htmlFor="username">Username :</label>
            <input
              type="text"  // corrected type
              placeholder='Enter Your Name...'
              className='text'
              onChange={change}
              value={data}
            />
          </div>

          <div>
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder='Enter Your Email...' onChange={e} value={email} />
          </div>

          <div>
            <label htmlFor="password">Password : </label>  {/* corrected htmlFor */}
            <input type="password" placeholder='Enter Your Password...' onChange={p} value={password} />
          </div>

          <div>
            <label htmlFor="message">Message : </label>
            <textarea name="message" id="message" rows={10} cols={50} onChange={m} value={message}></textarea>
          </div>

          <div>
            <button type='button' className='form-btn' onClick={ale}>SUBMIT</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
