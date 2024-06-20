import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Mission() {
    const navigate = useNavigate();
  return (
    <div>
        <div>Mission</div>
        <button onClick={() => {navigate('/')}}>
            Go back
        </button>
    </div>
    
  )
}
