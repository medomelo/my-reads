import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './smallercomponant/mainPage'
import SearchPage from './smallercomponant/searchPage'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
                 <Route exact path="/" component={MainPage} />
                 <Route path="/search" component={SearchPage} />
                 
      </div>
    )
  }
}

export default BooksApp
