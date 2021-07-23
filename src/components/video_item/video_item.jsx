import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
    ({video, video: {snippet}, onVideoClick, onClickToTop, display}) => { // props로 video와 video의 snippet, onVideoCilck, display를 받아오고
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
                <div className={`${styles.video} ${displayType}`} onClick={() => onClickToTop()}>
                    <img className={`${styles.thumbnail} ${displayType}`} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
        );
    }
);

export default VideoItem;