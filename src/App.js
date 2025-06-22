import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Booking from "./Pages/Booking/Booking";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack'
import { StyledEngineProvider } from '@mui/material/styles';

// write theme
const theme = createTheme({
  palette: {
    primary: {
      main : "#2AA7FF",
      contrastText: "#ffffff"
    },
  }
})

function App() {
  return (
    <SnackbarProvider
    maxSnack={1}
    >
    
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-bookings" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
    </SnackbarProvider>
  );
}

export default App;
