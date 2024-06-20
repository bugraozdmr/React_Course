import React from 'react'
import BannerImg from '../assets/banneryeni.jpg'
import '../styles/About.css'


export default function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImg})`}}>
        </div>
        
        <div className='aboutBottom'>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta id vitae. Unde error aut incidunt numquam ipsam quia doloribus, molestias mollitia, at eum molestiae odit iusto illo, magnam beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta id vitae. Unde error aut incidunt numquam ipsam quia doloribus, molestias mollitia, at eum molestiae odit iusto illo, magnam beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta id vitae. Unde error aut incidunt numquam ipsam quia doloribus, molestias mollitia, at eum molestiae odit iusto illo, magnam beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta id vitae. Unde error aut incidunt numquam ipsam quia doloribus, molestias mollitia, at eum molestiae odit iusto illo, magnam beatae.</p>
        </div>
    </div>
  )
}
