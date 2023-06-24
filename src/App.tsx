import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Main from "./pages/main/Main";
import { JobsView } from "./pages/jobs";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import AdminPortal from "./pages/AdmitPortal/AdmitPortal";
import LoginToPortal from "./pages/AdmitPortal/Login";
import AuthRoute from "./components/AuthRoute";
import CreateJob from "./components/CreateJob";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={"jobs"} element={<JobsView />} />
          </Route>
          <Route
            path="/admin-portal"
            element={
              <AuthRoute>
                <AdminPortal />
              </AuthRoute>
            }
          />
          <Route
            path="login-portal"
            element={
              <AuthRoute>
                <LoginToPortal />
              </AuthRoute>
            }
          />
          <Route
            path="create-job"
            element={
              <AuthRoute>
                <CreateJob />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
