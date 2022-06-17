import { Box, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import StreamsLiveIcon from "../icons/StreamsLive";

const StreamsLiveAuthPage: FC = () => {
  let authorized = false;
  const address = window.location.href;
  const params = address.substring(address.indexOf("#", address.indexOf("#") + 1) + 1).split("&");

  for (const param of params) {
    const [key, value] = param.split("=");

    if (key === "access_token" && value) {
      authorized = true;
    }
  }

  useEffect(() => {
    document.title = "Streams Live Authorization";
  });

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
        <StreamsLiveIcon
          sx={{ fontSize: "10rem", color: authorized ? "primary.main" : "#e64c4c" }}
        />
        <Typography variant="h3">Streams Live</Typography>
      </Box>
      <Typography variant="h4">
        {authorized ? "Your account was successfully linked" : "Failed linking your account"}
      </Typography>
    </Box>
  );
};

export default StreamsLiveAuthPage;
