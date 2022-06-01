import { Box, Typography } from "@mui/material";
import { FC } from "react";
import StreamsLiveIcon from "../icons/StreamsLive";

const StreamsLiveAuthPage: FC = () => {
  let success = false;
  const address = window.location.href;
  const params = address.substring(address.indexOf("#") + 1).split("&");

  for (const param of params) {
    const [key, value] = param.split("=");

    if (key === "access_token" && value) {
      success = true;
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <StreamsLiveIcon sx={{ fontSize: "10rem", color: success ? "primary.main" : "#e64c4c" }} />
        <Typography variant="h3">Streams Live</Typography>
      </Box>
      <Typography variant="h4">
        {success ? "Your account was successfully linked" : "Failed linking your account"}
      </Typography>
    </Box>
  );
};

export default StreamsLiveAuthPage;
