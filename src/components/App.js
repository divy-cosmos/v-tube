import React from "react";
import SearchBar from "./SearchBar";
// import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Axios from "axios";
export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onSearchSubmit('tom and jerry');
    // console.log("inside component did mount");
  }

  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await Axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 5,
          q: term,
          key: "AIzaSyDQ6Aiz7FZMWlK7QloeKhxoXqEibSpqnCg",
        },
      }
    );
    // console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    });
  };

  onVideoSelect = (video) => {
    // console.log('Clicked',video);
    this.setState({ selectedVideo: video });
  };

  render() {
    // console.log("inside render"); 
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
