import React from 'react'

function Video() {
    return (
        <div className="video-container">
        <h1>Motivational videos from Youtube</h1>
        <>
        <iframe className="video" src='https://www.youtube.com/embed/nmNvj3c-Rhs'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        </>
        <>
        <iframe className="video" src='https://www.youtube.com/embed/hS5CfP8n_js'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        </>
        </div>
    )
}

export default Video
