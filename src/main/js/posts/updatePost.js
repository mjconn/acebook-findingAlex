import React from 'react'
import ExtractId from '../utils/extractId'

class UpdatePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			content: '',
		};
    	this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		// const value = target.value;

		this.setState({
		[name]: value
		});
	}

	handleContentChange(event) {
    this.setState({content: event.target.value});
	}
	  
	handleSubmit(event) {
		let href = this.props.postID._links.self.href;
		event.preventDefault();

		axios({
			method: 'put',
			url: ('/api/posts' + ExtractId(href)),
			headers: { 'Content-Type': 'application/json' },
			data: {
				content: this.state.content,
			}
    	});
    	location.reload();
	}

	render() {
		return (
			<form class="modal-body" onSubmit={this.handleSubmit}>
				<label>
				Message:
				<textarea name="content" placeholder="enter post" onChange={this.handleContentChange} />
				</label>
				<input type="submit" value="Post" />
			</form>
		);
  	}
}

export default UpdatePost;