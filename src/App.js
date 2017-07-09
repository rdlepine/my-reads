import React, { Component } from 'react';
import './css/App.css';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
//import escapeRegExp from 'escape-string-regexp';
import BookList from "./components/BookList";
import BookSearch from './components/BookSearch';

class App extends Component {

  state = {
    books: [],
    searchedBooks: []
  }

  refreshBookList = () => {
    BooksAPI.getAll().then( (books) => {
        this.setState({books})
    })
  };

  componentDidMount() {
     this.refreshBookList();
  }
  
  searchBooks = (event) => {
    
    let query = event.target.value;
    if(query) {
      BooksAPI.search(query,20).then( (searchedBooks) => {
            this.setState({searchedBooks});
      })
    } else {
      this.setState({searchedBooks: []});
    }
  }; 

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( (books) => {
      // this.refreshBookList();  
     this.setState( state => ( {
       books: state.books.filter( b => b.id!== book.id).concat([book])
     }))
    })
  };

  clearSearch = () => {
    this.setState({searchedBooks: []});
  }

  render() {
    return (
      <div className="App">
          <Route exact path="/"  render={ () => (
                    <BookList books={this.state.books} onUpdateShelf={this.updateShelf} clearSearch={this.clearSearch} />
                  )}
          />

          <Route exact path="/search"  render={ () => (         
                    <BookSearch books={this.state.searchedBooks} searchFunc={this.searchBooks} onUpdateShelf={this.updateShelf}  />
                  )}
          />
      </div>
    );
  }
}

export default App;
