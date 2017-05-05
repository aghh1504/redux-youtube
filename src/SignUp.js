import React, {Component} from 'react';
import SignUpModal from './SignUpModal'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onClick = () => {
    this.setState({show: !this.state.show})
  }

  onSubmit = (e) => {
    e.preventDefault;
    
  }

  renderSignUpModal = () => {
    console.log('renderSignUpModal');
    return (
    <SignUpModal
      onClick={this.onClick}
    />
    )
  }

  render() {
    return (
      <div>
        <button className='btn btn-primary pull-right' onClick={this.onClick}>Sign Up</button>
        {this.state.show ? this.renderSignUpModal() : null}
      </div>
    )
  }
}
