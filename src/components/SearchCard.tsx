import React from "react";
import { HomePageVideos } from "../Types";
import Box from "@mui/material/Box";
import { Avatar, Link, Typography } from "@mui/material";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            position: "absolute",
            bottom: 3,
            right: 3,
            fontSize: "0.875rem",
            backgroundColor: "#121212",
            padding: "0.125rem 0.5rem",
            zIndex: 10,
          }}
        >
          {data.videoDuration}
        </Typography>
        <Link href={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            style={{
              height: "13rem",
              width: "24rem",
            }}
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
        <Typography component="div" variant="h6" sx={{ maxWidth: "2xl" }}>
          <Link href="#" className="line-clamp-2">
            {data.videoTitle}
          </Link>
        </Typography>
        <Box
          sx={{
            fontSize: "0.75rem",
            color: "#ccc",
          }}
        >
          <Box>
            <Box>
              <Typography sx={{ "&::after": { content: "'•'", mx: 1 } }}>
                {data.videoViews} views
              </Typography>
              <Typography>{data.videoAge}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ minWidth: "fit-content", my: 2 }}>
          <Link
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: "0.75rem",
              color: "#ccc",
            }}
          >
            <Avatar
              src={data.channelInfo.image}
              alt="channel"
              sx={{ height: 36, width: 36 }}
            />
            <Typography>{data.channelInfo.name}</Typography>
          </Link>
        </Box>
        <Box
          sx={{
            maxWidth: "2xl",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "0.875rem",
            color: "#ccc",
          }}
        >
          <Typography>{data.videoDescription}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
