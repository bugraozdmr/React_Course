import React from 'react'

export const Footer = () => {
    const currentTime = Date.now(); 
    const currentYear = new Date(currentTime).getFullYear(); 

  return (
    <footer className='footer'>
        <p>&copy; {currentYear} - All rights reserved</p>
    </footer>
  )
}
