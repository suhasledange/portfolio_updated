'use client'
import React, { useCallback, useContext, useRef, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import YoutubeCard from '../components/ui/YoutubeCard'
import YoutubeContext from '@/context/YoutubeContext';
const Youtube = () => {

    type Video = {
        snippet: {
          title: string;
          publishedAt: string;
        };
        Videolink: string;
      };
      
    
    const {allVideos,loading} = useContext(YoutubeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 6;
    const videosSectionRef = useRef<HTMLHeadingElement>(null);

  const totalPages = Math.ceil(allVideos.length / videosPerPage);
  const paginate = useCallback((action:any) => {
    setCurrentPage((prevPage) => {
      if (action === 'prev' && prevPage > 1) {
        return prevPage - 1;
      }
      if (action === 'next' && prevPage < totalPages) {
        const nextPage = prevPage + 1;
        if (videosSectionRef.current) {
          videosSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return nextPage;
      }
      if (typeof action === 'number') return action;
      return prevPage;
    });
  }, [totalPages]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <section id="youtube" className='pb-10 mt-12'>
        <h1 ref={videosSectionRef} className='heading'>
           My <span className='text-purple'> Youtube Channel </span> 
        </h1>

        <div  className='w-full mt-12 justify-items-center gap-10'>

        {loading ? (
         <div className='grid gap-5' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {
            Array.from({length:9},(_,index)=>(
                <div key={index} className='bg-gray-900 custom-pulse h-[20rem]'>
            </div>
            ))
        }

        </div>
      
    ) : (

        <div className='grid gap-4' 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
        >
          {currentVideos.map((video:Video, idx:number) => (
            <YoutubeCard
              key={idx}
              title={video.snippet.title}
              publishedAt={video.snippet.publishedAt}
              link={video.Videolink}
            />
          ))}
        </div>

        )}

      <div className='pagination flex items-center justify-center space-x-10 mt-10'>
        <button onClick={() => paginate('prev')} disabled={currentPage === 1}>
          <FaArrowAltCircleLeft className={`text-4xl ${currentPage === 1 ? "text-gray-700" : "text-white"}`} />
        </button>

        <button
          onClick={() => paginate('next')}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight className={`text-4xl ${currentPage === totalPages ? "text-gray-700" : "text-white"}`} />
        </button>
      </div>
        </div>
    </section>
  )
}

export default Youtube
