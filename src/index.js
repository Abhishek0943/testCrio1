import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ConversationHistory from './pages/history';
import ChatWindow from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material';
import Modal from "react-modal"

// set modal root
Modal.setAppElement("#root");



const router = createBrowserRouter([{

  path: "/",
  element: <App />,
  children: [
    {
      path: "history",
      element: <ConversationHistory />
    },
    {
      path: "/",
      element: <ChatWindow />
    }
  ]
}])

const theme = createTheme({

  typography: {
    fontFamily: `"Ubuntu", "Open Sans", sans-serif`
  },
  palette: {
    primary: {
      main: "#9785BA",
      light: "#AF9FCD",
      contrastText: "black"
    },
    secondary: {
      main: "#D7C7F4",
      contrastText: "black"
    }
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.StrictMode>
);


