import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchVideo, videosLoaded, addVideos } from "./actions";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         term: ''
    //     }
    // }
    // componentDidMount(){
    //     console.log('componentDidNomut', this.props.value)
    //     this.props.searchVideo(this.props.value);
    // }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.searchVideo(this.props.value)
        //this.setState({term: ''})
    }

    // onInputChange = (e) => {
    //     this.setState({
    //         term: e.target.value
    //     })
    // }

    render() {
      console.log('rendertuuu', this.props.value)

      return (
      <div className="App">
          <h1>Hello youtube</h1>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" value={this.props.value} onChange={(e) => this.props.addVideos(e.target.value)}/>
              <button type="submit">Search!</button>
          </form>
          {
              this.props.videos.map(a => <h2>{a.etag}</h2>)
          }
      </div>
);
  }
}

const mapStateToProps = (state) => {
    console.log('state app.js', state)
    return {
        videos: state.videos,
        value: state.value.value
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({searchVideo, videosLoaded, addVideos}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

