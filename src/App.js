import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [githubName, setGitHubName] = useState("");
  const [githubURL, setGitHubURL] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/kylelarsen12")
      .then((res) => res.json())
      .then((data) => {
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setImageURL(data.avatar_url);
      });
  }, []);
  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{githubName}</h2>
      <a href={githubURL} role="link">
        <button>Link to my github profile</button>
      </a>
      <br />
      <img src={imageURL} alt="Github pp"></img>
    </div>
  );
}

export default App;
