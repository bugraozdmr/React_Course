import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store/Index";
import { Alert, Box, Button, CircularProgress, Container, Grid, Skeleton } from "@mui/material";
import { PhotoListItem } from "./PhotoListItem";

export const PhotoList = ({ album }) => {
  const [addPhoto, results] = useAddPhotoMutation();
  const { data, isError, isFetching } = useFetchPhotosQuery(album);

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = (
      <Box sx={{ width: "80%", marginLeft: "10%" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  } else if (isError) {
    content = (
      <Alert variant="filled" severity="error">
        Something went wrong
      </Alert>
    );
  } else {
    content = data.map((photo, index) => {
      return <PhotoListItem key={index} photo={photo} />;
    });
  }

  return (
    <div>
      <React.Fragment>
        <Container sx={{ width: "100%" }}>
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <h1
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1.1rem",
                    color: "darkblue",
                  }}
                >
                  {album.title}'s Photos
                </h1>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handlePhotoAdd}
                >
                  {results.isLoading ? (
                    <CircularProgress color="warning" disableShrink />
                  ) : (
                    <span>Add Photo +</span>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>

      <div className='photosDiv'>
        {content}
      </div>
      
    </div>
  );
};
