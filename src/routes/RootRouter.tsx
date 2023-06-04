import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
//const Detail = lazy(() => import("../pages/detail"));

export const RootRouter = () => (
  <BrowserRouter>
    {/*      <Suspense fallback={<FallBack />}> */}
    <Routes>
      {/*  <Route path="/*" element={<MasterLayoutUser />}> */}
      <Route path="*" element={<Home />} />
      {/*    // <Route path="password" element={<Detail />} /> */}
    </Routes>
    {/*   </Suspense> */}
  </BrowserRouter>
);
