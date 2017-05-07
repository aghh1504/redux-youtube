import React, {Component} from 'react';
import axios from 'axios'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      users: []
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onAdd = e => {
    e.preventDefault()
      const newUser = {
        username: this.state.username,
        password: this.state.password
      };
      axios
        .post("http://localhost:8080/register", newUser)
        .then(response => {
          console.log('user', newUser);
          this.setState({
            users: this.state.users.concat(this.state.users, newUser)
          });
        })
        .catch(err => console.log(err));
    };

    render() {
      console.log( 'state', this.state.users);
      return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={this.onAdd}>
            <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.onChange}/>
            <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.onChange}/>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}
export default RegisterForm;
