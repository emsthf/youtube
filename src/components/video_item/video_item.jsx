import React from 'react';

const VideoItem = (props) => ( // props를 받아오고
    <h1>{props.video.snippet.title}</h1>  // props에 전달된 video의 snippet 안의 title을 h1 태그로 출력
);

export default VideoItem;