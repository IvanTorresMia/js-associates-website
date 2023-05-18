import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Main from "./pages/main/Main";
import { Jobs } from "./pages/jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={"jobs"} element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
