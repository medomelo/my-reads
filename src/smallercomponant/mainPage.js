import React from "react";
import AddButton from "./moreCompn/addButton";
import BookOnshelf from "./moreCompn/bookshelf";
import * as BooksAPI from '../BooksAPI'



class MainPage extends React.Component{
  state = {
    books: []
  }

  bookShelves = [
    { filterName: "currentlyReading", title: "Currently Reading" },
    { filterName: "wantToRead", title: "Want to Read" },
    { filterName: "read", title: "Read" }
  ]

  componentDidMount() {
    this.refreshBooks()
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>  this.refreshBooks())
  }

  refreshBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

    render(){
    return  (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { this.bookShelves.map( (shelf) => (
            <BookOnshelf
              key={shelf.filterName}
              filterName={shelf.filterName}
              title={shelf.title}
              books={this.state.books}
              moveBook={this.moveBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <AddButton/>
      </div>
    </div>
           
    )}

}
export default MainPage 