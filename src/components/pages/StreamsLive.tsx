import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import ChromeIcon from "../icons/Chrome";
import FirefoxIcon from "../icons/Firefox";
import StreamsLiveIcon from "../icons/StreamsLive";
import Image from "../misc/Image";

const carouselItems = [
  { src: "assets/images/streams-live/main.jpg", alt: "Streams Live" },
  {
    src: "assets/images/streams-live/introduction.jpg",
    alt: "Keep your favorite streamers closer!",
  },
  { src: "assets/images/streams-live/settings.jpg", alt: "Adjust your application to your style!" },
  {
    src: "assets/images/streams-live/categoryGroup.jpg",
    alt: "Group your live streams by category",
  },
  { src: "assets/images/streams-live/platformGroup.jpg", alt: "Or group them by platform!" },
  { src: "assets/images/streams-live/search.jpg", alt: "Or search desired streams by your own!" },
];

const StreamsLive: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Streams Live";
  });

  return (
    <Grid
      container
      spacing={3}
      sx={{ px: "10rem", display: "flex", justifyContent: "space-around", alignItems: "center" }}
    >
      <Grid item xs={12} sm={7}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "4.5vw",
            "& svg": { fontSize: "6vw", color: "#e64c4c", mr: "1rem" },
          }}
        >
          <StreamsLiveIcon /> Streams Live
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "2vw" }}>
          Helps tracking your favorite streamers across different platforms*!
        </Typography>

        <Typography variant="h5" sx={{ fontSize: "1vw", pt: "1rem" }}>
          * Extension supports Twitch and Goodgame platforms, but many are yet to come!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "2rem",
            mt: 8,
            "& svg": { mr: 2 },
          }}
        >
          <Button variant="contained" onClick={() => navigate("/r/streams-live-chrome")}>
            <ChromeIcon />{" "}
            <Typography sx={{ fontSize: "1vw" }}>Download for Google Chrome</Typography>
          </Button>
          <Button variant="contained" onClick={() => navigate("/r/streams-live-firefox")}>
            <FirefoxIcon />{" "}
            <Typography sx={{ fontSize: "1vw" }}>Download for Mozilla Firefox</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Carousel>
          {carouselItems.map(({ src, alt }) => (
            <Image key={alt} src={`${src}`} alt={alt} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default StreamsLive;
