import {React,Component }from "react"
import Book from "./book"
import BookList from "./bookList";
class Shelf extends Component {
  componentDidMount (){
    console.log(this)

  }
    render() 
    {
  
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book/>

              </ol>
            </div>
          </div>
          
       
      )
    }
  }
//                  this.props.Books.map((book,key)=><Book book={book} key={key}/>)

export default Shelf

