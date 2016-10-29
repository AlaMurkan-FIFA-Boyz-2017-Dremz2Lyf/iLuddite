const React = require('react');

const UserBox = (props) => {
  return (
    <div className="col-sm-5 profileColumn">
      <div className="row fabio">
        <div className="row">
          <div className="col-xs-5"></div>
          <div className="col-xs-7 profilePhotoColumn">
            <img src={props.user.image} className="img-responsive profilePhoto"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 userInfoColumnn">
          <div className="col-xs-1"></div>
            <div className="row">
              <div className="col-xs-6 userName">
                {props.user.displayName}
              </div>
              <div className="col-xs-4 userBooksRead">
                <br></br>
                <div className="bookCountTitle"> Book Count</div>
                {props.user.stats}
              </div>
              <div className="col-xs-2"></div>
            </div>
            <div className="row">
              <div className="col-xs-5"></div>
              <div className="col-xs-7 userLocation">
                 {props.user.location}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 incrementBookCount">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserBox.defaultProps = {
  user: {
    image: '../public/assets/default-img.jpg',
    displayName: 'Ducky McDuckerson',
    location: 'Mars w/ Elon Musk',
    stats: 'ate 43 martians'
  }
};

module.exports = UserBox;
