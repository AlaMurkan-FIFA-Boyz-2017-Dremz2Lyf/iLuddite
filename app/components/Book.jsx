const React = require('react');
const Link = require('react-router').Link;

const Book = (props) => {
  return (
    <div className="bookContainer">
      <div className="bookRow">
        <div className="bookCol col-md-6">
          <img className="bookImg" src={props.book.image}/> {/* using this image for testing*/}
        </div>

        <div className="bookCol2 col-md-6">
          <h2>{props.book.title}</h2>
          <h3>{props.book.author}</h3>
          <br/>
          <h4>About the Author</h4>
          <p>{props.book.authorDescription}</p>
          <h4>About the Book</h4>
          <p>{props.book.description}</p>
          <br/>
          <Link className="btn btn-default btn-info" to="/books/" + ${this.props.route.data._id} role="button">Add to Queue</Link>
          <Link className="btn btn-default btn-info" to="/books" + ${this.props.route.data._id} role="button">Add to Favorites</Link>
        </div>
      </div>

    </div>
  );
};

module.exports = Book;



        {/*}  <div className="bookCol2 col-md-6">
              <h2>The Amazing Adventures of Kavalier &amp; Clay</h2>
              <h3>Michael Chabon</h3>
              <br/>
              <h4>About the Author</h4>
              <p><a href="https://en.wikipedia.org/wiki/Michael_Chabon">Michael Chabon</a> is a totally rad dude who writes books that will break your heart.</p>
              <h4>About the Book</h4>
              <p>Kav &amp; Clay is probably the best book I've read in the last five years.  Blah blah blah blah Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
              <br/>
              <a className="btn btn-default btn-info" href="#" role="button">Add to Queue</a>
              <a className="btn btn-default btn-info" href="#" role="button">Add to Favorites</a>
          </div> */ }

