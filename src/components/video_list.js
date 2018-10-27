import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const VideoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.id.videoId}
            video={video} />;
    });

    return (
        <ul className="col-md-6 list-group" >
            {VideoItems};
        </ul>
    );
}

export default VideoList;