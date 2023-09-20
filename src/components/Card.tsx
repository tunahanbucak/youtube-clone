import React from "react";
import { HomePageVideos } from "../Types";
import { Box, Typography, Link, Avatar } from "@mui/material";

export default function Card({ data }: { data: HomePageVideos }) {
  return (
    <Box
      sx={{
        width: "16rem",
        height: "15rem",
        display: "flex",
        gap: "0.95rem",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            fontSize: "0.875rem",
            backgroundColor: "#333",
            paddingX: "0.5rem",
            paddingY: "0.125rem",
            zIndex: 10,
          }}
        >
          {data.videoDuration}
        </Typography>
        <Link href={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            style={{
              height: "11rem",
              width: "18rem",
            }}
            alt="thumbnail"
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ minWidth: "fit-content" }}>
          <a href="#">
            <Avatar
              src={data.channelInfo.image}
              alt="channel"
              sx={{ width: 26, height: 26, borderRadius: "50%" }}
            />
          </a>
        </Box>
        <Box>
          <Typography component="h3">
            <Link
              href="#"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {data.videoTitle}
            </Link>
          </Typography>

          <Box sx={{ fontSize: "0.875rem", color: "#8c8c8c" }}>
            <Box>
              <Link
                href="#"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                {data.channelInfo.name}
              </Link>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{ "::after": { content: "'•'", mx: 1 } }}
              >
                {data.videoViews} views
              </Typography>
              <Typography component="span">{data.videoAge}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
