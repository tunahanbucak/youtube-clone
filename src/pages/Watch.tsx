import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import WatchCard from "../components/WatchCard";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  ContentCopy as ContentCopyIcon,
  PlaylistAdd as PlaylistAddIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { RecommendedVideos } from "../Types";

export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <Box sx={{ maxHeight: "100vh", overflow: "hidden" }}>
          <Box sx={{ height: "7.5vh" }}>
            <Navbar />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "92.5vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gapY: 10,
                gapX: 5,
                p: 7,
                mx: 20,
                mr: 0,
                width: "100%",
                overflow: "auto",
              }}
            >
              <Box sx={{ maxWidth: "800px" }}>
                <Box>
                  <iframe
                    width="800"
                    height="502"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Box mt={5}>
                    <Typography variant="h5">
                      {currentPlaying.videoTitle}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#ccc", fontSize: "0.875rem" }}
                      >
                        <span>{currentPlaying.videoViews} views</span>
                        <span> {currentPlaying.videoAge} ago</span>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <ThumbUpIcon sx={{ fontSize: "1.25rem" }} />
                          <Typography variant="body1">
                            {currentPlaying.videoLikes}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <ThumbDownIcon sx={{ fontSize: "1.25rem" }} />
                          <Typography variant="body1">dislike</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <ShareIcon sx={{ fontSize: "1.25rem" }} />
                          <Typography variant="body1">share</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <ContentCopyIcon sx={{ fontSize: "1.25rem" }} />
                          <Typography variant="body1">clip</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <PlaylistAddIcon sx={{ fontSize: "1.25rem" }} />
                          <Typography variant="body1">save</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", gap: 1, cursor: "pointer" }}
                        >
                          <MoreVertIcon sx={{ fontSize: "1.25rem" }} />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 4,
                        flexDirection: "column",
                        border: "2px solid #ccc",
                        my: 5,
                        pb: 3,
                        borderLeft: "transparent",
                        borderRight: "transparent",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 5, mr: 5, mt: 4 }}>
                        <Box>
                          <Avatar
                            src={currentPlaying.channelInfo.image}
                            alt=""
                            sx={{ width: 48, height: 48 }}
                          />
                        </Box>
                        <Box sx={{ width: "5/6" }}>
                          <Typography variant="h6">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#ccc", fontSize: "0.875rem" }}
                          >
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </Typography>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#ff5722",
                              textTransform: "uppercase",
                              fontSize: "0.875rem",
                            }}
                          >
                            subscribe
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          maxHeight: !showMoreStatus ? "72px" : "none",
                          overflow: "hidden",
                          fontSize: "0.875rem",
                          width: "11/12",
                        }}
                      >
                        <pre
                          style={{
                            fontFamily: `"Roboto", sans-serif`,
                          }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </Box>
                      <Button
                        variant="text"
                        sx={{
                          textTransform: "uppercase",
                          fontSize: "0.875rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowMoreStatus(!showMoreStatus)}
                      >
                        Show {showMoreStatus ? "less" : "more"}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="mr-24 flex flex-col gap-3">
                {recommendedVideos.length &&
                  recommendedVideos.map((item: RecommendedVideos) => {
                    return <WatchCard data={item} key={item.videoId} />;
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
