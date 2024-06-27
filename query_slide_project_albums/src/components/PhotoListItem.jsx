import React from 'react'
import { useRemovePhotoMutation } from '../store/Index';
import { CircularProgress, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const PhotoListItem = ({photo}) => {
    const [removePhoto,results] = useRemovePhotoMutation();

    const handleClick = () => {
        removePhoto(photo);
    }


  return (
    <div  onClick={handleClick} style={{cursor:'pointer',position:'relative'}}>
        <img src={photo.url} alt='photo' ></img>

        <IconButton aria-label="delete" size="large" style={{cursor:'pointer',color:'tomato',fontSize:'1.8rem',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            {results.isLoading ? (
                <CircularProgress color='error'/>
            ) : (
                <DeleteIcon />
            )}
            
        </IconButton>
        
    </div>
  )
}
