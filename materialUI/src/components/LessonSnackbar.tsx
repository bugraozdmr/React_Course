import { Button, Fade, IconButton, Slide, SlideProps, Snackbar } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';


function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export const LessonSnackbar = () => {
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      {/*
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Saved"
        key={state.Transition.name}
        autoHideDuration={1000}
      />
       */}

      <Snackbar
        anchorOrigin={{vertical:'top',horizontal:'right'}}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        action={action}
        message="Saved"
        key={state.Transition.name}
        autoHideDuration={1000}
      />
    </div>
  );
};
