import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0
    };
    // Bind the class methods to the component instance
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  // Class method to handle increasing likes
  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  }

  // Class method to handle increasing dislikes
  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  }

  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className='content-rating'>
          <p>Text</p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
            <p>Ratings ({this.state.totalRatings})</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
