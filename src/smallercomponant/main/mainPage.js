import React from "react";
import AddButton from "../addButton";
import BookOnshelf from "../moreCompn/bookshelf";


class MainPage extends React.Component{
       
    render(){
    return  (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <BookOnshelf/>
               <BookOnshelf/>
               <BookOnshelf/>
               <AddButton/>
              </div>
            </div>
           
          </div>
    )}

}
export default MainPage 