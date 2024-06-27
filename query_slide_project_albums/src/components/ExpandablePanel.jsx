import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// sadece icindekileri basmak istiyorum demek
export default function ExpandablePanel({header,children}) {
    const [expanded,setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

  return (
    <div className='panelDiv'>
        <div className='topArrangement'>
            <div className="topArrangement">
                {header}
            </div>
            <div onClick={handleClick}>
                {expanded ? <KeyboardArrowDownIcon /> : <ChevronLeftIcon />}
            </div>
        </div>
        {expanded ? (<div>{children}</div>) : ('')}
    </div>
  )
}
