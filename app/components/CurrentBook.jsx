const React = require('react');
const Link = require('react-router').Link;

const CurrentBook = (props) => {
  return (
    <div className="col-sm-6 currentColumn">
      <div className="row">
        <div className="col-xs-12 currentHeader">
            Currently Reading
        </div>
      </div>
        <div className="row">
            <div className="col-xs-4 currentPhotoColumn">
                <Link to="/books/" + ${this.props.route.data._id}><img src={props.currentBook.image}className="img-responsive bookPhoto"/></Link>
            </div>
            <div className="col-xs-8 currentInfoColumn">
                <div className="row">
                  <div className="col-xs-12 currentTitle">
                    {props.currentBook.title}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 currentAuthor">
                    {props.currentBook.author}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 currentBio">
                    {props.currentBook.summary}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

module.exports = CurrentBook;
