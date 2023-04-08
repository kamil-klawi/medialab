import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Agency, Services, Contact, PageNotFound } from "@views";
import { Navbar } from "@components";

const Blog = lazy(() => import("./views/Blog"));
const Works = lazy(() => import("./views/Works"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
