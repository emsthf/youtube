import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onVideoClick, display}) => ( // props로 videos와 onVideoClick, display을 전달 받으면
    <ul className={styles.videos}>
        {videos.map(video => ( // 순서에 상관 없는 목록이므로 ul을 사용하고, props로 전달받은 videos를 빙글빙글 돌면서 video에 있는 item을 VideoItem에 전달해 컴포넌트로 만들 것
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} /> // video는 빙글빙글 돌면서 각각 id로 된 key와 video와 onVideoClick, display을 VideoItem 컴포넌트에 전달
        ))}
    </ul>
);

export default VideoList;