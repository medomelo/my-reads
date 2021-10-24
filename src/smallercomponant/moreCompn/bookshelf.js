import React from 'react'
import TheBook from './book'

class BookOnshelf extends React.Component{
  filteredBooks = (shelf, books) => books.filter((book) => book.shelf === shelf)
  
  
  render(){
    const { title, filterName, books, moveBook } = this.props

        return(
            
             <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { this.filteredBooks(filterName, books).map((book) => ( 
                    <li key={book.id}>
                   <TheBook book={book} moveBook={moveBook} />
                      </li>
                      ))}

                    </ol>
                  </div>
                </div>
            
    
        )
    }
}

export default BookOnshelf