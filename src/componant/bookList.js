import {React,Component} from 'react';
import AddBook from './addbutton';
import Shelf from './shelf';
import * as BooksAPI from "../BooksAPI";
import Book from './book';

//this is the main

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
    books : []
  }
}
  componentDidMount() {
    BooksAPI.getAll().then((resp) => {
      this.setState({ books: resp })
      console.log(resp)

      
    })
  } 
  render() {
                /* <Shelf allBooks={this.state.books}/>*/

      return (
  
        <div className="list-books">
  
            <div className="list-books-title">
             <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>

            <Shelf name='Currently Reading' books={this.state.books.filter(fir=> fir.shelf==="currentlyReading")} />
            <Shelf name='Want to Read' books={this.state.books.filter(sec=> sec.shelf==="wantToRead")} />
            <Shelf name='Read' books={this.state.books.filter(thr=> thr.shelf==="read")} />

            </div>
            <AddBook/>
        </div>
        </div>
  
  
  
      )
    }
  }
  
export default BookList