import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGoogleAnalytics } from "./lib/googleAnalytics.ts";

const GA_ID = import.meta.env.VITE_GA_ID;

if (GA_ID) {
  initGoogleAnalytics(GA_ID);
}

createRoot(document.getElementById("root")!).render(<App />);
