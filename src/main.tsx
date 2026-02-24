import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Force Dark Mode By Default
const theme = localStorage.getItem("theme");

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark"); // default dark
}

createRoot(document.getElementById("root")!).render(<App />);