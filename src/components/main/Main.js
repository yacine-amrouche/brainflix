
import "./Main.scss";
import { useState, useEffect } from "react";
import VideoSelected from "../Video/VideoSelected";
import VideoList from "../Video/VideoList";
import { useParams } from "react-router-dom";
import axios from "axios";

const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const { idParams } = useParams();
  const videoIdToDisplay = idParams ?? defaultVideoId;

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoIdToDisplay}?api_key=7e7da151-3bfe-4861-bd6f-dde6568e13aa`
      );
      console.log(response.data)
      setSelectedVideo(response.data);
    };
    getVideos();
  }, [videoIdToDisplay]);

  return (
    <>
      <div className="app__video">
        <video
          className="app__post"
          controls
          poster={selectedVideo.image}
        ></video>
      </div>

      <div className="app__main">
        <div className="app__main-selected">
          <VideoSelected videoItem={selectedVideo} />
        </div>
        <div className="app__main-list">
          <VideoList selectedVideoId={videoIdToDisplay} />
        </div>
      </div>
    </>
  );
}

export default Main;