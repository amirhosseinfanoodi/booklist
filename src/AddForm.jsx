
// import Book from "./Book";
import React, { Component } from "react";

import './AddForm.css'




export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [{
        title: "dfd",
        author: "dsvf",
        year: "sdv"
      }],

      title: "",
      author: "",
      year: "",
    };
    this.titlehandel=this.titlehandel.bind(this);
    this.authorhandel=this.authorhandel.bind(this)
    this.yearhandel=this.yearhandel.bind(this)
    this.subhandler=this.subhandler.bind(this)

    // this.titlehandel=this.titlehandel.bind(this)

  }

  titlehandel (event){
    this.setState({title :event.target.value})
  }

  authorhandel (event){
    this.setState({author: event.target.value})
  }
  yearhandel(event ){
    this.setState({year: event.target.value})
  }
  subhandler(event){
    event.preventDefault();
    const { title, author, year } = this.state;
    if(title && author && year ){
      const newBook = { title, author, year };
      this.setState((prevState) => ({
        books: [...prevState.books, newBook],
        title: "",
        author: "",
        year: ""
      }));
    }
  }

  render() {
    return (
      <>
        <form id="book-form" autocomplete="off">
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.titlehandel}/>
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input type="text" id="author" className="form-control" value={this.state.author} onChange={this.authorhandel}/>
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input type="text" id="year" className="form-control"value={this.state.year} onChange={this.yearhandel} />
          </div>
          <input
            type="submit"
            value="Add Book"
            onClick={this.subhandler}
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
            <tbody>
            {this.state.books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
              </tr>
            ))}
          </tbody>
          </thead>
          <tbody id="book-list"></tbody>
        </table>
      </>
    );
  }
}
