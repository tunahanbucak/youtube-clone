import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 14px",
        //height: "14px",
        backgroundColor: "#212121",
        opacity: 0.95,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <Box>
          <MenuIcon />
        </Box>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <YouTubeIcon
              sx={{
                fontSize: "3rem",
                color: "red",
              }}
            />
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Youtube
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#181818",
              // backgroundColor: "#444",
              alignItems: "center",
              height: "2.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                paddingRight: "1.25rem",
              }}
            >
              <Box>
                <SearchIcon
                  sx={{
                    fontSize: "1.25rem",
                  }}
                />
              </Box>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                style={{
                  width: "24rem",
                  backgroundColor: "#181818",
                  //backgroundColor: "#444",
                  outline: "none",
                  border: "none",
                }}
              />
              <CloseIcon
                sx={{
                  fontSize: "1.25rem",
                  cursor: "pointer",
                  visibility: !searchTerm ? "hidden" : "visible", // Equivalent to the original className logic
                }}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </Box>
            <Button
              sx={{
                height: "2.5rem",
                width: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#444",
                color: "#ffffff",
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: "1.25rem",
                }}
              />
            </Button>
          </Box>
        </form>
        <Box
          sx={{
            fontSize: "1.25rem",
            padding: "0.75rem",
            backgroundColor: "#444",
            borderRadius: "50%",
            ml: 2,
          }}
        >
          <MicIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.25rem",
          alignItems: "center",
          fontSize: "1.25rem",
        }}
      >
        <VideoCameraBackIcon />
        <NotificationsIcon />

        <img
          src="https://yt3.ggpht.com/yti/AOXPAcXfIlWtDDR0u8p4GJSzrFVEIgb7Pub5awfEOg=s88-c-k-c0x00ffffff-no-rj"
          style={{
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "50%",
          }}
          alt="logo"
        />
      </Box>
    </Box>
  );
}
