import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
// Initialize Firebase
import "./firebase/config";

createRoot(document.getElementById("root")!).render(<App />);
  