import React from 'react'
import Styles from '../styles/Title.module.css'

export default function Title(props){
  return (
    <>
    <div>Welcome <span className={Styles.titleName}>{props.name}</span> to the NEXTBOX</div>
    <p>bonsoir</p>
    </>
  )
}