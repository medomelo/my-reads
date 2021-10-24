import React from "react";
import BackButton from "./moreCompn/backButton";
import SearchInput from "./moreCompn/srchBar";
import Result from "./moreCompn/srchResult";
import * as BooksAPI from '../BooksAPI'

class SearchPage extends React.Component {
  state = {
    results: [],
    boo: ''
  }


   bookIdState = () => {
    return this.props.books.reduce((obj, book) => {
      obj[book.id] = book.shelf 
      return obj
    }, {})
  }

  updateResults = (boo) => {
    if (boo.trim() === '') {
      this.setState({results: [], boo: ''})
      return
    }

    BooksAPI.search(boo)
      .then((results) => {
        this.setState({
          results: results,
          boo: boo
        })
      })
  }

  filterResults = (results) => {
    const idState = this.bookIdState()
    return ( results.map((result) => {
      result.shelf = idState[result.id] || 'none'
      return result
    }))
  }

  setResultShelf = (book, shelf) => {
    return this.state.results.map((result) => {
      if (result.id === book.id)
        result.shelf = shelf
      return result
    })
  }

  moveResult = (book, shelf) => {
    this.props.moveBook(book, shelf)
    this.setState((curState) => ({
      results: this.setResultShelf(book, shelf)
    }))
  }

    render() {
       
        return (
        <div className="search-books">
              <BackButton /> 
             <SearchInput onSearch={this.updateResults} />
              
              <Result
              results={this.state.results}
              boo={this.state.boo}
              moveBook={this.moveResult}
               />
              
            </div>
  
      )
    }
  }

  
  export default SearchPage 