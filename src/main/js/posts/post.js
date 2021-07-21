 import React, { useState } from 'react'; 
 import axios from 'axios';

 
const deletePost = (id) => {
		axios.delete(`/api/posts/${id}`)
			/* .then(() => setStatus('Delete successful'));*/ 
	}

const handleDeleteClick = (id) => {
	event.preventDefault();
	deletePost(id);
	alert('Post deleted, please wait for page reload');
	setTimeout(location.reload.bind(location), 3000);
}

const Post = (props) => {
	const [count, setCount] = useState(0); 
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

					<a href="#" title="Edit">Edit</a>
					
					<button class='btn btn-secondary' onClick={() => setCount(count + 1)}> &#128077;({count}) </button>
					
					<button class='btn btn-danger' onClick={() => { handleDeleteClick(props.id) }}> Delete </button>		
	
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