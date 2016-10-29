const React = require('react');
const axios = require('../axios');

class AuthorDeets extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {

  const { loggedInUser } = this.props;

  var currentBook = this.props.loggedInUser.queue[0].author;
  var authorArr = this.props.loggedInUser.authorInfo

  var currentAuthor;
  authorArr.forEach( author => {
    if (author.name === currentBook) {
      currentAuthor = author
    }
  })

    return (
          
    <div className="bookRow row">
        <div className="bookCol col-sm-4">
          <img className="authorImg" src={currentAuthor.photoPath}/>
        </div>
        <div className="col-sm-1"></div>
        <div className="bookCol2 col-sm-6">
          <h2>{currentAuthor.name}</h2>
          <h4>About the Author</h4>
          <p className="book-summary author">{currentAuthor.description}</p>
          <br/>
        </div>
        <div className="col-sm-1"></div>
      </div>
    );

  }
}

module.exports = AuthorDeets;