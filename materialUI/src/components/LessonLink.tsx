import { Box, Link } from "@mui/material";
import React from "react";

export const LessonLink = () => {
  return (
    <Box>
      <Link
        href="https://techarsiv.com/"
        color={"secondary"}
        underline="none"
        variant="body2"
      >
        Go To Site
      </Link>
      <Link
        href="https://techarsiv.com/"
        color={"secondary"}
        underline="hover"
        variant="body2"
      >
        Go To Site
      </Link>
      <Link
        href="https://techarsiv.com/"
        color={"primary"}
        component="button"
        onClick={() => {
          alert("fuck off");
        }}
      >
        Go To Site
      </Link>
    </Box>
  );
};
