const React = require('react');
const AuthorDetails = require('./AuthorDetails');

const AuthorBio = (props) => {
  var author = props.authorArr.map( authors => {
    // console.log(authors)
    if(authors.name === props.currentAuthor.author) {
      // console.log(props.currentAuthor.author)
    return authorDetails = authors
    }
  })

  return ( 
    
        <div>
          {author}
        </div>
            
  )



  //Response.data is an object. Need to render the author info and also add his image to a portion of the modal or page or whatever
  //I am rendering.  Pass down those props to this component and create the modal in here. Then oon hover we will want to mount this component
  //Or on click?  Might want the searchAuthor to run when the component mounts so that we will already have made the api call
  //But then we would need to store it to the database once that call has been made (which is already taken care of in that route)
  //Then on hover get the props of the current author down to.

}

module.exports = AuthorBio;