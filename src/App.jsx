import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

export default function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return routes;
}
