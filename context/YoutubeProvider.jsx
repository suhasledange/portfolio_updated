'use client'
import React, { useEffect, useState } from 'react'
import YoutubeContext from './YoutubeContext'
import { fetchChannelYoutube, fetchFromYoutube } from '@/utils/api';

const YoutubeProvider = ({children}) => {

  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState({});


  const fetchChannelData = async ()=>{

    try {

      const channelData = await fetchChannelYoutube();
      if (channelData?.items) {
        setChannelData(channelData.items[0]?.statistics || {});
      }
    } catch (error) {
      console.error('Error fetching data from YouTube', error);
    }

  }

  const fetchVideos = async () => {
    try {
      const videoData = await fetchFromYoutube();

      if (videoData?.items) {
        const videos = videoData.items.map((video) => ({
          ...video,
          Videolink: `https://www.youtube.com/embed/${video.id.videoId}`,
        }));
        setAllVideos(videos);
      }
      setLoading(false)

    } catch (error) {
      console.error('Error fetching data from YouTube', error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchChannelData();
    fetchVideos()
  }, []);

  return (
  <YoutubeContext.Provider value={{allVideos,loading,channelData}}>
    {children}
  </YoutubeContext.Provider>
)
}

export default YoutubeProvider
