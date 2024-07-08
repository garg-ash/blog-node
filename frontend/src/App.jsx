import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const obj = { name, email, message }

    fetch("http://localhost:8080/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(result => {
        if (result === "Data Submitted") {
          setResponse("Data Submitted Successfully")
        } else {
          setResponse("Submission Failed")
        }
        setName("")
        setEmail("")
        setMessage("")
      })
      .catch(error => {
        console.error("Error submitting data:", error)
        setResponse("An error occurred while submitting the data")
      })
  }

  return (
    <>
       <div className='bg-indigo-300 w-11/12 mx-auto h-auto py-4 my-4 rounded'>
       {response && <p>{response}</p>}
      <h2>Add Your Message</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className='w-11/12 h-10 mx-6 rounded my-2 px-2 text-black'
        /><br />
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className='w-11/12 h-10 mx-6 rounded my-2 px-2 text-black'
        /><br />
        <textarea 
          placeholder="Enter your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className='w-11/12 h-28 mx-6 rounded my-2 px-2 text-black'
        ></textarea><br />
        <button type="submit" className='bg-green-50 px-2 py-1 rounded text-black'>Submit</button>
      </form>
       </div>
    </>
  )
}

export default App
