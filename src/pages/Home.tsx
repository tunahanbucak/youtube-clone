import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { HomePageVideos } from "../Types";
import { clearVideos } from "../store";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos);
  }, [dispatch]);
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "9.5vh",
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "92.5vh",
        }}
      >
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                //  gap: "3.5rem 2rem",
                // padding: "2rem",
              }}
            >
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </Box>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </Box>
    </Box>
  );
}
