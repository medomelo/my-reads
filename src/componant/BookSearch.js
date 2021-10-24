import {React,Component, useState} from 'react'
import BackHome from './backButton';
import * as BooksAPI from "../BooksAPI"



class BookSearch extends Component {
    state = {
        
      }
      
    render() {
       
        return (
        <div className="search-books">
              <div className="search-books-bar">
              <BackHome /> 
            <SearchInput/>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
              
                </ol>
              </div>
            </div>
  
      )
    }
  }

  const SearchInput = () =>{
     
      return (
            <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
         <input type='text' placeholder='what book'/>

            </div>
      );
    }
   
  
  export default BookSearch