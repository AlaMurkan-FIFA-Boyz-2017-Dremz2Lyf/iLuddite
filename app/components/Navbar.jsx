const React = require('react');
import { Link } from 'react-router';
const SearchBox = require('./SearchBox');

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="row">
        <div className="col-sm-2">
          <a href="/">
            <h2>iLuddite</h2>
          </a>
        </div>
        <div className="col-sm-8">
          <SearchBox
            changeSearchText={props.changeSearchText}
            searchText={props.searchText}
            searchResults={props.searchResults}
            handleSearchSubmit={props.handleSearchSubmit}
            addBookToQueue={props.addBookToQueue}
            makeCurrentBook={props.makeCurrentBook}
            loggedInUser={props.loggedInUser}
          />
        </div>
        <div className="col-sm-2">
          <Link to={`/users/${props.loggedInUser.fbid}/edit`}>
            <span className="glyphicon glyphicon-cog"></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

module.exports = Navbar;
