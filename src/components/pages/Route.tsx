import { FC } from "react";
import { useParams } from "react-router-dom";
import { Dictionary } from "lodash";
import { Box, CircularProgress, Typography } from "@mui/material";

const routes = {
  "streams-live-coinbase": {
    href: "https://commerce.coinbase.com/checkout/5df366b5-f6d6-4dab-8988-189946b1a7c3",
    label: "Stream Live Contribution via Coinbase",
  },
  // "streams-live": {
  //   href: "",
  //   label: "",
  // },
} as Dictionary<{ href: string; label: string }>;

const RoutePage: FC = () => {
  const { route } = useParams();

  const isMatching = route && route !== "" && routes[route];

  if (isMatching) {
    window.location.href = routes[route].href;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {route && routes[route] && <CircularProgress size="5rem" />}
      <Typography variant="h3">
        {route && routes[route]
          ? `Redirecting to ${routes[route].label}`
          : `No matching URL were found`}
      </Typography>
    </Box>
  );
};

export default RoutePage;
