import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store/Index";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import AlbumListItem from "./AlbumListItem";

export default function AlbumList({ user }) {
  const [addAlbum, results] = useAddAlbumMutation();
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = (
      <Box sx={{ width: "80%",marginLeft:'10%' }}>
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
    content = data.map((album, index) => {
      return <AlbumListItem key={index} album={album} />;
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
                  {user.name}'s album
                </h1>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleAlbumAdd}
                >
                  {results.isLoading ? (
                    <CircularProgress color="warning" disableShrink />
                  ) : (
                    <span>Add Album +</span>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>

      {content}
    </div>
  );
}
