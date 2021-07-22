import React from 'react';
import Post from './post';
import ExtractID from '../utils/ExtractID';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
  }

	render() {
		return (
      <div class="row">
      <article className='posts-main'>
        <h1 className='posts-title'>
        </h1>
  			<div className='posts-items'>
  				{this.getPostsSortedByID()}
  			</div>
      </article>
    </div>
		)
	}

  getPosts() {
  return this.props.posts.map(post =>
    <Post key={post.id} post={post} id={post.id}/>
  );
}


  getPostsSortedByID() {
    let posts = this.getPosts();
    let sorted = posts.sort((a, b) => a.props.id - b.props.id);
    return sorted.reverse();
  }
}

export default Posts;
