
import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/query'
import BookDetails from './BookDetails';


class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        console.log(this.props.data)
    
        var data = this.props.data;
        if(!data.books){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</li>                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                    { this.displayBooks() }          
                              </ul>

                              <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
