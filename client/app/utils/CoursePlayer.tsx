import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    // Here in line 17 use S3 cloudhub API url
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}getVdoChipherOTP`, {
        videoID: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{ paddingTop: "41%", position: "relative" }}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=zlc1WCNFg5hb9UQa`}//Add S3Cloudhub url
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "90%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};
export default CoursePlayer;


