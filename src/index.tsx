import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/pages/App";
import { GlobalStyles } from "twin.macro";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#D2D3D3",
      secondary: "#9AA0A6",
    },
    background: {
      default: "#202124",
      paper: "#151618",
    },
    primary: {
      main: "#3f51b5",
      dark: "#344397",
    },
    divider: "#3f51b5",
    secondary: {
      main: "#c73800",
      dark: "#a32e00",
    },
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <CssBaseline />

      <App />
    </ThemeProvider>
  </BrowserRouter>
);
