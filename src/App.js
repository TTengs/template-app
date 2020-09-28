import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";

let songPath = "";

function songSwitcher(song) {
  if (song === "all_my_love") {
    songPath = "./Music/all_my_love.mp3";
    console.log({ songPath });
  } else if (song === "blinding_lights") {
    songPath = "Music/blinding_lights.mp3";
    console.log({ songPath });
  } else if (song === "in_your_eyes") {
    songPath = "Music/in_your_eyes.mp3";
    console.log({ songPath });
  } else {
    alert("Not a real song?");
  }
}

class App extends Component {
  state = {
    music: "audio",
  };
  render() {
    return (
      <div>
        <h2>Streaming Service</h2>
        <ReactAudioPlayer
          ref={(ref) => (this.music = ref)}
          src="all_my_love.mp3"
          autoPlay
          controls
        />

        <button
          type="button"
          onClick={() => songSwitcher("all_my_love")}
          className="btn btn-primary"
        >
          All My Love
        </button>
        <button
          type="button"
          onClick={() => songSwitcher("blinding_lights")}
          className="btn btn-primary"
        >
          Blinding Lights
        </button>
        <button
          type="button"
          onClick={() => songSwitcher("in_your_eyes")}
          className="btn btn-primary"
        >
          Robin Schulz - In Your Eyes
        </button>
      </div>
    );
  }
}

export default App;
