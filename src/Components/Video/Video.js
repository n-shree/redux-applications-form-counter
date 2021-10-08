import React from 'react'

function Video() {
    return (
        <div className="video-container">
        <h1>Motivational videos from Youtube</h1>
        <>
        <iframe className="video" src='https://www.youtube.com/embed/nmNvj3c-Rhs'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        </>
        <>
        <iframe className="video" src='https://www.youtube.com/embed/hS5CfP8n_js'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        </>
        </div>
    )
}

export default Video
