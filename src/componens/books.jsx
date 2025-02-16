export default function Book({books}){    
    return <div className="books"> {books.map((book)=><div className="book">
        <img src={book.imgurl} alt="" />
        <h4>{book.name}</h4>
        <p>{book.author}</p>
    </div>)}
    </div>
}