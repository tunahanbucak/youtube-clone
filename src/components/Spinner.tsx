import { Box } from "@mui/material";
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
