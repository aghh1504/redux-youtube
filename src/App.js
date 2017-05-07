import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchVideo, videosLoaded, addVideos, selectVideo } from "./actions";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SignUp from "./SignUp";

class App extends Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchVideo(this.props.value);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello youtube</h1>
        <SignUp />
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.props.addVideos(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search!</button>
          <VideoDetail video={this.props.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo =>
              this.props.selectVideo(selectedVideo)}
            videos={this.props.videos}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state app.js", state);
  return {
    videos: state.videos.videos,
    selectedVideo: state.videos.selectedVideo,
    value: state.value.value
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { searchVideo, videosLoaded, addVideos, selectVideo },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
