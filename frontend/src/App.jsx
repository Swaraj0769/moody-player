import { useState } from "react";
import "./App.css";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {

  const [Songs, setSongs] = useState([
          {
              title: "test_title1",
              artist: "test_artist1",
              url: "test_url1"  
          },
          {
              title: "test_title2",
              artist: "test_artist2",
              url: "test_url2"  
          },
          {
              title: "test_title3",
              artist: "test_artist3",
              url: "test_url3"  
          }
      ])

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  );
}

export default App;
