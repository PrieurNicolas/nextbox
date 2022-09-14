import React from 'react'

export default function AudioPlayer({music}) {
  return (
    <>
    <audio src={`/assets/musics/${music.src}`} controls></audio>
    </>
  )
}