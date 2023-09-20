import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import Card from "./components/Card";
import { HomePageVideos } from "./Types";
import { useAppSelector } from "./store/hooks";

function App() {
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
