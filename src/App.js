import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI.js"
import BookList from "./componant/bookList.js"
import BookSearch from "./componant/BookSearch.js"

class BooksApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    books : [],
    isLoaded: false
  }
}
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books:books,
        isLoaded: true
         })
      
    })
  }


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