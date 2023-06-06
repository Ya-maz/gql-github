import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Detail = lazy(() => import("../pages/detail"));

export const RootRouter = () => (
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        {/*  <Route path="/*" element={<MasterLayoutUser />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
    </Routes>
    </Suspense>
  </BrowserRouter>
);
