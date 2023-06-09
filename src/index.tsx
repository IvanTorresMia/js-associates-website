import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { getApps } from "firebase/app";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
// import { config } from "./config/config";
import { AuthProvider } from "./providers/authProvider";
import { fetchEnvVars } from "./api/vars";
import { config } from "./config/config";

// let config = {};

// const getConfigVars = async () => {
//   try {
//     const res = await fetchEnvVars();
//     config = res;
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

// getConfigVars();

export const app =
  getApps().length === 0 ? initializeApp(config) : getApps()[0];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
