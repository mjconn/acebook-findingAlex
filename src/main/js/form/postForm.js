import React from 'react';
import axios from 'axios';
import GetDate from '../utils/getDate';

const client = require('../client');


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      username: '',
      content: '',
      // id: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
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

  handleNameChange(event) {
    this.setState({username: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // var headers = {
    //   'Content-Type': 'application/json'
    // }
    // const postData = {
    //     "userName" : this.state.username,
    //     "id" : this.state.id,
    //     "content" : this.state.content,
    //     "date" : `posted ${GetDate.getDate()}`,
    //     "likes" : 0
    // };
    //
    // axios.post('/api/posts',{postData}, {headers})
    //     .then(res => console.log(res.data))
    // console.log(postData);

    // console.log(this.state.content);
    // console.log(this.state.username);
    // const newPost = {
    //   userName: this.state.username,
    //   // id: this.state.id,
    //   content: this.state.content,
    //   date: `posted ${GetDate.getDate()}`,
    //   likes: 0
    //   };
    //
    // client({ method: 'POST', path: '/api/posts', entity: newPost }).then(response => {
    //   location.reload();
    //   });


      const request = axios({
        method: 'post',
        url: '/api/posts/add',
        headers: { 'Content-Type': 'application/json' },
        data: {
          content: this.state.content,
          date: `posted ${GetDate.getDate()}`,
          likes: 0,
          userName: this.state.username,
          }
      });
      request;
      console.log(request);
      request;
      setTimeout(location.reload.bind(location), 3000);
    alert('Your post was submitted, ' + this.state.username);
  };


  render() {
    return (
        <div class="panel profile-info text-center">
          <form onSubmit={this.handleSubmit}>
              <textarea name="content" class="form-control input-lg p-text-area" rows="2" placeholder="What's going on?" onChange={this.handleContentChange}></textarea>
              <input type = 'text' name="username" class="form-control p-text-area" placeholder="Username" onChange={this.handleNameChange} />
              <input type="submit" class="btn btn-info pull-left" value="Post" />
           </form>
        </div>
        );
      }
}

export default PostForm;
