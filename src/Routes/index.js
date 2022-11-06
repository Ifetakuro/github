import React, { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import ErrorFallback from "../components/ErrorBoundary";

const Home = lazy(() => import("../Pages/Home"));
const AllRepos = lazy(() => import("../Pages/AllRepos"));
const Repo = lazy(() => import("../Pages/Repo"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const Profile = lazy(() => import("../Pages/Profile"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/repos" element={<AllRepos />}>
        <Route path=":repoId" element={<Repo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
