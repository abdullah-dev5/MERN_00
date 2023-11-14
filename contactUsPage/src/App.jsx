import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'
function App() {
// or via CommonJS

  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setcompany("");
    setemail('');
    setfullName('');
    setmessage('');
    Swal.fire("Submitted"); 
  }


  return (
    <React.Fragment>
      <div className='container'>

        <form className="left" onSubmit={handleSubmit}>
          <h1>
            Drop us a line
          </h1>
          <input type="text" placeholder='Full Name' required value={fullName} onChange={(e) => setfullName(e.target.value)} />
          <input type="email" placeholder='Email Address' required value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="text" placeholder='Company ' required value={company} onChange={(e) => setcompany(e.target.value)} />
          <input type="text" placeholder='Message' required value={message} onChange={(e) => setmessage(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
        <div className="right">
          <img src="./marvel.jpg" alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
