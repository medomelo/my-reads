import React from "react";
import { DebounceInput } from 'react-debounce-input';
import BackButton from "./backButton";
 class SearchInput extends React.Component{
     render(){
    return (
        <div className="search-books-bar">
            <BackButton/>
        <div className="search-books-input-wrapper">
        <DebounceInput 
          type="text"
          placeholder="NEED BOOk"
          minLength={1} 
          debounceTimeout={300} 
          onChange={(event) => this.props.onSearch(event.target.value)}
        />
      </div>
      </div>
    )
     }
  }
 
  export default SearchInput