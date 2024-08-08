# RTSP to HLS Stream with Node and React

This project converts an RTSP stream to HLS and serves it using an Node server. The HLS stream is then played in a React application.

## Prerequisites

- [FFmpeg](https://ffmpeg.org/download.html) (Ensure FFmpeg is installed on your system)
- [Node.js](https://nodejs.org/) (Install the latest LTS version)

## FFmpeg Command

Run the following command to convert the RTSP stream to HLS:

```bash
ffmpeg -rtsp_transport tcp -i <RTSP url> -c:v libx264 -preset superfast -c:a aac -f hls -hls_time 10 -hls_list_size 100 -hls_wrap 10 ./videos/ipcam/index.m3u8
```

## Installation

```
git clone https://github.com/riwajp/rtsp-to-hls-stream
cd https://github.com/riwajp/rtsp-to-hls-stream
```

## Set up the Server

```
cd server
npm install
nodemon hls-server.js
```

## Set up the Client

```
cd ../client/hls-client
npm install
npm start
```

## Run the project

```
http://localhost:3000
```
