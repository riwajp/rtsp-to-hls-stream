// import "./App.css";
// import React from "react";
// import ReactPlayer from "react-player";

// function App() {
//   return (
//     <div className="App">
//       <h1>IP Camera Streaming</h1>
//       URL : http://localhost:4000/index.m3u8
//       <ReactPlayer url="http://localhost:4000/index.m3u8" playing={true} />
//     </div>
//   );
// }

import React from "react";
import HlsPlayer from "./HlsPlayer"; // Adjust the path as necessary

const App = () => {
  const hlsUrl = "http://localhost:4000/index.m3u8"; // Replace with your HLS stream URL

  return (
    <div>
      <h1>HLS Stream</h1>
      <HlsPlayer url={hlsUrl} />
    </div>
  );
};

export default App;
