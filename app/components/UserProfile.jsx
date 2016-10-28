const React = require('react');
const ProfileQueue = require('./ProfileQueue');
const ProfileFinished = require('./ProfileFinished');
const UserBox = require('./UserBox');
const CurrentBook = require('./CurrentBook');
const DisplayFriends = require('./DisplayFriends');
const Carousel = require('./Carousel')
const AuthorBio = require('./AuthorBio'); // require AuthorBio so I can pass the current book in the queue down as props
const axios = require('../axios');

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        queue: [],
        finished: [],
        authorInfo: []
      }
      // hover: true
    }
  }

  componentDidMount () {
    // fetch the user to display
    if (!this.state.user.fbid) {
      axios.get(`/users/${this.props.params.userid}`)
        .then((response => {
          this.setState({
            user: response.data
          });
          console.log("USER RESPONSE", response.data)
          console.log('STATE of USER: ', this.state.user)
        }))
        // .then(response => {
        //   return axios.get(`/authors/search/${this.state.user.queue[0].author}`)
        //   .then(response => {
        //     // console.log("AUTHOR RESPONSE", response)
        //     this.setState({
        //       authorSearchResults: response.data,
        //     })
        //   // console.log("CURRENT STATE OF AUTHOR:", this.state.authorSearchResults)
        //   })
        // }) 
    }
  }

  // This lifecycle method will get called anytime the user is already on
  // this component and clicks one of their friends which shows this same
  // component with the friends data. When this happens this component needs
  // to do a get request to get the new users information, and change state.
  componentWillReceiveProps(nextProps) {
    axios.get(`/users/${nextProps.params.userid}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      // .then(response => {
      //     return axios.get(`/authors/search/${this.state.user.queue[0].author}`)
      //     .then(response => {
      //       console.log("Author Reload", response)
      //       this.setState({
      //         authorSearchResults: response.data,
      //       })
      //     console.log("StateofAuthor Reload:", this.state.authorSearchResults)
      //     })
      // }) 
  }


  handleMouseOver () {
    this.setState ({
      hover: false
    })
  }

//Pass down the current book to the AuthorBio component. From there I should be able to grab the current Author then plug this into
//A function that makes an API call to goodreads. From there we should receive back author bio and image and I can 
//render that on a click of the author name.

  render () {

    // if(this.state.hover) {
    return (
      <div className="container">
        <UserBox
          increaseBookCount={this.props.increaseBookCount}
          user={this.state.user} 
           />
        <CurrentBook currentBook={this.state.user.queue[0]} 
          // authorInfo={this.state.authorSearchResults} 
          />
        <ProfileQueue bookQueue={this.state.user.queue.slice(1)}/>
        <DisplayFriends friendQueue={this.state.user.friends}/>
      </div>
    );

    // } else {
    // return (
    //   <div className="container">
    //     <UserBox 
    //       increaseBookCount={this.props.increaseBookCount}
    //       user={this.state.user} />
    //     <CurrentBook currentBook={this.state.user.queue[0]}/>
    //     <ProfileQueue bookQueue={this.state.user.queue.slice(1)} />
    //     <ProfileFinished finishedQueue={this.state.user.finished} />
    //     <DisplayFriends friendQueue={this.state.user.friends}/>
    //     <AuthorBio authorSearchResults={this.state.authorSearchResults} /> 
    //   </div>
    // );
  }
}

module.exports = UserProfile;
