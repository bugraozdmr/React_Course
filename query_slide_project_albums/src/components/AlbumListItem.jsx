import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import { PhotoList } from './PhotoList'
import { CircularProgress, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemoveAlbumMutation } from '../store/Index';


export default function AlbumListItem({album}) {
    const [removeAlbum,results] = useRemoveAlbumMutation();

    const handleClick = () => {
        removeAlbum(album);
    }

    const header = (
        <>
        <IconButton aria-label="delete" size="large" color='error' onClick={handleClick} style={{cursor:'pointer'}}>
            {results.isLoading ? (
                <CircularProgress color='error'/>
            ) : (
                <DeleteIcon />
            )}
            
        </IconButton>
        {album.title}
        </>
    )

  return (
    <div>
        <ExpandablePanel header={header}>
            <PhotoList
             album={album}/>
        </ExpandablePanel>
    </div>
  )
}
