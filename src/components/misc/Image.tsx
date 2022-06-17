import { FC, useState } from "react";
import { Box, Fade, SxProps } from "@mui/material";

interface ImageProps {
  readonly src: string;
  readonly alt: string;
  readonly wrapperSx?: SxProps;
  readonly imgSx?: SxProps;
  readonly className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, wrapperSx, imgSx, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box sx={wrapperSx} className={className}>
      {loaded ? null : <Box sx={wrapperSx} />}
      <Fade in={loaded}>
        <Box component="img" sx={imgSx} src={src} alt={alt} onLoad={() => setLoaded(true)} />
      </Fade>
    </Box>
  );
};

export default Image;
