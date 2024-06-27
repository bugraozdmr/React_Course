import React from "react";
import { useAddUserMutation, useFetchUsersQuery } from "../store/Index";
import Skeleton from "@mui/material/Skeleton";
import { Alert, Box, Button, CircularProgress, Container, Grid, duration } from "@mui/material";
import UserListItem from "./UserListItem";

export const UsersList = () => {
  const [addUser,results] = useAddUserMutation();
  const { data, isError, isFetching } = useFetchUsersQuery();

  let content;
  if (isFetching) {
    content = (
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />

        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />

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
    content = data.map((user, index) => {
      return <UserListItem key={index} user={user} />;
    });
  }

  const handleUserAdd = () => {
    addUser();
  }

  return (
    <div>
      <React.Fragment>
        <Container sx={{width:'80%',marginTop:'1.5rem'}}>
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <h1 style={{fontSize:'1.4rem',marginBottom:'1.1rem',color:'tomato'}}>Users</h1>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="secondary" onClick={handleUserAdd}>
                {results.isLoading ? <CircularProgress color="success" disableShrink /> : <span>Add User +</span>}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>

      {content}
    </div>
  );
};
