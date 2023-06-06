import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../features/layout";

const Home = lazy(() => import("../pages/home"));
const Detail = lazy(() => import("../pages/detail"));

export const RootRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
