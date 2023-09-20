import React from "react";
import {
  Home,
  SlowMotionVideo,
  Subscriptions,
  VideoLibrary,
  History,
  SmartDisplay,
  WatchLater,
  ThumbUpOffAlt,
  Settings,
  Flag,
  HelpOutline,
  Feedback,
  SportsVolleyball,
  MusicNote,
  Movie,
  Gamepad,
  CompassCalibration,
} from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: (
        <Home
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Ana Sayfa",
    },
    {
      icon: (
        <SlowMotionVideo
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Shorts",
    },
    {
      icon: (
        <CompassCalibration
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Explore",
    },

    {
      icon: (
        <Subscriptions
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Abonelikler",
    },
  ];

  const secondaryLinks = [
    {
      icon: (
        <VideoLibrary
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Kitaplik",
    },
    {
      icon: (
        <History
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Geçmiş",
    },
    {
      icon: (
        <SmartDisplay
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Videolarınız",
    },
    {
      icon: (
        <WatchLater
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Daha sonra izle",
    },
    {
      icon: (
        <ThumbUpOffAlt
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Beğenilen Videolar",
    },
  ];

  const subscriptionLinks = [
    {
      icon: (
        <MusicNote
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Müzik",
    },
    {
      icon: (
        <SportsVolleyball
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Spor",
    },
    {
      icon: (
        <Gamepad
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Oyun",
    },
    {
      icon: (
        <Movie
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Film",
    },
  ];

  const helpLinks = [
    {
      icon: (
        <Settings
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Ayarlar",
    },
    {
      icon: (
        <Flag
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Rapor geçmişi",
    },
    {
      icon: (
        <HelpOutline
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Yardım",
    },
    {
      icon: (
        <Feedback
          sx={{
            fontSize: "1.25rem",
          }}
        />
      ),
      name: "Geribildirim yolla",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <Box
      sx={{
        width: "2/12",
        backgroundColor: "#212121",
        paddingRight: "1.25rem",
        overflow: "auto",
        paddingBottom: "2rem",
      }}
    >
      <List sx={{ borderBottom: "2px solid #4B5563", p: 0 }}>
        {mainLinks.map(({ icon, name }) => (
          <ListItem
            key={name}
            sx={{
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              "&:hover": { backgroundColor: "#4A5568" },
              ...(name === "Home" && { backgroundColor: "#1F2933" }),
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ fontSize: "0.875rem" }} />
          </ListItem>
        ))}
      </List>

      <List sx={{ borderBottom: "2px solid #4B5563", p: 0 }}>
        {secondaryLinks.map(({ icon, name }) => (
          <ListItem
            key={name}
            sx={{
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              "&:hover": { backgroundColor: "#4A5568" },
              ...(name === "Home" && { backgroundColor: "#1F2933" }),
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ fontSize: "0.875rem" }} />
          </ListItem>
        ))}
      </List>

      <List sx={{ borderBottom: "2px solid #4B5563", p: 0 }}>
        {subscriptionLinks.map(({ icon, name }) => (
          <ListItem
            key={name}
            sx={{
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              "&:hover": { backgroundColor: "#4A5568" },
              ...(name === "Home" && { backgroundColor: "#1F2933" }),
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ fontSize: "0.875rem" }} />
          </ListItem>
        ))}
      </List>

      <List sx={{ borderBottom: "2px solid #4B5563", p: 0 }}>
        {helpLinks.map(({ icon, name }) => (
          <ListItem
            key={name}
            sx={{
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              "&:hover": { backgroundColor: "#4A5568" },
              ...(name === "Home" && { backgroundColor: "#1F2933" }),
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ fontSize: "0.875rem" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
