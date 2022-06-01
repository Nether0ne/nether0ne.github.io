import { Box } from "@mui/material";
import { FC } from "react";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      id="wrapper"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minWidth="100%"
      height="100%"
    >
      {children}
    </Box>
  );
};

export default MainLayout;
