import React from 'react'
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumList';
import { Button, CircularProgress, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemoveUserMutation } from '../store/Index';



function UserListItem({user}) {
    // api icindeki fonksiyonlar boyle cagirilir 2 parametreli
    const [removeUser,results] = useRemoveUserMutation();

    const handleClick = () => {
        removeUser(user);
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
        {user.name}
        </>
    )
  return (
    <div>
        <ExpandablePanel header={header}>
            <AlbumList user={user}/>
        </ExpandablePanel>
    </div>
  )
}

export default UserListItem