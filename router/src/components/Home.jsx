import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <div>Home</div>
        <button onClick={() => {
            navigate('/mission')
        }}>go to Mission</button>
    </div>
  )
}
