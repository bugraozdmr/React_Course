import React from 'react'
import Bootstrap from './images/bootstrap5.png'
import Angular from './images/angular.jpg'
import CSharp from './images/ccsharp.png'
import komple from './images/kompleweb.jpg'

import './Course.css';

import "bulma/css/bulma.css";

{/* İsimler ayni olsaydi sorun olmaz */}
const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    CSharp: CSharp,
    KompleWeb: komple
}

export const Course = ({courseName}) => {

  return (
    <div className='column is-one-quarter'>
        <img src={courseMap[courseName]}></img>
    </div>
  )
}
