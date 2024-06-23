import { Alert, AlertTitle, Box } from '@mui/material'
import React from 'react'

export const LessonAlert = () => {
  return (
    <Box>
      <Box>
        <Alert severity="success">
            <AlertTitle>Major Alert</AlertTitle>
            This is a success Alert.</Alert>
        <Alert severity="info">
        <AlertTitle>Carefull </AlertTitle>
            This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert>
      </Box>
      <Box>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Box>
      <Box>
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
        <Alert severity="warning" onClose={() => {}}>
  This Alert displays the default close icon.
</Alert>

      </Box>
    </Box>
  );
}
