import { Box } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        padding: "0.75rem",
      }}
    >
      {/* <Box
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          borderWidth: "0.25rem",
          borderColor: "#f00",
          borderStyle: "solid",
          borderRadius: "50%",
          borderTopColor: "transparent",
          animation: "spin 1s linear infinite",
        }}
      ></Box> */}

      <CircularProgress
        sx={{
          width: "6rem",
          height: "4rem",
          borderWidth: "0.2rem",
          color: "red",
        }}
      />
    </Box>
  );
}
