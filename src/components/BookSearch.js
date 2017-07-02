import React, {Component} from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookSearch extends Component {

  render() {

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={this.props.searchFunc} placeholder="Search by title or author"/>
            </div>
          </div>
          <BookShelf title="" filter="" books={this.props.books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}

export default BookSearch