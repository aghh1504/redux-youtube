import React,  { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class  SignUpModal extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      password2: ''
    };
  }

  onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

  onClick = (e) => {
    this.props.onClick(e)
  }
  onSubmit = (e) => {
    
  }
  render() {
  return (
    <Modal.Dialog >
        <Modal.Header>
            <Modal.Title>Sign Up Now</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.onSubmit} id={this.props.id}>
            <Modal.Body>
                <h4>Name</h4>
                <input value={this.state.term} name="name" onChange={this.onChange} placeholder="Your Name" className="form-control"/>
                <h4>Password</h4>
                <input type='password' value={this.state.term} name="password" onChange={this.onChange} placeholder="passowrd" className="form-control"/>
                <h4>Repeat Password</h4>
                <input type='password' value={this.state.term} name="password2" onChange={this.onChange} placeholder="repeat passowrd" className="form-control"/>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" type="submit">Sign up</Button>
                <Button onClick={this.onClick} name='close'>Close</Button>
            </Modal.Footer>
        </form>
    </Modal.Dialog>
  )
  }
};
