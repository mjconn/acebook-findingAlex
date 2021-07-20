import React from 'react';

const Post = (props) => {
	return (
		
	<div class="container">
		<div class="panel">
          <div class="panel-body">
              <div class="user-details">
                  <h3><a href="#" class="#">{props.post.userName}</a></h3>
                  <p>{props.post.date}</p>
              </div>
              <div class="clearfix"></div>
              <p class="user-status">{props.post.content}</p>
			
              <div class="status-container border-a">
                  <div class="actions">
					  <button onClick={ () => this.editPost(props.id)} className="btn btn-success">Edit</button> 
					  <button onClick={ () => this.deletePost(props.id)} className="btn btn-danger">Delete</button> 
                      <a href="#" title="Like">Like</a>
				  </div>
			  </div>
			   <div class="actions">
					<p>
					post id: {props.id}
					</p>
					<p>
					<a href={props.post._links.self.href}>Linky</a>
					</p>	
				</div>
		  </div>
		</div>
	</div>
	)
}

export default Post;
