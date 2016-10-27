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
        finished: []

      },
      authorName: '', //Not using authorName currently. I was thinking I would need it to run my searchForAuthorFunction but I am getting author name from the queue instead
      authorSearchResults: {},
      hover: true
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


//Originally set this function to run onClick of the Author name on user profile(or onMouseOver in the future)
//But this means it will only make that get request if they mouse over the author which means it will probably lag
//pretty hard and be a bad user experience. Moved this get request up to componentDidMount so it will run once the page loads
//Only issue is if they search a new book it doesn't seem to run the function again and so it would not work again until
//They reloaded their profile page. Also, I need this author info in CurrentBook. Not sure if this is the best place to store
//The state of the authorInfo. Seems like it would be best to have these prooperties in App so I could pass them down
//to whatever component I wished. 
  searchForAuthor () {
    // console.log('CLICK!!')
    // console.log("USER: ", this.state.user)
    // console.log("AUTHOR: ",this.state.authorSearchResults)
    // axios.get(`/authors/search/${this.state.user.queue[0].author}`)
    //   .then(response => {
    //     console.log("AUTHOR RESPONSE", response)
    //     this.setState({
    //       authorSearchResults: response.data,
    //     })
    //   console.log("CURRENT STATE OF AUTHOR:", this.state.authorSearchResults)
    //   })
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
        <CurrentBook currentBook={this.state.user.queue[0]} searchAuthor={this.searchForAuthor.bind(this)}/>
        <ProfileQueue bookQueue={this.state.user.queue.slice(1)}/>
        <DisplayFriends friendQueue={this.state.user.friends}/>
      </div>
    );

    } else {
    return (
      <div className="container">
        <UserBox 
          increaseBookCount={this.props.increaseBookCount}
          user={this.state.user} />
        <CurrentBook currentBook={this.state.user.queue[0]}/>
        <ProfileQueue bookQueue={this.state.user.queue.slice(1)} indices={this.props.queueIndices} increaseQueueIndices={this.props.increaseQueueIndices} decreaseQueueIndices={this.props.decreaseQueueIndices}/>
        <ProfileFinished finishedQueue={this.state.user.finished} indices={this.props.finishedIndices} increaseFinishedIndices={this.props.increaseFinishedIndices} decreaseFinishedIndices={this.props.decreaseFinishedIndices}/>
        <DisplayFriends friendQueue={this.state.user.friends}/>
        <AuthorBio authorSearchResults={this.state.authorSearchResults} /> 
      </div>
    );
  }
}

module.exports = UserProfile;
