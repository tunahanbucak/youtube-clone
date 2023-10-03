import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { HomePageVideos } from "../Types";
import { clearVideos } from "../store";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import SearchCard from "../components/SearchCard";

interface Search {
  searchTerm: string;
}
export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(clearVideos());
    if (String(searchTerm) === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

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
          <Box
            sx={{
              py: 8,
              pl: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: "100%",
            }}
          >
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <Box
                    sx={{
                      marginTop: "1.25rem",
                    }}
                  >
                    <SearchCard data={item} key={item.videoId} />;
                  </Box>
                );
              })}
            </InfiniteScroll>
          </Box>
        ) : (
          <Spinner />
        )}
      </Box>
    </Box>
  );
}
