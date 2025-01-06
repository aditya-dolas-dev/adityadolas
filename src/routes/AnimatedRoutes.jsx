import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "../components/features/LoadingAnimation";
import { AnimatePresence } from "framer-motion";

import { Suspense, lazy } from "react";

const Explore = lazy(() => import("../components/pages/Explore"));

const Info = lazy(() => import("../components/pages/Info"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/explore"
          element={
            <Suspense fallback={<Loading />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="explore/info"
          element={
            <Suspense fallback={<Loading />}>
              <Info />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
