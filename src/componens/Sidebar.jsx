import { useState } from "react"

export default function Sidebar({setBooks}){
    const [inp,setInp]=useState({})  
    console.log();
    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks((prev)=>[...prev,inp])
    }
    
    
    
      
    return <div className="sidebar">
        <form onSubmit={handleSubmit}>
        <h1>The library</h1>
        <label>book name</label>
        <input type="text" onChange={(ev)=>setInp({...inp,name:ev.target.value})} placeholder="enter book name"></input>
        <label>img URL</label>
        <input type="text"  onChange={(ev)=>setInp({...inp,imgurl:ev.target.value})} placeholder="enter img URL"></input>
        <label>book author</label>
        <input type="text"  onChange={(ev)=>setInp({...inp,author:ev.target.value})} placeholder="enter author name"></input>
        <button>add book</button>
        </form>
        </div>
}