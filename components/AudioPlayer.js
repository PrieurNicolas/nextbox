import React, { useEffect, useRef } from 'react'
import Styles from '../styles/SliderAudio.module.css';

export default function AudioPlayer({ music }) {

  const ref = useRef()

  useEffect(() => {
      ref.current.play(music.src);
  }, [music.src])

  return (
    <>
      <audio className={Styles.audio} src={`/assets/musics/${music.src}`} ref={ref} controls></audio>
    </>
  )
}