import React, {useState} from 'react'
import './MoodSongs.css'

const MoodSongs = () => {
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
    <div className='mood-songs'>
        <h2>Recommended Songs</h2>
        {Songs.map((song, index) => (
            <div className='song' key={index}>
                <div className='title'>
                    <h3>{song.title}</h3>
                    <p>Artist: {song.artist}</p>
                </div>
                <div className='play-pause-button'>
                    <i className="ri-play-line"></i>
                    <i className="ri-pause-line"></i>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MoodSongs