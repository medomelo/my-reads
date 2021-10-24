import React from 'react'

class Changer extends React.Component{
    render(){
        const book = this.props.book;
    
        return(
            
            <select value={book.shelf || "move"} onChange={(event) => this.props.moveBook(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
        )
    }

}

export default Changer 