import { useState } from 'react'
import './App.css'
import Sidebar from './componens/Sidebar'
import Book from './componens/books'
function App() {
  const [books, setBooks] = useState([])

  return (
    <div className='app'>
     <Sidebar setBooks={setBooks}/>
    < Book books={books}/>
    </div>
  )
}

export default App
