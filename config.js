export default {
  token: "YOUR_BOT_TOKEN_HERE",
  
  lavalink: {
    nodes: [
      {
        name: "MusicBot",
        host: "lavalink.devxcode.in",
        port: 80,
        password: "DevamOP",
        secure: false,
      },
    ],
    defaultSearchPlatform: "ytmsearch",
    restVersion: "v4",
  },
  
  activities: [
    {
      type: "PLAYING",
      text: "music for everyone",
    },
    {
      type: "LISTENING",
      text: "your requests",
    },
    {
      type: "WATCHING",
      text: "the music queue",
    },
    {
      type: "PLAYING",
      text: "beats and melodies",
    },
    {
      type: "LISTENING",
      text: "to the rhythm",
    },
    {
      type: "WATCHING",
      text: "over the server",
    },
  ],
  
  activityRotationInterval: 30000, 
};
