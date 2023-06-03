import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Main from "./pages/main/Main";
import { Jobs } from "./pages/jobs";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import AdminPortal from "./pages/AdmitPortal/AdmitPortal";
import LoginToPortal from "./pages/AdmitPortal/Login";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={"jobs"} element={<Jobs />} />
          </Route>
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route
            path="login-portal"
            element={
              // <AuthRoute>
              <LoginToPortal />
              // </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
