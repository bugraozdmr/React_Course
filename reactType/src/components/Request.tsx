import React from 'react'

// diger turlu patlar
type RequestProps = {
    status : 'loading' | 'success' | 'error';
}


function Request(props:RequestProps) {
    let message = '';
    if(props.status === 'loading'){
        message = 'Loading ...';
    }
    if(props.status === 'success'){
        message = 'Success ...';
    }
    if(props.status === 'error'){
        message = 'Error ...';
    }


  return (
    <div>{message}</div>
  )
}

export default Request