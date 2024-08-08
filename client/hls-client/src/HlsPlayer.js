import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

const HlsPlayer = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    console.log(video);
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferSize: 60 * 1000 * 1000, // 60 MB buffer size
        maxBufferLength: 120, // Max buffer length in seconds
        startLevel: 0, // Start with the highest quality
        autoStartLoad: true, // Automatically start loading
        backBufferLength: 120, // Back buffer length in seconds
        liveSyncDuration: 5, // Synchronize with live point
        enableWorker: true, // Use web workers for better performance
        enableSoftwareDecryption: true, // Use software decryption if available
      });
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      console.log("sup");
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.addEventListener("canplay", () => {
        video.play();
      });
    }

    // Add event listener to resume playback if the video is paused
    const handlePause = () => {
      video.play().catch((error) => {
        console.error("Error attempting to resume video playback:", error);
      });
    };

    video.addEventListener("pause", handlePause);

    // Clean up event listener on component unmount
    return () => {
      video.removeEventListener("pause", handlePause);
    };
  }, [url]);

  return (
    <div>
      <video
        ref={videoRef}
        controls={false}
        style={{ width: "100%", height: "auto" }}
        autoPlay={true}
        muted={true}
      />
    </div>
  );
};

export default HlsPlayer;
