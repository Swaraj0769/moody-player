import React, {useState} from 'react'
import './MoodSongs.css'

const MoodSongs = ({Songs}) => {

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