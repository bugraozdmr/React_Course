import React from 'react'

export const MenuItem = ({price,content,image,name}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1 style={{marginBottom:'10px'}}>{name}</h1>
        <h6 style={{marginTop:'0px'}}>{content}</h6>
        <p>
            <i style={{color:'red',fontSize:'18px'}}>
            {price} TL
            </i>
        </p>
    </div>
  )
}
