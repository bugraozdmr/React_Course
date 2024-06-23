import { Badge, Stack } from '@mui/material';
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

export const LessonBadge = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="secondary" max={3}>
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="secondary" max={3} anchorOrigin={{
        vertical: 'bottom',
        horizontal : 'right'
      }}>
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="secondary" max={3} anchorOrigin={{
        vertical: 'top',
        horizontal : 'left'
      }}>
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
