import React from "react";
import { RecommendedVideos } from "../Types";
import { Box, Typography, Link } from "@mui/material";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ position: "relative", minWidth: "fit-content" }}>
        <Typography
          sx={{
            position: "absolute",
            bottom: "3",
            right: "3",
            fontSize: "0.875rem",
            backgroundColor: "#333",
            px: "0.5rem",
            py: "0.25rem",
            zIndex: "10",
          }}
        >
          {data.videoDuration}
        </Typography>
        <Link href={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            style={{ height: "6rem", width: "10rem" }}
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
        <Typography variant="h4" sx={{ fontSize: "0.875rem" }}>
          <Link href="#" className="line-clamp-2">
            {data.videoTitle}
          </Link>
        </Typography>
        <Box sx={{ fontSize: "0.75rem", color: "#ccc" }}>
          <Box>
            <Link href="#" sx={{ "&:hover": { color: "white" } }}>
              {data.channelInfo.name}
            </Link>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ "&::after": { content: "'•'", mx: "0.25rem" } }}
              >
                {data.videoViews} views
              </Typography>
              <Typography>{data.videoAge}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
