import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";
import React from "react";

const Images = [
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 1",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 2",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 3",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 4",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 5",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 6",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 7",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 8",
  },
  {
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    title: "image 9",
  },
];

export const LessonImageList = () => {
  return (
    <Stack>
      <Stack>
        <ImageList
          rowHeight={"13px"}
          sx={{ width: 500, height: 450, justifyContent: "center" }}
        >
          {Images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: Grant</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
      <Stack>
        <ImageList
          variant="quilted"
          sx={{ width: 500, height: 450, justifyContent: "center" }}
        >
          {Images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: Grant</span>}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Stack>
  );
};
