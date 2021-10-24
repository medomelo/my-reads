import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from "./componant/bookList.js"
import BookSearch from "./componant/BookSearch.js"
import Book from './componant/book'
import Shelf from './componant/shelf'

class BooksApp extends React.Component {
 
  
  


  render() 
  {

    return (
           <div className="app">
        <Route exact path="/" component={BookList} />
        <Route path="/search" component={BookSearch} />
        
      </div>
    )
  }
}





export default BooksApp