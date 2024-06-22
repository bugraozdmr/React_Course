import { Divider, ListItem, Stack ,Button, IconButton} from '@mui/material';
import React from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

function LessonButton() {
  return (
     <Stack direction={'column'} spacing={4}>
        <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button color="secondary" variant='text'>Secondary</Button>
        <Button color="primary" variant='outlined'>Primary</Button>
        <Button color="success" variant='contained'>Primary</Button>
        <Button color="error" variant='contained' size='small'>Primary</Button>
        <Button color="info" variant='contained' size='medium'>Primary</Button>
      </Stack>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        display={'flex'}
      >
        <Button color="secondary" variant='text'>Secondary</Button>
        <Button color="primary" variant='outlined'>Primary</Button>
        <Button color="success" variant='contained'>Primary</Button>
        <Button color="warning" variant='contained' size='large'>Primary</Button>
        <Button>
        <IconButton color="secondary" aria-label="add to shopping cart" size='large' onClick={() => {
            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                alert(`your ip exposed ${data.ip}`);
            })
            .catch(error => {
                console.error('IP adresi alınamadı:', error);
                alert('something went wrong');
            });
        }}>
            <LaptopMacIcon />
        </IconButton>
        </Button>
      </Stack>
     </Stack>
  );
}

export default LessonButton