import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import Videos from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDNSb5j6RnHXIMM19NuktuJ_z9zq0MWDo0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfbords' }, (videos) => {
      this.setState({ videos });
      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <Videos videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));