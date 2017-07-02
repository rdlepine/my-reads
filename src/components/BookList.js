import React, {Component} from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

class BookList extends Component {

    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf filter="" onUpdateShelf={this.props.onUpdateShelf} title="Currently Reading" books={this.props.books.filter( (book) => book.shelf === 'currentlyReading')}/>
                            <BookShelf filter="" onUpdateShelf={this.props.onUpdateShelf} title="Want to Read" books={this.props.books.filter( (book) => book.shelf === 'wantToRead')}/>
                            <BookShelf filter="" onUpdateShelf={this.props.onUpdateShelf} title="Read" books={this.props.books.filter( (book) => book.shelf === 'read')}/>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link  to="/search" onClick={this.props.clearSearch} >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList
