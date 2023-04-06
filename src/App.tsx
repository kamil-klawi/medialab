import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PageNotFound, Contact } from "@views";
import { Navbar } from "@components";

const Blog = lazy(() => import("./views/Blog"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>Agency</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/works" element={<h1>Case studies</h1>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
