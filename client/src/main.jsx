import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not Found</h1>, // Attach `errorElement` here
    children: [
      {
        path: "home", // Child path does not need a leading slash
        element: <Home />,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "about/:aboutId",
        element: <About />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
