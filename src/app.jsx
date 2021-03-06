import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 홈으로 가기 추가
  const clickTitle = useCallback(() => {
    setSelectedVideo(null);
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube.search(query).then(videos => setVideos(videos));
  }, [youtube]);

  const handleTop = useCallback(() => {
    window.scrollTo({
      top: 0
    })}
  )

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onTitleClick={clickTitle} />
      <section className={styles.content}>
        {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} onClickToTop={handleTop} display={selectedVideo? 'list' : 'grid'} />;
        </div>
      </section>
    </div>
  )
}

export default App;
