'use client'
import React, { useEffect, useState } from 'react'
import YoutubeContext from './YoutubeContext'
import { fetchChannelYoutube, fetchFromYoutube } from '@/utils/api';

const YoutubeProvider = ({children}) => {

  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState({});

  const fetchVideosAndChannelData = async () => {
    try {
      const [videoData, channelData] = await Promise.all([
        fetchFromYoutube(),
        fetchChannelYoutube()
      ]);

      if (videoData?.items) {
        const videos = videoData.items.map((video) => ({
          ...video,
          Videolink: `https://www.youtube.com/embed/${video.id.videoId}`,
        }));
        setAllVideos(videos);
      }

      if (channelData?.items) {
        setChannelData(channelData.items[0]?.statistics || {});
      }
      setLoading(false)

    } catch (error) {
      console.error('Error fetching data from YouTube', error);
      setLoading(false)

    }
  };

  useEffect(() => {
    fetchVideosAndChannelData();
  }, []);

  return (
  <YoutubeContext.Provider value={{allVideos,loading,channelData}}>
    {children}
  </YoutubeContext.Provider>
)
}

export default YoutubeProvider
