import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { formatDistanceToNow, parseISO } from "date-fns";
import Skeleton from "./Skeleton";
const YoutubeCard = ({ title, link, publishedAt }) => {
  const [isPlayerReady, setPlayerReady] = useState(false);


  const playerStyle = {
    borderRadius: "6px",
    overflow: "hidden",
  };

  const dateObject = parseISO(publishedAt);
  const Publish = formatDistanceToNow(dateObject, { addSuffix: true });

  return (
    <div className="flex flex-col flex-grow">
      <div className="bg-black mx-auto p-4 rounded-md">
      <div>
            <ReactPlayer
            style={playerStyle}
            width="100%"
            height="100%"
            url={link}
          />
        </div>

        <div className="flex items-center space-x-4 mt-3">
          <div className="w-10 h-10">
            <LazyLoadImage
              alt=""
              className="rounded-full"
              src="/bass.png"
              effect="blur"
              threshold={200}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="">
            <h1 className="text-md font-normal text-gray-300 dark:text-gray-200">
              {title.length > 70 ? `${title.substr(0, 70)}...` : title}
            </h1>
            <p className="py-2 text-gray-500 text-base">{Publish}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
